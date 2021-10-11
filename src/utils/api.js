import axios from 'axios';

const baseUrl = 'http://localhost:8000';

export default async (path, method = 'GET', data = null) => {
  try {
    const response = await axios({
      url: `${baseUrl}${path}`,
      method,
      headers: { 'Content-Type': 'application/json' },
      // TODO: 개발 환경 / 프로덕션 환경 변수로 분기하기?
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: JSON.stringify(data),
      // data: Object.entries(e => {})
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const convertKeySnakeToCamel = obj => {
  return Object.keys(obj).reduce((acc, elem) => {
    return { ...acc, [snakeToCamel(elem)]: obj[elem] };
  }, {});
};

const snakeToCamel = str => {
  return str;
};

// TODO: 필요한가?
// const camelToSnake = str => {
//   return str;
// }
