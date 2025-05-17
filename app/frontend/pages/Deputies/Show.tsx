import { useQuery } from "@tanstack/react-query";
import { fetchDeputyById } from "api/deputiesApi";
import DeputyHeader from "components/deputies/DeputyHeader";
import Container from "components/layout/Container";
import Grid from "components/layout/Grid";
import { useParams } from "react-router";

export default function DeputiesShow() {
  const { id } = useParams();

  if (!id) {
    return (
      <Container>
        <Grid margin="36px 0">
          <p>Deputado não encontrado</p>
        </Grid>
      </Container>
    );
  }

  const { data: deputado } = useQuery({
    queryFn: () => fetchDeputyById(id),
    queryKey: ["deputado", id],
    enabled: !!id,
  });

  return (
    <Container>
      <Grid margin="8px 0">
        <DeputyHeader
          photoUrl={deputado?.image_url}
          name={deputado?.name}
          party={deputado?.party}
          state={deputado?.state}
          year={2023}
        />
      </Grid>
    </Container>
  );
}
