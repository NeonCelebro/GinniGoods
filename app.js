
const express = require('express');
const {AppDataSource} = require("./db");
const {DataSource} = require("typeorm");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "test",
        password: "test",
        database: "test",
        synchronize: true,
        logging: true,
        entities: [],
        subscribers: [],
        migrations: [],
    })
})