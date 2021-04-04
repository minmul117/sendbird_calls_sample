import express from "express";

const app: express.Application = express()
const port = 8080

app.get( "/", ( req: any, res: any ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
