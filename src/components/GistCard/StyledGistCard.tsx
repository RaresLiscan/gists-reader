import styled from "styled-components";
import { getThemeColor } from "../../theme";

const StyledGistCard = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 2px 2px ${getThemeColor("grayBackground")};
  border-radius: 15px;
  width: 245px;
  padding: 10px;
  min-height: 250px;
  max-height: 350px;

  .gistTitle {
    overflow-wrap: break-word;
    h2 {
      margin: 0;
    }
  }

  .user {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 15px;

    .avatar {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 5px;

      p {
        margin: 0;
      }
    }
  }

  .avatarImage {
    border-radius: 50%;
  }

  .tags {
    display: flex;
    gap: 5px;
    overflow-wrap: break-word;

    .tagsTitle {
      font-weight: bold;
    }

    .tagContent {
      span {
        margin: 0;
      }
      a {
        text-decoration: none;
      }
    }
  }

  .description {
    margin-top: 10px;
    overflow-wrap: break-word;
    p {
      margin: 0;
    }

    .descriptionTitle {
      font-weight: bold;
    }
  }

  .forks {
    .forksTitle {
      font-weight: bold;
    }
  }

  .viewCode {
    margin-top: 10px;
    .viewCodeButton {
      background: white;
      border: 1px solid black;
      font-size: 14px;
    }

    .viewCodeButton:hover {
      cursor: pointer;
    }
  }
`;

export default StyledGistCard;
