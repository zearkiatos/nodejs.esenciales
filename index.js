const express = require("express");
const app = express();

app.get("/",(request,response)=>{
    response.send("Hola, estoy en la ruta '/'!");
});

console.log("Iniciando Express.js 🤖");

app.listen(3000,()=>{
    console.log("Express ha iniciado correctamente! ✅ 🚀");
})