import { LangGraph, Node } from "@langchain/langgraph";
import { getDestinationSuggestions } from "../agents/destinationAgent";
import { getLuggageSuggestions } from "../agents/luggageAgent";
import { getWeatherInfo } from "../agents/weatherAgent";

// Crear el grafo
const graph = new LangGraph();

// Nodos
const start = new Node("start", { message: "Hola, ¿cómo puedo asistirte en tu planificación de viaje?" });
const destinationsNode = new Node("destinations", { action: getDestinationSuggestions });
const luggageNode = new Node("luggage", { action: getLuggageSuggestions });
const weatherNode = new Node("weather", { action: getWeatherInfo });
const unknownNode = new Node("unknown", { message: "Lo siento, no entiendo tu consulta." });

// Conectar los nodos
start.connectTo(destinationsNode, (input: any) => input.includes("destino"));
start.connectTo(luggageNode, (input: any) => input.includes("equipaje"));
start.connectTo(weatherNode, (input:any) => input.includes("clima"));
start.connectTo(unknownNode);

// Añadir nodos al grafo
graph.addNode(start); 
graph.addNode(destinationsNode);
graph.addNode(luggageNode);
graph.addNode(weatherNode);
graph.addNode(unknownNode);

export default graph;
