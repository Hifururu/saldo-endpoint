import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 8080;

// Endpoint raíz (prueba)
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀 Usa /saldo para consultar el saldo");
});

// Endpoint principal
app.get("/saldo", async (req, res) => {
  try {
    // Llamamos a Make
    const resp = await fetch("https://hook.us2.make.com/klh1dudrowd9kt5s6pnkhezjcwlpdfi8");
    const data = await resp.json();

const ingresos = parseInt(data["7"] || 0, 10); // <- lee la clave "7" del JSON
const gastos = parseInt(data["8"] || 0, 10);   // <- si existe la clave 8
const saldo = ingresos - gastos;

res.json({ ingresos, gastos, saldo });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
