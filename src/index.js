import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    return res.send("<h1>Welcome Home!</h1>");
});

app.get("/ping", (req, res) => {
    return res.json({message: 'pong'});
})

app.get("/hello", (req, res) => {
    return res.json({message: "Hello, World!"});
})

app.get("/hi", (req, res) => {
    return res.json({message: "Hii"});
})

app.get("/hola", (req, res) => {
    return res.json({message: "Hii"});
})

app.get("/jim", (req, res) => {
    return res.json({message: "jim jam"});
})

app.get("/billu", (req, res) => {
    return res.json({message: "billu"});
})

app.get("/motupatlu", (req, res) => {
    return res.json({message: "motu patlu"});
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});