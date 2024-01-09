const express = require("express");
const app = express();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("main.db");

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  db.serialize(() => {
    let sql = "select * from team;";
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
      "select player.*, team.name as team_name, position.position from player join team on player.team_id=team.id join position on player.position_id=position.id where player.id=" + req.params.id + ";";
    db.all(sql, (error, row) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      console.log(row);
      res.render("player", { data: row });
    });
  });
});
/*app.get("/team", (req, res) => {
  db.serialize(() => {
    db.all("select * from team;", (error, row) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      res.render("show", { data: row });
    });
  });
});

app.get("/lookup")
/*app.get("/top", (req, res) => {
  //console.log(req.query.pop);    // ①
  let desc = "";
  if (req.query.desc) desc = " desc";
  let sql =
    "select id, 都道府県, 人口 from example order by 人口" +
    desc +
    " limit " +
    req.query.pop +
    ";";
  //console.log(sql);    // ②
  db.serialize(() => {
    db.all(sql, (error, data) => {
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      //console.log(data);    // ③
      res.render("select", { data: data });
    });
  });
});
app.get("/db/:id", (req, res) => {
  db.serialize(() => {
    db.all(
      "select id, 都道府県, 人口, 大学 from example where id=" +
        req.params.id +
        ";",
      (error, row) => {
        if (error) {
          res.render("show", { mes: "エラーです" });
        }
        res.render("db", { data: row });
      },
    );
  });
});
app.post("/insert", (req, res) => {
  let sql =
    `
  insert into example (都道府県,人口,大学) values ("` +
    req.body.name +
    `",` +
    req.body.jinko +
    `,` +
    req.body.daigaku +
    `);
  `;
  console.log(sql);
  db.serialize(() => {
    db.run(sql, (error, row) => {
      console.log(error);
      if (error) {
        res.render("show", { mes: "エラーです" });
      }
      res.redirect("/db");
    });
  });
  console.log(req.body);
});*/
app.use(function (req, res, next) {
  res.status(404).send("ページが見つかりません");
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
