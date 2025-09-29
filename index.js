import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint principal
app.get("/saldo", async (req, res) => {
  try {
    // Llamamos al webhook de Make
    const resp = await fetch("https://hook.us2.make.com/klh1dudrowd9kt5s6pnkhezjcwlpdfi8");
    const data = await resp.json();

    // ⚡ Ajustamos las claves según lo que devuelve Make
    // Ejemplo: { "7": "73000", "8": "12000" }
    const ingresos = parseInt(data["7"] || 0, 10);
    const gastos   = parseInt(data["8"] || 0, 10);
    const saldo    = ingresos - gastos;

    res.json({ ingresos, gastos, saldo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
