import React, { useState, useEffect, useRef } from "react";
import { Input, Row, Col } from "antd";
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
      if (keyWord.length > 0) {
        api.getBookSearch(keyWord, 1, 12).then((res) => {
          setSearchResult(res.data);
        });
      } else {
        setSearchResult(null);
      }
    } else {
      isInit.current = false;
    }
  }, [keyWord]);

  return (
    <>
      <Search
        value={keyWord}
        size={"large"}
        onChange={handleChange}
        style={{
          maxWidth: "300px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          marginBottom: "25px",
        }}
      />
      <Row>
        {searchResult != null &&
          searchResult.List.map((item, index) => (
            <Col key={index} sm={24} md={8} lg={6}>
              <BookCard setPopUp={setPopUp} {...item} />
            </Col>
          ))}
      </Row>
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
    </>
  );
};

export default GetToC;
