import styled from "styled-components";

const Grid = styled.div<{ columns?: string; gap?: string; rowHeight?: string }>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  gap: ${({ gap }) => gap || "0"};
`;

export default Grid;
