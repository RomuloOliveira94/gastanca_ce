export type Deputies = {
  id: number;
  name: string;
  party: string;
  state: string;
  image_url: string;
};

export type CategoryExpense = {
  category: string;
  value: number;
};

export type Supplier = {
  name: string;
  document: string;
};

export type Category = {
  name: string;
};

export type Expense = {
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
  supplier: Supplier;
  category: Category;
};

export type MonthlyExpenses = {
  month: string;
  expenses: Expense[];
};

export type Deputy = {
  id: number;
  name: string;
  cpf: string;
  image_url: string;
  state: string;
  party: string;
  total_expenses: number;
  average_total_monthly_expense: number;
  highest_expense: Expense;
  total_category_expenses: CategoryExpense[];
  monthly_expenses: MonthlyExpenses[];
};
