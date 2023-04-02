import {Router} from "express";
import {CreateClientController} from "../../modules/Clients/useCases/createClient/CreateClientController";
import {ListClientController} from "../../modules/Clients/useCases/listClient/ListClientController";
import {ListOneClientController} from "../../modules/Clients/useCases/listOneClient/ListOneClientController";
import {UpdateClientController} from "../../modules/Clients/useCases/updateClient/UpdateClientController";
import {DeleteClientController} from "../../modules/Clients/useCases/deleteClient/DeleteClientController";
import {CreateClienteRequest} from "../../requests/clienteRequests/CreateClienteRequest";
import {DeleteClienteRequest} from "../../requests/clienteRequests/DeleteClienteRequest";
import {ListOneClienteRequest} from "../../requests/clienteRequests/ListOneClienteRequest";
import {UpdateClienteRequest} from "../../requests/clienteRequests/UpdateClienteRequest";

const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const listOneClientController = new ListOneClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

const clienteRoutes = Router();

clienteRoutes.post("/cadastro", CreateClienteRequest, createClientController.handle);
clienteRoutes.get("/listar-todos", listClientController.handle);
clienteRoutes.get("/lista-um", ListOneClienteRequest, listOneClientController.handle);
clienteRoutes.put("/edicao", UpdateClienteRequest, updateClientController.handle);
clienteRoutes.delete("/excluir/:id", DeleteClienteRequest, deleteClientController.handle);

export { clienteRoutes };
