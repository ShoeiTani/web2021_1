const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('main.db');

let sql = `
select * from player;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			/*console.log( data.id + ' : ' + data.name + ' ' + data.name2 + ' ' + data.win + ' ' + data.lose + ' ' + data.conference + ' ' + data.rank);*/
      console.log( data.id + ' : ' + data.name + ' ' + data.height + ' ' + data.weight + ' ' + data.team_id + ' ' + data.position_id);
      /*console.log( data.id + ' : ' + data.position);*/
		}
	});
});
