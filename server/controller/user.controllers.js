import { readfile , writefile } from "../utils/file.handler.js";

export const getTasks = (req, res) => {
    const data = readfile()
    res.json( data )
};

export const createTasks = (req, res) => {
    
};

export const updateTasks = (req, res) => {

};

export const deleteTasks = (req, res) => {

};
