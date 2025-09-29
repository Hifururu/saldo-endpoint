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

    res.json({
      ingresos: data[6] || 0,
      gastos: data[7] || 0,
      saldo: data[8] || 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
