const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

// app.get("/api/users", (req, res) => {
//     return res.json(users);
// });

// app.get("/users", (req, res) => {

//     const html = `
//         <ul>
//             ${users
//                 .map((user) => `<li>${user.first_name}</li>`)
//                 .join("")}
//         </ul>
//     `;

//     return res.send(html);
// });

// app.get("/api/users/:id",(req,res)=>{
//     const id = req.params.id;
//     const user = user.find((user)=>user.id===id)
// });
// // :id is dynamic means 1,2,3,4,5,......
app.route("/api/users/:id")

    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);

        return res.json(user);
    })

    .post((req, res) => {
        return res.send("POST request");
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