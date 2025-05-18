import { useState } from "react";
import styled from "styled-components";
import { formatBRDate, getDocumentType } from "utils";

type Expense = {
  id: number;
  installment_number: number;
  document_url: string;
  document_type: string;
  month: number;
  year: number;
  issue_date: string;
  amount: number;
  deduction: number;
  net_value: number;
  supplier: { name: string; document: string };
  category: { name: string };
};

type MonthlyExpenses = {
  month: string;
  expenses: Expense[];
};

interface Props {
  monthly_expenses: MonthlyExpenses[];
}

const Accordion = styled.div`
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary || "#eee"};
  background: ${({ theme }) => theme.colors.background};
`;

const AccordionHeader = styled.button`
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
  display: inline-block;
  margin-top: 6px;
  padding: 6px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.98rem;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;

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

export default function DeputyExpensesDetails({ monthly_expenses }: Props) {
  const [openMonth, setOpenMonth] = useState<string | null>(null);

  return (
    <div>
      {monthly_expenses.map(({ month, expenses }) => (
        <Accordion key={month}>
          <AccordionHeader
            onClick={() => setOpenMonth(openMonth === month ? null : month)}
          >
            {month} ({expenses.length} despesas)
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
                    <DocumentButton
                      href={expense.document_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
    </div>
  );
}
