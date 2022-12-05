//inclusione modulo express
const express = require("express");
const fs = require("fs");
const app = express();
const readData = () => {
  const attoriData = fs.readFileSync("./src/attori.json", "utf8");
  return JSON.parse(attoriData);
};

const read = () => {
  const registiData = fs.readFileSync("./src/registi.json", "utf8");
  return JSON.parse(registiData);
};
//utilizzare la cartella pubblica in modo statico
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//server
app.listen(3000, () => {
  console.log("Server in esecuzione");
});

app.get("/home", function (req, res) {
  res.sendFile("registi.html", { root: __dirname + "/src" });
});

// GET ATTORI
app.get("/attori", function (req, res) {
  //Lettura dati
  const attori = readData();
  const attoriArr = attori.map((att) => {
    const id = att.id;
    const nome = att.nome;
    const cognome = att.cognome;
    const data = att.data_nascita;
    return { id, nome, cognome, data };
  });
  res.json(attoriArr);
});

//GET ATTORE
app.get("/attore", function (req, res) {
  const attoreId = req.query.id; //Lettura parametro
  if (isNaN(attoreId || attoreId < 0)) {
    res.status(400).json({ error: "bad request" });
    return;
  }
  const attori = readData(); //Lettura dati
  const attore = attori.find((attore) => attore.id == attoreId);
  if (!attore) {
    res.status(404).json({ error: "not found" });
    return;
  }
  res.status(200).json(attore);
});

// POST ATTORE
app.post("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const attori = JSON.parse(fs.readFileSync("./src/attori.json", "utf8"));

  const nuovo_attore = {
    id: attori.length == 0 ? 1 : attori[attori.length - 1].id + 1,
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
  };

  attori.push(nuovo_attore);
  console.log(attori);

  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).json({ messaggio: "stringa attore creato" });
});

// DELETE ATTORE
app.delete("/attore", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).json({ error: "not found" });
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).json({ error: "not found" });
  }
  const deleteId = req.body.id;
  const attori = readData();
  const attoriArr = attori.filter((attore) => {
    return attore.id == deleteId;
  });
  if (attoriArr.length > 0) {
    const deleteArr = attori.filter((attore) => {
      return attore.id != deleteId;
    });
    fs.writeFileSync("./src/attori.json", JSON.stringify(deleteArr));
    res.status(200).json({ res: "attore cancellato" });
  } else {
    res.status(200).json({ res: "attore da cancellare non trovato" });
  }
});

// GET REGISTI
app.get("/registi", function (req, res) {
  //Lettura dati
  const registi = read();
  const registiArr = registi.map((reg) => {
    const id = reg.id;
    const nome = reg.nome;
    const cognome = reg.cognome;
    const data = reg.data_nascita;
    return { id, nome, cognome, data };
  });
  res.json(registiArr);
});

//GET REGISTA
app.get("/regista", function (req, res) {
  const registaId = req.query.id; //Lettura parametro
  if (isNaN(registaId || registaId < 0)) {
    res.status(400).json({ error: "bad request" });
    return;
  }
  const registi = read(); //Lettura dati
  const regista = registi.find((regista) => regista.id == registaId);
  if (!regista) {
    res.status(404).json({ error: "not found" });
    return;
  }
  res.status(200).json(regista);
});

// POST REGISTA
app.post("/regista", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const registi = JSON.parse(fs.readFileSync("./src/registi.json", "utf8"));

  const nuovo_regista = {
    id: registi.length == 0 ? 1 : registi[registi.length - 1].id + 1,
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
  };

  registi.push(nuovo_regista);
  console.log(registi);

  fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).json({ messaggio: "stringa regista creato" });
});

// DELETE REGISTA
app.delete("/regista", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).json({ error: "not found" });
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).json({ error: "not found" });
  }
  const deleteId = req.body.id;
  const registi = read();
  const registiArr = registi.filter((regista) => {
    return regista.id == deleteId;
  });
  if (registiArr.length > 0) {
    const deleteArr = registi.filter((regista) => {
      return regista.id != deleteId;
    });
    fs.writeFileSync("./src/registi.json", JSON.stringify(deleteArr));
    res.status(200).json({ res: "regista cancellato" });
  } else {
    res.status(200).json({ res: "regista da cancellare non trovato" });
  }
});
