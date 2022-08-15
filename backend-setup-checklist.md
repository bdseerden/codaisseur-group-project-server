# Backend Project Setup Checklist ✅

#### STEP 1:  ✅

npm init -y & git init

#### STEP 2:  ✅

add "/node_modules" to .gitignore

#### STEP 3:  ✅

npm install sequelize sequelize-cli pg express

#### STEP 4:  ✅

npx sequelize-cli init

#### STEP 5:  ✅

create new elephantSQL

#### STEP 6:  ✅

# setup development in config.json file like this

{
"development": {
"url": "!Paste url here!",
"dialect": "postgres"
},

#### STEP 7: ✅

# run to test if we connect to server 

npx sequelize-cli db:migrate

#### STEP 8:  ✅

# in models/index.js change line 15 to

sequelize = new Sequelize(config.url, config)

#### STEP 9: ✅

create index.js in root

#### STEP 10: x

# copy this into index.js

const express = require("express");
const app = express();

const PORT = 4000;

const !capitalized tablename! = require("./models").!actual tablename!;

app.use(express.json());

app.post("/echo", (req, res) => {
res.json(req.body);
});

app.listen(PORT, () => console.log("server running"));

# copy this into terminal to test connection

http POST :4000/echo hello=world
