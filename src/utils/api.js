import axios from "axios";

const baseUrl = "http://localhost:8000";

export default async (path, method = "GET", data = null) => {
  const response = await axios({
    url: `${baseUrl}${path}`,
    headers: { "Content-Type": "application/json" },
    method,
    data: JSON.stringify(data),
  });

  return response.data;
  // return axios({
  //   url: `${baseUrl}${path}`,
  //   headers: { "Content-Type": "application/json" },
  //   method,
  //   data: JSON.stringify(data),
  // })
  //   .catch(error => {
  //     console.error(error);
  //   })
  //   .then(response => {
  //     return response.data;
  //   });
};

// Create an Error with custom message and code
export function CustomError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}
