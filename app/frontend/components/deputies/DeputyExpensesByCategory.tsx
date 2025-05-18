import { Deputy } from "api/types";
import Grid from "components/layout/Grid";
import styled from "styled-components";
import { formatCurrency } from "utils";

interface DeputyExpensesByCategoryProps
  extends Pick<Deputy, "total_category_expenses"> {}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
  font-size: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    font-size: 0.95rem;
  }
`;

const Category = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Total = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const DeputyExpensesByCategory = ({
  total_category_expenses,
}: DeputyExpensesByCategoryProps) => (
  <Grid gap="8px">
    <h2>Despesas por categoria</h2>
    <List>
      {total_category_expenses.map((item) => (
        <ListItem key={item.category}>
          <Category>{item.category}</Category>
          <Total>{formatCurrency(item.value)}</Total>
        </ListItem>
      ))}
    </List>
  </Grid>
);

export default DeputyExpensesByCategory;
