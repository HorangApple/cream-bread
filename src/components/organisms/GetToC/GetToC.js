import React, { useState, useEffect } from "react";
import { Input } from "antd";

const { Search } = Input;

const GetToC = (props) => {
  const [keyWord, setKeyWord] = useState("");

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  useEffect(() => {
    console.log(keyWord);
  }, [keyWord]);

  return (
    <div>
      <Search value={keyWord} onChange={handleChange} />
    </div>
  );
};

export default GetToC;
