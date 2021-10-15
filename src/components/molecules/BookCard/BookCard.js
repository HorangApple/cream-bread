import React from "react";
import { Card } from "antd";
import { BarsOutlined, GlobalOutlined } from "@ant-design/icons";
import BookCardStyleWrapper from "./BookCardStyleWrapper";

const BookCard = (props) => {
  const { title, link, image, author, publisher, pubdate, setPopUp } = props;
  const handleClick = (type) => () => {
    if (type === "link") {
      window.open(link);
    } else {
      setPopUp(true);
    }
  };
  return (
    <BookCardStyleWrapper>
      <Card
        title={title}
        bordered={false}
        style={{ width: 300 }}
        actions={[
          <GlobalOutlined onClick={handleClick("link")} />,
          <BarsOutlined onClick={handleClick("popup")} />,
        ]}
      >
        <div className={"book-thumb"}>
          <img src={image} alt={"책 표지"} />
        </div>
        <div className={"book-info"}>
          <p>
            <span className={"book-info-key"}>저자 :</span>
            <span className={"book-info-value"}>{author}</span>
          </p>
          <p>
            <span className={"book-info-key"}>출판사 :</span>
            <span className={"book-info-value"}>{publisher}</span>
          </p>
          <p>
            <span className={"book-info-key"}>출판날짜 :</span>
            <span className={"book-info-value"}>{pubdate}</span>
          </p>
        </div>
      </Card>
    </BookCardStyleWrapper>
  );
};

export default BookCard;
