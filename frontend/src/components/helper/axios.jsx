import axios from "axios";

async function getData({ url }) {
  try {
    const response = await axios.get(`http://localhost:8000${url}`);
    return response;
  } catch (e) {
    throw e;
  }
}

async function postData({ url, data }) {
  try {
    const response = await axios.post(`http://localhost:8000${url}`, { data });
    return response;
  } catch (e) {
    throw e;
  }
}
async function deleteData({ url, data }) {
  try {
    const response = await axios.delete(`http://localhost:8000${url}`);
    return response;
  } catch (e) {
    throw e;
  }
}
export { getData, postData, deleteData };
