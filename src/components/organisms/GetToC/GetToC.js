import React, { useState } from "react";
import { Input, Row, Col } from "antd";
import * as api from "api";
import { BookCard, InfoPopUp } from "components/molecules";

const { Search } = Input;

const GetToC = () => {
  const [keyWord, setKeyWord] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [popUp, setPopUp] = useState({ bookNum: null, isPopUp: false });

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

  const onSearch = () => {
    if (keyWord.length > 0) {
      api.getBookSearch(escape(keyWord), 1, 12).then((res) => {
        setSearchResult(res.data);
      });
    } else {
      setSearchResult(null);
    }
  };

  return (
    <>
      <Search
        value={keyWord}
        size={"large"}
        onChange={handleChange}
        onSearch={onSearch}
        style={{
          maxWidth: "300px",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          marginBottom: "25px",
        }}
        enterButton
      />
      <Row>
        {searchResult?.List != null &&
          searchResult.List.map((item, index) => (
            <Col key={index} sm={24} md={8} lg={6} style={{ width: "100%" }}>
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
          okText: "Copy",
          onCancel: handleModalCancel,
          cancelButtonProps: { style: { display: "none" } },
        }}
      />
    </>
  );
};

export default GetToC;
