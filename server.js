const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: 'REHAN', email: 'LHO@gmail.com'},
    { id: 2, name: 'BAIM', email: 'LHO@gmail.com'},
    { id: 3, name: 'RAMA', email: 'LHO@gmail.com'},
];

//Endpoint get mengambil data

app.get("/api/users",(req, res) => {
    res.json(users);
});

//Endpoint mengambil user bedasarkan id

app.get("/api/users/:id",(req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
    if(user){
        return res.status(404).send("user tidak adda");
    }
    res.json(user);
});

app.post("/api/users",(req, res) => {
    const {name, email} = req.body;
    const newUser = {
        id: user.length + 1,
        name,
        email
    };
    user.push(newUser);
    res.status(201).json(newUser);
});

app.delete("/api/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter((u) => u.id !== userId);

    res.sendStatus(204).send("user berhasil dihapus");
});

app.put("/api/users/:id",(req, res) => {
    const userId = parseInt(req.params.id);
    const {name, email} = req.body;
    const user = users.find((u) => u.id === userId);
    if(!user){
        return res.status(404).send("user tidak ada");
    }
    user.name = name;
    user.email = email;
    res.json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server berjalan di http://localhost:${PORT}`);
});