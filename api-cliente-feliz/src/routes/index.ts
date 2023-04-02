import {Router} from "express";
import {userRoutes} from "./childRoutes/user.routes";
import {clienteRoutes} from "./childRoutes/cliente.routes";

const routes = Router();

routes.use("/usuario", userRoutes);
routes.use("/cliente", clienteRoutes);

export { routes };
