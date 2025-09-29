import express from "express";
import fetch from "node-fetch";

const app = express();

// 👇 Siempre usa el puerto que Northflank le pasa (8080)
const PORT = process.env.PORT || 8080;

// Endpoint principal
app.get("/saldo", async (req, res) => {
  try {
    // Llamamos al webhook de Make (reemplaza con tu URL real)
    const resp = await fetch("https://hook.us2.make.com/klh1dudrowd9kt5s6pnkhezjcwlpdfi8");
    const data = await resp.json();

    // Ajusta según tu JSON
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
