import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://172.19.0.3:4000/tasks");

export const createTaskRequest = async (task) =>
  await axios.post("http://172.19.0.3:4000/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://172.19.0.3:4000/tasks/${id}`);
  
export const getTaskRequest = async (id) =>
  await axios.get(`http://172.19.0.3:4000/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://172.19.0.3:4000/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://172.19.0.3:4000/tasks/${id}`, {
    done,
  });
