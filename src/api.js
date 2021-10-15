const axios = require("axios").default;

export const getBookSearch = (keyword, page) => {
  const header = {
    "X-Naver-Client-Id": process.env.REACT_APP_CLIENT,
    "X-Naver-Client-Secret": process.env.REACT_APP_SECRET,
  };
  let url = `/v1/search/book.json?query=${keyword}`;

  if (page != null) {
    url += `&start=${page}`;
  }

  return axios.get(url, { headers: header });
};
