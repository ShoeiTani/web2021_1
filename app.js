const express = require("express");
const app = express();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("main.db");

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let sort = "";
  if (req.query.sortBy == "Default") sort = " order by id";
  if (req.query.sortBy == "Rank") sort = " order by rank";
  if (req.query.sortBy == "Name") sort = " order by name";
  if (req.query.sortBy == "WinningRate") sort = " order by win";
  if (req.query.sortOrder == "desc") sort = sort + " desc";
  if (req.query.sortOrder == "asc") sort = sort + " asc";
  db.serialize(() => {
    let sql = "select * from team" + sort + ";";
    console.log(sql);
    db.all(sql, (error, row) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      res.render("show", { data: row });
    });
  });
});

app.get("/team/:id", (req, res) => {
  db.serialize(() => {
    let sql =
      "select team.*,player.name as player_name,player.id as player_id from team join player on team.id = player.team_id where team.id=" +
      req.params.id +
      ";";
    console.log(sql);
    db.all(sql, (error, row) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      console.log(row);
      res.render("team", { data: row });
    });
  });
});

app.get("/player/:id", (req, res) => {
  db.serialize(() => {
    let sql =
      "select player.*, team.name as team_name, position.position from player join team on player.team_id=team.id join position on player.position_id=position.id where player.id=" +
      req.params.id +
      ";";
    console.log(sql);
    db.all(sql, (error, row) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      console.log(row);
      res.render("player", { data: row });
    });
  });
});

app.post("/insert", (req, res) => {
  let sql =
    `
  insert into player (name,height,weight,team_id,position_id) values ("` +
    req.body.name +
    `",` +
    req.body.height +
    `,` +
    req.body.weight +
    `,` +
    req.body.team_id +
    `,` +
    req.body.position_id +
    `);`;
  console.log(sql);
  db.serialize(() => {
    db.run(sql, (error, row) => {
      console.log(error);
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      res.redirect("public/insert.html");
    });
  });
  console.log(req.body);
});

app.get("/search", (req, res) => {
  console.log(req.query.searchName);
  db.serialize(() => {
    let sql = "";
    if (req.query.searchFrom == "Team")
      sql =
        "select * from team where name like '%" + req.query.searchName + "%';";
    if (req.query.searchFrom == "Player")
      sql =
        "select * from player where name like '%" +
        req.query.searchName +
        "%';";
    console.log(sql);
    db.all(sql, (error, row) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      console.log(row);
      if (req.query.searchFrom == "Team") res.render("searchTeam", { data: row });
      if (req.query.searchFrom == "Player") res.render("searchPlayer", { data: row });
      
    });
  });
});

app.use(function (req, res, next) {
  res.status(404).send("ページが見つかりません");
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
