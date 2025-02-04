import axios from 'axios';

export const luggageAgent = async (message: string, context: any) => {
    if (message.includes("clima")) {
    const destination = context?.destination || "París";
    const apiKey = "TU_API_KEY_DE_OPENWEATHERMAP";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const { data } = await axios.get(weatherUrl);
        return {
        response: `El clima en ${destination} es de ${data.main.temp}°C con ${data.weather[0].description}.`,
        context: { ...context, agent: "luggageAgent" },
        };
    } catch {
        return { response: "No pude obtener el clima, intenta de nuevo.", context };
    }
    }

    if (message.includes("equipaje")) {
    return {
        response: "Para un viaje corto a París, lleva ropa cómoda, una cámara y un paraguas.",
        context: { ...context, agent: "luggageAgent" },
    };
    }
    return null;
};


export const getLuggageSuggestions = async (): Promise<string> => {
    return "¿Qué tipo de viaje estás planeando? Puedo ayudarte a empacar según el clima y la duración del viaje.";
};