const server = require( './src/app.js' );
const { conn } = require('./src/db.js');
// const { port } = require('./src')

conn.sync({ force:true }).then(()=> {
    server.listen(3001, ()=> {
        console.log(`listening at port 3001`)
    });
});