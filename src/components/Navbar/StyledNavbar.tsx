import styled from "styled-components";
import { getThemeColor } from "../../theme";

const StyledNavbar = styled.div`
  max-height: 300px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .navigation {
    display: flex;
    justify-items: space-between;
    gap: 5px;

    .pages {
      display: flex;
      list-style: none;
      gap: 10px;

      li:hover {
        color: ${getThemeColor("textHover")};
        cursor: pointer;
      }
    }
  }
`;

export default StyledNavbar;
