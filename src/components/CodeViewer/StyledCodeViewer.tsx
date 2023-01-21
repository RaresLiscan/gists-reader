import styled from "styled-components";
import { getThemeColor } from "../../theme";

const StyledCodeViewer = styled.div`
  background: ${getThemeColor("grayBackground")};
  margin: 10px;
  border-radius: 10px;
  padding: 5px 20px;
  overflow: auto;
`;

export default StyledCodeViewer;
