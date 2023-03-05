const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());

const connexion = mysql.createConnection(
    {
        user: "root",
        database: "devhunt2",
        host: "localhost",
        password: "",
        multipleStatements: true,
    }
);

//VERIFICATION
app.post('/verification', (req, res) => {

    const email = req.body.email;

    connexion.query("SELECT * FROM bd_etudiant WHERE Email = ? ", [email],
        (err, result) => {
            res.send(result)
        }
    )


})

//INSCRIPTION
app.post('/inscription', (req, res) => {

    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const matricule = req.body.matricule;

    const  sql = `
        INSERT INTO database_eni (Username, Email, Mdp, Matricule) VALUES (?, ?, ?, ?);
        DELETE FROM bd_etudiant WHERE Email = ?;
    `;
    

    connexion.query(sql, [username, [email], [password], [matricule],[email], [email]],
        (err, result) => {
            if(err) {
                res.send(err);
            }
            else {
                res.send({message: true});
            }
        }
    )

})

//CONNEXION
app.post('/connexion', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const  sql2 = `
        SELECT * FROM database_eni WHERE Username = ? AND Mdp = ?;
    `;
    

    connexion.query(sql2, [[username], [password]],
        (err, result) => {
            res.send(result);
        }
    )

})

//PUBLICATION
app.post('/publication', (req, res) => {

    const username = req.body.username;
    const description = req.body.description;
    const titre = req.body.titre;
    const like = req.body.like;

    const  sql2 = `
        INSERT INTO publication  (username, titre, description, vue) VALUES (?, ?, ?, ?);
    `;
    

    connexion.query(sql2, [[username], [titre], [description], [like]],
        (err, result) => {
            if(err){
                res.send({message: false});
            }else {
                res.send({message: true});
            }

        }
    )

})

//ACTUAALITER
app.get('/data', (req, res) => {

    const  sql2 = `
        SELECT * FROM publication ORDER BY dates DESC;
    `;
    

    connexion.query(sql2, 
        (err, result) => {
            if(err){
                res.send({message: false});
            }else {
                res.send(result);
            }

        }
    )

})

//PUSH COMENTAIRE
app.get('/getcoms', (req, res) => {

    const id = req.body.id;

    const  sql2 = `
        SELECT * FROM commentaire WHERE PUB = ?;
    `;
    

    connexion.query(sql2, [id],
        (err, result) => {
            if(err){
                res.send({message: false});
            }else {
                res.send(result);
            }

        }
    )

})



app.listen(5000, () => {
    console.log('Mande ny mandady e');
});


