import "express-async-errors";
import express from 'express';
import {routes} from "./routes";
import { exceptionsHandler } from "./errors/ExceptionsHandler";
import { notFound } from "./errors/NotFound";
import cors, { CorsOptions } from 'cors';

const app = express();

const corsOptions: CorsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(routes);

app.use(exceptionsHandler);
app.use(notFound);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("Servidor rodando na porta 3333 "));
