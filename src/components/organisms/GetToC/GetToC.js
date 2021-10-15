import React, { useState, useEffect, useRef } from "react";
import { Input } from "antd";
import * as api from "api";
import { BookCard } from "components/molecules";

const { Search } = Input;

const GetToC = () => {
  const [keyWord, setKeyWord] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [popUp, setPopUp] = useState(null);
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
        {searchResult != null &&
          searchResult.items.map((item, index) => (
            <BookCard key={index} setPopUp={setPopUp} {...item} />
          ))}
      </div>
    </div>
  );
};

export default GetToC;
