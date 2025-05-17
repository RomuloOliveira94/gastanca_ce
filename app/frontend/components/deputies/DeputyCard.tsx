import Grid from "components/layout/Grid";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
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
  color: #2c3e50;
`;

const Info = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #7f8c8d;
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
      <Info>
        {party} - {state}
      </Info>
    </Card>
  );
};

export default DeputyCard;
