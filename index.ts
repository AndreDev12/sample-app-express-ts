import express, {Request, Response} from "express";

const app = express();

const PORT = process.env.PORT ?? 3000;

app.get("/", (req: Request, res: Response) => { 
  res.status(200).send("¡Aplicación desplegada en Render!");
}); 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
})