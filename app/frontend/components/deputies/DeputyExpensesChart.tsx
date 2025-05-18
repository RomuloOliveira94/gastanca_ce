import styled, { useTheme } from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { Deputy } from "api/types";
import { formatCurrency } from "utils";
import useIsMobile from "hooks/UseIsMobile";

interface DeputyChartProps extends Pick<Deputy, "monthly_expenses"> {}

const ChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: ${({ theme }) =>
    theme.mode === "light" && "0 4px 12px rgba(0, 0, 0, 0.034)"};
  border: ${({ theme }) =>
    theme.mode === "dark"
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(0, 0, 0, 0.1)"};
  width: 100%;
  height: 300px;

  @media (max-width: 720px) {
    padding: 22px 0;
  }
`;

const DeputyExpensesChart = ({ monthly_expenses }: DeputyChartProps) => {
  const [data, setData] = useState<{ name: string; Total: number }[]>([]);

  const isMobile = useIsMobile(1136);

  useEffect(() => {
    const formattedData = monthly_expenses.map(({ month, expenses }) => ({
      name: month,
      Total: expenses.reduce((sum, { net_value }) => sum + net_value, 0),
    }));
    setData(formattedData);
  }, [monthly_expenses]);

  const theme = useTheme();

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: isMobile ? 18 : 30,
            right: 30,
            left: 30,
            bottom: isMobile ? 18 : 30,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" hide={isMobile} />
          <YAxis
            fontSize={isMobile ? "12px" : "14px"}
            tickFormatter={(value) => formatCurrency(value).replace(/,00$/, "")}
          />
          <Tooltip
            contentStyle={{ background: theme.colors.background }}
            formatter={formatCurrency}
          />
          <Bar
            dataKey="Total"
            barSize={64}
            fill={theme.colors.primary}
            activeBar={
              <Rectangle fill={theme.colors.secondary} stroke={"#fff"} />
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default DeputyExpensesChart;
