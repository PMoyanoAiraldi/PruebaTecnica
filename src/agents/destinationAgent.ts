export const destinationAgent = (message: string) => {
    if (message.includes("destinos")) {
        return {
        response: "Algunos destinos populares son París, Tokio y Nueva York. ¿Cuál te interesa?",
        context: { agent: "destinationAgent" },
        };
    }
    return null;
};

export const getDestinationSuggestions = async (): Promise<string> => {
    return "¿Buscas destinos de playa, montaña o ciudad? Por favor, dime más sobre tus preferencias.";
};

