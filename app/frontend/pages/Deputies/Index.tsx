import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchDeputies } from "api/deputiesApi";
import Skeleton from "components/Skeleton";
import Container from "components/layout/Container";
import DeputyCard from "components/deputies/DeputyCard";
import Grid from "components/layout/Grid";

// Removed GridList, will use Grid with 'as' prop instead

function DeputiesIndex() {
  const { data: deputados = [], isLoading } = useQuery({
    queryFn: fetchDeputies,
    queryKey: ["deputies"],
  });

  return (
    <Container>
      <Grid gap="16px" margin="24px 0">
        <Grid gap="6px">
          <h1
            style={{ fontSize: "24px", textAlign: "center" }}
          >
            🔍 Acompanhe a farra dos gastos dos nossos representantes!
          </h1>
          <p style={{ color: "#7f8c8d", textAlign: "center" }}>
            No GastançaCE, você descobre quem são os deputados do Ceará e como
            anda o uso do dinheiro público.
          </p>
        </Grid>
        <Grid as="ul" columns="repeat(auto-fill, minmax(220px, 1fr))" gap="12px">
          {deputados.map((dep) => (
            <Link to={`/deputies/${dep.id}`} key={dep.id}>
              <li>
                <DeputyCard
                  name={dep.name}
                  photo={dep.image_url}
                  party={dep.party}
                  state={dep.state}
                />
              </li>
            </Link>
          ))}
        </Grid>
      </Grid>
      {isLoading && <Skeleton width="100%" height="1000px" />}
      {!isLoading && deputados.length === 0 && (
        <p>Nenhum deputado encontrado</p>
      )}
    </Container>
  );
}

export default DeputiesIndex;
