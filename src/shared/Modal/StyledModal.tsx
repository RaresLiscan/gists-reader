import styled from "styled-components";

const StyledModal = styled.div`
  position: absolute;

  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 990;
    top: 0;
    left: 0;
  }

  .modal {
    position: fixed;
    z-index: 999;
    top: 5%;
    left: 20%;
    width: 60%;
    max-height: 85vh;
    overflow: auto;
    overflow-x: auto;
  }
`;

export default StyledModal;
