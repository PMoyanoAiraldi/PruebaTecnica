import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/chat', (req, res) => {
    const { message, context } = req.body;

  // Respuesta temporal del bot
    res.json({ response: "¡Hola! Soy tu asistente de viajes.", context });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
