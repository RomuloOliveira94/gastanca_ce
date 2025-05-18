import { Deputy } from "api/types";
import Flex from "components/layout/Flex";
import styled from "styled-components";

interface DeputyHeaderProps
  extends Pick<Deputy, "image_url" | "name" | "party" | "state"> {}

const HeaderContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.background};
  padding: 36px;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  box-shadow: ${({ theme }) =>
    theme.mode === "light" && "0 4px 12px rgba(0, 0, 0, 0.034)"};
  border: ${({ theme }) =>
    theme.mode === "dark"
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(0, 0, 0, 0.1)"};
  margin-top: 32px;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }
`;

const Photo = styled.img`
  width: 220px;
  height: 220px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};

  @media (max-width: 700px) {
    width: 120px;
    height: 120px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 700px) {
    align-items: center;
    text-align: center;
  }
`;

const Name = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 3rem;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const Details = styled(Flex)`
  margin-top: 8px;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const Chip = styled.span<{
  bg: "primary" | "secondary" | "background" | "text";
  fontSize?: string;
}>`
  background: ${({ bg, theme }) => theme.colors[bg]};
  color: #fff;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize || "18px"};
  border-radius: 16px;
  padding: 4px 16px;

  @media (min-width: 700px) {
    align-self: start;
  }
`;

const DeputyHeader = ({ image_url, name, party, state }: DeputyHeaderProps) => (
  <HeaderContainer>
    <Photo src={image_url} alt={name} />
    <Info>
      <Name>{name}</Name>
      <Details>
        <Chip bg="primary">{party}</Chip>
        <Chip bg="secondary">{state}</Chip>
      </Details>
    </Info>
    <Chip fontSize="24px" bg="secondary">
      2023
    </Chip>
  </HeaderContainer>
);

export default DeputyHeader;
