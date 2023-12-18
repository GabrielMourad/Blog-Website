//starts the application(home), calls code related to express,db,other services.
import app from "./home.js"
import {connectDB} from './database.js'

connectDB();
app.listen(3004);
console.log('Server on port', 3004);