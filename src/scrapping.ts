import cors from "cors";
import express, {
    type Request,
    type Response,
    type NextFunction,
} from "express";

const app = express()
const whitelist = ["*"];

const corOP: cors.CorsOptions = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 204,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corOP));
app.options("*", cors<Request>(corOP));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const origin: any = "*";
    if (whitelist.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token"
    );
  
    if (err)
      res
        .status(err.status || 500)
        .json({ error: 'Error' });
    next();
  });

  

export {
    app
}