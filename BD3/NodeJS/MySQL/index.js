import express from "express";
import mysql from "mysql2/promise";

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ipssi"
});

const app = express();
app.set("view engine", "ejs");
app.use(express.json());

app.get("/users", async (req, res) => {
    const [rows] = await (await connect).execute("SELECT * FROM users");
    res.status(200).json(rows);
});

app.delete("/users/:id", async (req, res) => {
    const [rows] = await (await connect).execute("DELETE FROM users WHERE id = ?", [req.params.id]);

    if (rows.affectedRows === 0) {
        res.status(404).json({ message: "User not found" });
    } else if (rows.affectedRows) {
        console.log(`User ${req.params.id} deleted`);
        res.status(200).json(rows);
    } else {
        res.status(200).json(rows);
    }
});

const port = 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});