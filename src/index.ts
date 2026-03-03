import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 3001

// Befintligt middleware snom vi använder globalt (för varje request som kommer in så körs denna middleware)
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
}),);


// Custom middleware 
const myMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Hi from middleware!! ");
  next();
}


// Routes
app.get("/hello", myMiddleware, (req, res) => {
  res.send("hello");
})

app.post("/hello", (req, res) => {
  res.json({"message": "hello from post"});
})



app.listen(PORT, () => {
  console.log(`Server körs på http://localhost:${PORT}`)
})
