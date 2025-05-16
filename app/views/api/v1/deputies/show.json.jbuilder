json.deputy do
  json.partial! @deputy, as: :deputy
  json.expenses @deputy.expenses, partial: "api/v1/deputies/expense", as: :expense
end
