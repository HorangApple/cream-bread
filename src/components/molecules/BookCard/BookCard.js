import React from "react";
import { Card } from "antd";
import { BarsOutlined, GlobalOutlined } from "@ant-design/icons";
import BookCardStyleWrapper from "./BookCardStyleWrapper";

const BookCard = (props) => {
  const { GOODS_NM, GOODS_NO, AUTH_INFO, COMPANY2, ISS_DM, setPopUp } = props;
  const imgUrl = `http://image.yes24.com/Goods/${GOODS_NO}/L`;
  const bookUrl = `http://www.yes24.com/Product/Goods/${GOODS_NO}`;
  const handleClick = (type) => () => {
    if (type === "link") {
      window.open(bookUrl);
    } else {
      setPopUp({ bookNum: GOODS_NO, isPopUp: true });
    }
  };
  return (
    <BookCardStyleWrapper>
      <Card
        title={GOODS_NM}
        bordered={false}
        style={{ width: 300 }}
        actions={[
          <GlobalOutlined onClick={handleClick("link")} />,
          <BarsOutlined onClick={handleClick("popup")} />,
        ]}
      >
        <div className={"book-thumb"}>
          <img src={imgUrl} alt={"책 표지"} className={"book-thumb-img"} />
        </div>
        <div className={"book-info"}>
          <p>
            <span className={"book-info-key"}>저자 :</span>
            <span className={"book-info-value"}>{AUTH_INFO}</span>
          </p>
          <p>
            <span className={"book-info-key"}>출판사 :</span>
            <span className={"book-info-value"}>{COMPANY2}</span>
          </p>
          <p>
            <span className={"book-info-key"}>출판날짜 :</span>
            <span className={"book-info-value"}>{ISS_DM}</span>
          </p>
        </div>
      </Card>
    </BookCardStyleWrapper>
  );
};

export default BookCard;
