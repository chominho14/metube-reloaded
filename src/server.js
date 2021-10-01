import express from "express";

const PORT = 4000;

const app = express();

const gossipmiddleware =(req, res, next) =>{
    console.log("dffef");
    next();
};

const handleHome = (req, res) =>{
    return res.send("wow this is middle");
};

const handleLogin = (req,res) =>{
    return res.send("login start");
};

app.use(gossipmiddleware);
app.get("/",handleHome );

const handleListening = () => 
    console.log(`Server listening on port 4000.http://localhost:${PORT}/`);

app.listen(PORT, handleListening);