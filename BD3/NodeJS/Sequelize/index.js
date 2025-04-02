import express from "express";
import route from "./routes/VehiculeRoute.js";
import sequelize from "./db.js";

sequelize.sync()
    .then(() => {
        console.log("Connected to the database");
        const port = 4000;

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error); 
        process.exit(1);
    });

const app = express();
app.use(express.json());

app.use(route);