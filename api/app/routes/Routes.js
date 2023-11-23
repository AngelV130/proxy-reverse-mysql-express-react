import {Router} from 'express';
import ControllerToDo from '../Controllers/ControllerToDo.js';

export const to_do = Router();
const app = to_do

app.get('/', ControllerToDo.index);

app.post('/', ControllerToDo.insert);

app.delete('/', ControllerToDo.delete);
