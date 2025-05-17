json.partial! @deputy, as: :deputy
json.total_expenses @deputy.total_expenses.to_f
json.average_total_monthly_expense @deputy.average_total_monthly_expense.to_f.round(2)
json.highest_expense @deputy.highest_expense, partial: "api/v1/deputies/expense", as: :expense
json.total_category_expenses @deputy.total_category_expenses.each do |category, value|
  json.category category
  json.value value.to_f
end

json.monthly_expenses @deputy.monthly_expenses.each do |month, expenses|
  json.month month
  json.expenses expenses, partial: "api/v1/deputies/expense", as: :expense
end
