import axios from 'axios';

const baseUrl =
  process.env.REACT_APP_LOCALHOST === 'true'
    ? 'http://localhost:8000'
    : process.env.REACT_APP_BASE_URL;

export default async (path, method = 'GET', data = null) => {
  try {
    let response = {};
    if (process.env.REACT_APP_LOCALHOST === 'true') {
      response = await axios({
        url: `${baseUrl}${path}`,
        method,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(data),
      });

      return response.data;
    } else {
      const formData = new FormData();
      for await (let entry of Object.entries(data)) {
        formData.append(entry[0], entry[1]);
      }
      response = await axios({
        url: `${baseUrl}${path}`,
        method,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData,
      });

      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
