import express, {Request, Response} from "express"

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req: Request, res: Response) => {
  res.json({message: "hello"})
})


app.listen(3000, () => {
  console.log("app work on port 3000");
  
})