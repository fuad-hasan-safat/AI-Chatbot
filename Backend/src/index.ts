import app from "./app.js";
import connectionToDatabase from "./db/connection.js";

// connection and listener
const PORT = process.env.PORT || 5000 ;
connectionToDatabase()
.then(()=>{
    app.listen(PORT, ()=>{console.log("Server Open")})
}).catch((err)=>console.log(err));

