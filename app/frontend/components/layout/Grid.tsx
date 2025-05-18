import styled from "styled-components";

const Grid = styled.div<{ columns?: string; gap?: string; rowHeight?: string, margin?: string }>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  gap: ${({ gap }) => gap || "0"};
  margin: ${({ margin }) => margin || "0"};
  grid-auto-rows: ${({ rowHeight }) => rowHeight || "auto"};
  place-content: start;
`;

export default Grid;
