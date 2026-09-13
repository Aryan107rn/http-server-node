const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

app.use(express.json());

app.route("/api/users/:id")

    .get((req, res) => {
        const id = Number(req.params.id);

        const user = users.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.json(user);
    })

    .post((req, res) => {
        const body = req.body;

        const newUser = {
            ...body,
            id: users.length + 1
        };

        users.push(newUser);

        return res.status(201).json({
            message: "User created",
            user: newUser
        });
    })

    .put((req, res) => {
        return res.send("PUT request");
    })

    .patch((req, res) => {
        return res.send("PATCH request");
    })

    .delete((req, res) => {
        return res.send("DELETE request");
    });

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});