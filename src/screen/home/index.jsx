import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { BlurView } from "expo-blur";

export default function Home() {
    const API = "28d29b5dd5ab484e99f210938241907";
    const currentWeatherUrl = "https://api.weatherapi.com/v1/current.json";
    const forecastUrl = "https://api.weatherapi.com/v1/forecast.json";

    const [data, setData] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("Oye-Ekiti");
    const [inputCity, setInputCity] = useState(city);

    const fetchData = async (url, params, setState) => {
        try {
            const response = await axios.get(url, { params });
            setState(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setError("Unable to fetch data. Please try again later.");
        }
    };

    const handleSearch = () => {
        setCity(inputCity);
    };

    useEffect(() => {
        fetchData(currentWeatherUrl, { key: API, q: city }, setData);
    }, [city]);

    useEffect(() => {
        fetchData(forecastUrl, { key: API, q: city, days: 3 }, (data) => {
            setForecast(data.forecast.forecastday);
        });
    }, [city]);

    return (
        <SafeAreaView style={styles.root}>
            <ImageBackground 
                source={require("../../../assets/weather.png")}
                style={styles.background}
            >
                <BlurView intensity={30} tint="light" style={styles.blur}>
                    <View>
                        <View style={styles.container}>
                            <View style={styles.searchContainer}>
                                <Ionicons name="search" size={20} color={"#fff"}/>
                                <TextInput
                                    placeholder="Search city"
                                    value={inputCity}
                                    onChangeText={setInputCity}
                                    style={styles.input}
                                />
                                <TouchableOpacity style={styles.searchButton2} onPress={handleSearch}>
                                    <Text style={styles.searchButtonText}>Search</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.locationContainer}>
                                <Ionicons name="location" size={20} color={"#fff"} />
                                <Text style={styles.locationName}>{data?.location.name}</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        {error ? (
                            <Text>{error}</Text>
                        ) : data ? (
                            <View>
                                <View style={styles.tempContainer}>
                                    <Text style={styles.mainTemp}>{data.current.temp_c}°C</Text>
                                    <Image
                                        source={{ uri: `https:${data.current.condition.icon}` }}
                                        style={styles.tempImage}
                                    />
                                </View>
                                <View style={styles.contentContainer}>
                                    <View style={styles.rowContainer}>
                                        <View style={styles.item}>
                                            <Ionicons name="speedometer" size={20} color={"#fff"} style={styles.icon}/>
                                            <View>
                                                <Text style={styles.label}>Pressure</Text>
                                                <Text style={styles.value}>{data.current.pressure_mb} mb</Text>
                                            </View>
                                        </View>
                                        <View style={styles.item}>
                                            <Ionicons name="cloud-outline" size={20} color={"#fff"} style={styles.icon}/>
                                            <View>
                                                <Text style={styles.label}>Wind</Text>
                                                <Text style={styles.value}>{data.current.wind_kph} kph</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.rowContainer}>
                                        <View style={styles.item}>
                                            <Ionicons name="sunny" size={20} color={"#fff"} style={styles.icon}/>
                                            <View>
                                                <Text style={styles.label}>UV Index</Text>
                                                <Text style={styles.value}>{data.current.uv}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.item}>
                                            <Ionicons name="water" size={20} color={"#fff"} style={styles.icon}/>
                                            <View>
                                                <Text style={styles.label}>Humidity</Text>
                                                <Text style={styles.value}>{data.current.humidity}%</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ) : (
                            <Text>Loading...</Text>
                        )}
                    </View>
                    <View style={styles.forecastContainer}>
                        {forecast && forecast.map((day, index) => (
                            <View key={index} style={styles.forecastItem}>
                                <Text style={styles.date}>{day.date}</Text>
                                <Image
                                    source={{ uri: `https:${day.day.condition.icon}` }}
                                    style={styles.forecastImage}
                                />
                                <Text style={styles.condition}>{day.day.condition.text}</Text>
                                <Text style={styles.temp}>
                                    {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C
                                </Text>
                            </View>
                        ))}
                    </View>
                </BlurView>
            </ImageBackground>
        </SafeAreaView>
    );
}
