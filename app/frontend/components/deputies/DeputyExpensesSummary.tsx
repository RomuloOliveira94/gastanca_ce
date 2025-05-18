import { Deputy } from "api/types";
import styled from "styled-components";
import { formatBRDate, formatCurrency, getDocumentType } from "utils";
import { useState } from "react";

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
  position: relative;
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
  cursor: pointer;
  position: relative;
`;

const Tooltip = styled.div<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.15s;
  position: absolute;
  left: 50%;
  top: 110%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  z-index: 10;
  min-width: 220px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  white-space: pre-line;
`;

const DocumentButton = styled.a`
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
  }
`;

const DeputyExpensesSummary = ({
  total_expenses,
  average_total_monthly_expense,
  highest_expense,
}: DeputyExpensesSummaryProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
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
        <Value
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          tabIndex={0}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
        >
          {formatCurrency(highest_expense.net_value)}{" "}
          <span style={{ marginLeft: 4, fontSize: "1.1em" }}>
            <img src="/icons/eye.svg" alt="olhar" style={{ color: "blue"}} />
          </span>
          <Tooltip visible={showTooltip}>
            <div>
              {`Fornecedor: ${highest_expense.supplier.name}
              Data: ${formatBRDate(highest_expense.issue_date)}
              Tipo: ${highest_expense.category.name}
              Valor bruto: ${formatCurrency(highest_expense.amount)}`}
            </div>
            <DocumentButton
              href={highest_expense.document_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver documento
            </DocumentButton>
          </Tooltip>
        </Value>
      </SummaryItem>
    </SummaryContainer>
  );
};

export default DeputyExpensesSummary;
