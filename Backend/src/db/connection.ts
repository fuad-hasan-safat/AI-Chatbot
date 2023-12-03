import { connect, disconnect } from "mongoose";

export default async function connectionToDatabase(){
    try{
        await connect(process.env.MONGODB_URL);
    }catch(error){
        console.log(error);
        throw new Error("Can not connect to Database");
    }
}

export async function disconnectFromDatabase() {
    try{
        await disconnect();
    }catch(error){
        console.log(error);
        throw new Error("Can not disconnect from Database");
    }
}