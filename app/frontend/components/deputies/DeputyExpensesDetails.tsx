import { Deputy } from "api/types";
import Flex from "components/layout/Flex";
import Grid from "components/layout/Grid";
import { useState } from "react";
import styled from "styled-components";
import { formatBRDate, getDocumentType } from "utils";

interface DeputyExpensesDetailsProps extends Pick<Deputy, "monthly_expenses"> {}

const Accordion = styled.div`
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary || "#eee"};
  background: ${({ theme }) => theme.colors.background};
`;

const AccordionHeader = styled(Flex)`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 12px 16px;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px 8px 0 0;
  text-align: left;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.background};
`;

const ExpenseItem = styled.div`
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
`;

const DocumentButton = styled.a<{ disabled?: boolean }>`
  margin-top: 8px;
  padding: 6px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.98rem;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;

  ${({ disabled }) =>
    disabled &&
    `
    background: #ccc;
    cursor: not-allowed;
    pointer-events: none;
    color: #666;
    &:hover {
      background: #ccc;
      color: #666;
    }
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
  }
`;

export default function DeputyExpensesDetails({
  monthly_expenses,
}: DeputyExpensesDetailsProps) {
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  return (
    <Grid gap="8px">
      <h2>Detalhes das Despesas</h2>
      {monthly_expenses.map(({ month, expenses }) => (
        <Accordion key={month}>
          <AccordionHeader
            onClick={() => setOpenMonth(openMonth === month ? null : month)}
          >
            {month} ({expenses.length} despesas)
            <img src="/icons/arrow-down.svg" alt="ver_mais" />
          </AccordionHeader>
          {openMonth === month && (
            <AccordionContent>
              {expenses.map((expense) => (
                <ExpenseItem key={expense.id}>
                  <strong>{expense.category.name}</strong> —{" "}
                  {expense.net_value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                  <br />
                  Fornecedor: {expense.supplier.name}{" "}
                  {expense.supplier.document
                    ? `(${expense.supplier.document})`
                    : ""}
                  <br />
                  Data: {formatBRDate(expense.issue_date)}
                  <br />
                  Tipo: {getDocumentType(expense.document_type)}
                  <br />
                  {expense.document_url ? (
                    <DocumentButton href={expense.document_url} target="_blank">
                      Ver documento
                    </DocumentButton>
                  ) : (
                    <DocumentButton disabled>
                      Documento não disponível
                    </DocumentButton>
                  )}
                </ExpenseItem>
              ))}
            </AccordionContent>
          )}
        </Accordion>
      ))}
    </Grid>
  );
}
