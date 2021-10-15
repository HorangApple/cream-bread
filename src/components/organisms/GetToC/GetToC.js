import React, { useState, useEffect, useRef } from "react";
import { Input } from "antd";
import * as api from "api";

const { Search } = Input;

const GetToC = () => {
  const [keyWord, setKeyWord] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const isInit = useRef(true);

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  useEffect(() => {
    console.log(keyWord, isInit);
    if (!isInit.current) {
      api.getBookSearch(keyWord).then((res) => {
        setSearchResult(res.data);
      });
    } else {
      isInit.current = false;
    }
  }, [keyWord]);

  return (
    <div>
      <Search value={keyWord} onChange={handleChange} />
      <div>
        {searchResult.items.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default GetToC;
