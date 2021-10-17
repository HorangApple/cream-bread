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

  const time = `${ISS_DM.slice(0, 4)}.${ISS_DM.slice(4, 6)}.${ISS_DM.slice(
    6,
    8
  )}`;

  const auth = AUTH_INFO.replaceAll("`", "")
    .replaceAll("<", "")
    .replaceAll(">", "");

  return (
    <BookCardStyleWrapper>
      <Card
        title={GOODS_NM.replaceAll(/<\/*span[\w=": #;]*>/g, "")}
        bordered={false}
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
            <span className={"book-info-value"} title={auth}>
              {auth.length > 15 ? auth.slice(0, 17) + "..." : auth}
            </span>
          </p>
          <p>
            <span className={"book-info-key"}>출판사 :</span>
            <span className={"book-info-value"}>
              {COMPANY2.replaceAll("`", "")}
            </span>
          </p>
          <p>
            <span className={"book-info-key"}>출판날짜 :</span>
            <span className={"book-info-value"}>{time}</span>
          </p>
        </div>
      </Card>
    </BookCardStyleWrapper>
  );
};

export default BookCard;
