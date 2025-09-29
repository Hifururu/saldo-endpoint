import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint principal
app.get("/saldo", async (req, res) => {
  try {
    // Llamamos al webhook de Make (reemplaza con tu URL de Make)
    const resp = await fetch("https://hook.us2.make.com/klh1dudrowd9kt5s6pnkhezjcwlpdfi8");
    const data = await resp.json();

    // ⚠️ Aquí ajustamos según cómo venga tu JSON de Make
    // Ejemplo con H1, H2, H3:
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
