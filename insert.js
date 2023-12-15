const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('main.db');

let sql = `
insert into player(name,height,weight,team_id,position_id) 
values 
("Derrick White",193,86,2,1),
("Jaylen Brown",198,101,2,2),
("Jason Tatum",203,95,2,3),
("Al Horford",206,109,2,4),
("Robert Williams",206,113,2,5);
`

db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを追加しました" );
	});
});
