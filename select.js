const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
select student.id, student.name, school.name as name2  
from student inner join school 
on student.school_id=school.id
;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' ' + data.name2/* + ' ' + data.school_id*/);
		}
	});
});
