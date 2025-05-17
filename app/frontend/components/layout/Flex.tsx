import styled from "styled-components";

const Flex = styled.div<{ gap?: string; align?: string; justify?: string }>`
  display: flex;
  gap: ${({ gap }) => gap || "0"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "flex-start"};
`;

export default Flex;
