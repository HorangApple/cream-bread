import React from "react";
import { Card } from "antd";
import { BarsOutlined, GlobalOutlined } from "@ant-design/icons";
import BookCardStyleWrapper from "./BookCardStyleWrapper";
import * as api from "api";

const Crawler = require("crawler");

const BookCard = (props) => {
  const { title, link, image, author, publisher, pubdate, setPopUp } = props;
  const handleClick = (type) => () => {
    api.getToC().then((res) => {
      console.log(res);
    });
    if (type === "link") {
      window.open(link);
    } else {
      setPopUp(true);
      const c = new Crawler({
        maxConnections: 10,
        // This will be called for each crawled page
        callback: (error, res, done) => {
          if (error) {
            console.log(error);
          } else {
            const $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("#tableOfContentsContent").text());
          }
          done();
        },
      });
      c.queue("https://book.naver.com/bookdb/book_detail.php?bid=20941240");
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
