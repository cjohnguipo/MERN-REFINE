import mongoose from "mongoose";

const ConnectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch((error) => console.log(error));
}

export default ConnectDB;