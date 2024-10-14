const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Lista di immagini per le classi sociali
const classImages = {
  mostri: "https://i.imgur.com/example1.png",
  dannati: "https://i.imgur.com/example2.png",
  vermi: "https://i.imgur.com/example3.png",
  falliti: "https://i.imgur.com/example4.png",
  ignavi: "https://i.imgur.com/example5.png",
  mediocri: "https://i.imgur.com/example6.png",
  realizzati: "https://i.imgur.com/example7.png",
  eccellenti: "https://i.imgur.com/example8.png",
  supereroi: "https://i.imgur.com/example9.png",
};

// Endpoint API per ottenere le informazioni di una classe
app.get("/class-transition/:class", (req, res) => {
  const className = req.params.class.toLowerCase();
  const imageUrl = classImages[className];

  if (imageUrl) {
    res.json({
      success: true,
      class: className,
      narrative: `Sei passato alla classe ${className}. Ecco la tua nuova carta!`,
      imageUrl: imageUrl,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Classe non trovata!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server attivo su porta ${port}`);
});
