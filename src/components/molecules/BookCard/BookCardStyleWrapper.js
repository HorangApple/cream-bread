import styled from "styled-components";

const BookCardStyleWrapper = styled.div`
  // 스타일 입력
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 6px;
  .ant-card {
    height: 305px;
  }
  .ant-card-body {
    display: flex;
    height: 200px;
  }

  .book-info {
    margin-left: 10px;
    overflow-y: auto;
    .book-info-key {
    }

    .book-info-value {
      margin-left: 10px;
    }
  }
  .book-thumb {
    .book-thumb-img {
      width: 100px;
    }
  }
  .nothing {
  }
`;

export default BookCardStyleWrapper;
