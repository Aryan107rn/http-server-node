const express=require("express");

const app = express();

app.use(express.json());

const user=[
    {
        id:1,
        name:"Aryan",
        age:20
    },
    {
        id:2,
        name="Rahul",
        age:21
    }
];

app.get