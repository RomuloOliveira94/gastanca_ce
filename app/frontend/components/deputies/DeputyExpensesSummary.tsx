import { Deputy } from "api/types";
import styled from "styled-components";
import { formatCurrency } from "utils";

interface DeputyExpensesSummaryProps
  extends Pick<
    Deputy,
    "total_expenses" | "average_total_monthly_expense" | "highest_expense"
  > {}

const SummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #fff;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: ${({ theme }) =>
    theme.mode === "light" && "0 4px 12px rgba(0, 0, 0, 0.034)"};
  border: ${({ theme }) =>
    theme.mode === "dark"
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(0, 0, 0, 0.1)"};
  padding: 2rem;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SummaryItem = styled.div`
  flex: 1;
  text-align: center;
`;

const Label = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const DeputyExpensesSummary = ({
  total_expenses,
  average_total_monthly_expense,
  highest_expense,
}: DeputyExpensesSummaryProps) => (
  <SummaryContainer>
    <SummaryItem>
      <Label>Total gasto</Label>
      <Value>{formatCurrency(total_expenses)}</Value>
    </SummaryItem>
    <SummaryItem>
      <Label>Média mensal</Label>
      <Value>{formatCurrency(average_total_monthly_expense)}</Value>
    </SummaryItem>
    <SummaryItem>
      <Label>Maior gasto em uma única despesa</Label>
      <Value>{formatCurrency(highest_expense.net_value)}</Value>
    </SummaryItem>
  </SummaryContainer>
);

export default DeputyExpensesSummary;
