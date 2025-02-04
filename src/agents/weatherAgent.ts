import axios from "axios";

export const getWeatherInfo = async (destination: string): Promise<string> => {
    try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
        params: {
        key: "YOUR_WEATHER_API_KEY",
        q: destination,
        },
    });
    const { temp_c, condition } = response.data.current;
    return `En ${destination}, la temperatura actual es de ${temp_c}°C y está ${condition.text}.`;
    } catch (error) {
    return "Lo siento, no pude obtener la información del clima. Inténtalo más tarde.";
    }
};