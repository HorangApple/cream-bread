import React, { useState, useEffect, useRef } from "react";
import { Input } from "antd";
import * as api from "api";
import { BookCard, InfoPopUp } from "components/molecules";

const { Search } = Input;

const GetToC = () => {
  const [keyWord, setKeyWord] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [popUp, setPopUp] = useState({ bookNum: null, isPopUp: false });
  const isInit = useRef(true);

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  const handleModalCancel = () => {
    setPopUp({ ...popUp, isPopUp: false });
  };

  const handleModalCopy = () => {
    const copyText =
      document.getElementsByClassName("toc-content")[0].childNodes[0].data;
    navigator.clipboard.writeText(copyText);
  };

  useEffect(() => {
    if (!isInit.current) {
      api.getBookSearch(keyWord, 1, 10).then((res) => {
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
          searchResult.List.map((item, index) => (
            <BookCard key={index} setPopUp={setPopUp} {...item} />
          ))}
      </div>
      <InfoPopUp
        bookNum={popUp.bookNum}
        modalConfig={{
          title: `목차`,
          visible: popUp.isPopUp,
          onOk: handleModalCopy,
          onCancel: handleModalCancel,
          cancelButtonProps: { style: { display: "none" } },
        }}
      />
    </div>
  );
};

export default GetToC;
