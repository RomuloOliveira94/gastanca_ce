import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: ${({ theme }) =>
    theme.mode === "light" && "0 4px 12px rgba(0, 0, 0, 0.034)"};
  border: ${({ theme }) =>
    theme.mode === "dark"
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(0, 0, 0, 0.1)"};
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    background-color: #f0f0f0;
  }
`;

const Photo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`;

const Name = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Chip = styled.span<{
  bg: "primary" | "secondary" | "background" | "text";
}>`
  background: ${({ bg, theme }) => theme.colors[bg]};
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 16px;
  padding: 1px 8px;
  margin-top: 6px;
`;

type Props = {
  name: string;
  photo: string;
  party: string;
  state: string;
};

const DeputyCard = ({ name, photo, party, state }: Props) => {
  return (
    <Card>
      <Photo src={photo} alt={`Foto de ${name}`} />
      <Name>{name.split(" ").slice(0, 2).join(" ")}</Name>
      <Chip bg="primary">
        {party} - {state}
      </Chip>
    </Card>
  );
};

export default DeputyCard;
