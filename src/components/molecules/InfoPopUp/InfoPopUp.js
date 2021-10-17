import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import * as api from "api";
import cheerio from "cheerio";
import { LoadingOutlined } from "@ant-design/icons";
import InfoPopUpStyleWrapper from "./InfoPopUpStyleWrapper";

const { TextArea } = Input;

const InfoPopUp = (props) => {
  const { bookNum, modalConfig } = props;
  const [content, setContent] = useState(null);

  useEffect(() => {
    api.getToC(bookNum).then((res) => {
      const page = res.data;
      const $ = cheerio.load(page);
      const text = $(".txtContentText", "#infoset_toc")
        .text()
        .replaceAll(/<[/b]+>/g, "")
        .replaceAll(/<br\/>/g, "\n");

      setContent(text);
    });
    return () => {
      setContent(null);
    };
  }, [bookNum]);

  return (
    <Modal {...modalConfig}>
      <InfoPopUpStyleWrapper>
        {content != null ? (
          <TextArea
            className={"toc-content"}
            value={content}
            editable={false}
            bordered={false}
          />
        ) : (
          <span className={"loading"}>
            <LoadingOutlined />
          </span>
        )}
      </InfoPopUpStyleWrapper>
    </Modal>
  );
};

export default InfoPopUp;
