import Container from "components/Container";
import { useParams } from "react-router";

export default function DeputiesShow() {
  const { id } = useParams<{ id: string }>();

  return <Container>Show {id}</Container>;
}
