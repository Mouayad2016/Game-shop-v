import axios from "axios";

async function getData({ url }) {
  try {
    const response = await axios.get(`http://localhost:8000${url}`);
    return response;
  } catch (e) {
    throw e;
  }
}

export { getData };
