const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./db/db');
const userRouter = require('./router/userRouter')
const expenseRouter = require('./router/expenseRouter')
const app = express();

app.use(cors({origin:'*'}));
app.use(express.json());
app.use('/auth',userRouter)
app.use('/expenses',expenseRouter)
connectDb();

const port = 5050 || process.env.PORT_NO ;
app.listen(port , ()=>{
        console.log(`Server on :- ${port}`);
})