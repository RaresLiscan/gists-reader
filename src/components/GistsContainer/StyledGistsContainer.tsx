import styled from "styled-components";

const StyledGistsContainer = styled.div`
  .auto-grid {
    --auto-grid-min-size: 16rem;

    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size), 1fr)
    );
    grid-gap: 1rem;
    grid-auto-rows: 1fr;

    margin-top: 20px;
  }

  .gistsTitle {
    text-align: center;
  }
`;

export default StyledGistsContainer;
