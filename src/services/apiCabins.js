import { toast } from 'react-hot-toast';
import axios from './../api/axios';

export async function getAllCabins() {
  try {
    const response = await axios.get('/api/v1/todo');

    return response.data.data.todo;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function createCabinApi(newCabin) {
  try {
    const response = await axios.post('/api/v1/todo', newCabin);

    return response.data.data.todo;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function editCabinApi(id, newCabin) {
  console.log(id, newCabin);
  // 64ec099750fdee24f36824f5
  try {
    const response = await axios.patch(`/api/v1/todo/${id}`, newCabin);

    console.log(response.data.data.todo);
    return response.data.data.todo;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function putCabinApi(id, newCabin) {
  console.log(id, newCabin);
  // 64ec099750fdee24f36824f5
  try {
    const response = await axios.put(`/api/v1/todo/${id}`, newCabin);

    console.log(response.data.data.todo);
    return response.data.data.todo;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function getCabin(id) {
  try {
    const response = await axios.get(`/api/v1/todo/${id}`);

    return response.data.data.todo;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function deleteCabinApi(id) {
  try {
    await axios.delete(`/api/v1/todo/${id}`);
  } catch (err) {
    toast.error(err.message);
  }
}
