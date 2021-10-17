const axios = require("axios").default;

export const getToC = (bookNum) => {
  let url = `/Product/Goods/${bookNum}`;

  return axios.get(url);
};

export const getBookSearch = (keyword, page, pageSize) => {
  let url = `/SearchCorner/Sniper/GetSniperSearch?Query=${keyword}&Parsing=false&Domain=1&Page=${page}&PageSize=${pageSize}&_=1634367591073`;

  return axios.get(url);
};
