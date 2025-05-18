import { useQuery } from "@tanstack/react-query";
import { fetchDeputyById } from "api/deputiesApi";
import DeputyExpensesByCategory from "components/deputies/DeputyExpensesByCategory";
import DeputyExpensesChart from "components/deputies/DeputyExpensesChart";
import DeputyExpensesDetails from "components/deputies/DeputyExpensesDetails";
import DeputyExpensesSummary from "components/deputies/DeputyExpensesSummary";
import DeputyHeader from "components/deputies/DeputyHeader";
import Container from "components/layout/Container";
import Grid from "components/layout/Grid";
import Skeleton from "components/Skeleton";
import useIsMobile from "hooks/UseIsMobile";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function DeputiesShow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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
      <Container style={{ marginTop: "36px" }}>
        <Skeleton width="100%" height="1000px" />
      </Container>
    );
  if (isError) return <div>Erro ao carregar deputado.</div>;
  if (!deputado) return null;

  return (
    <Container>
      <Grid gap="16px" margin="16px 0" style={{ marginBottom: "32px" }}>
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
        <Grid gap="32px" columns={isMobile ? "1fr" : "1fr 1fr"}>
          <DeputyExpensesByCategory
            total_category_expenses={deputado.total_category_expenses}
          />
          <DeputyExpensesDetails monthly_expenses={deputado.monthly_expenses} />
        </Grid>
      </Grid>
    </Container>
  );
}
