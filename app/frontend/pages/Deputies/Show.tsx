import { useQuery } from "@tanstack/react-query";
import { fetchDeputyById } from "api/deputiesApi";
import DeputyExpensesChart from "components/deputies/DeputyExpensesChart";
import DeputyExpensesSummary from "components/deputies/DeputyExpensesSummary";
import DeputyHeader from "components/deputies/DeputyHeader";
import Container from "components/layout/Container";
import Grid from "components/layout/Grid";
import Skeleton from "components/Skeleton";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function DeputiesShow() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return null;

  const {
    data: deputado,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchDeputyById(id),
    queryKey: ["deputado", id],
    enabled: !!id,
  });

  useEffect(() => {
    if (!isLoading && !deputado) {
      navigate("/");
    }
  }, [isLoading, deputado, navigate]);

  if (isLoading)
    return (
      <Container>
        <Skeleton width="100%" height="1000px" />
      </Container>
    );
  if (isError) return <div>Erro ao carregar deputado.</div>;
  if (!deputado) return null;

  return (
    <Container>
      <Grid gap="16px" margin="8px 0">
        <DeputyHeader
          image_url={deputado.image_url}
          name={deputado.name}
          party={deputado.party}
          state={deputado.state}
        />
        <DeputyExpensesSummary
          total_expenses={deputado.total_expenses}
          average_total_monthly_expense={deputado.average_total_monthly_expense}
          highest_expense={deputado.highest_expense}
        />
        <DeputyExpensesChart monthly_expenses={deputado.monthly_expenses} />
      </Grid>
    </Container>
  );
}
