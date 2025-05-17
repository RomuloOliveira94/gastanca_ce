json.extract! expense, :id, :installment_number, :document_url, :document_type, :month, :year
json.issue_date expense.issue_date.to_s
json.amount expense.amount.to_f
json.deduction expense.deduction.to_f
json.net_value expense.net_value.to_f
json.supplier do
  json.extract! expense.supplier, :name, :document
end
json.category do
  json.extract! expense.category, :name
end
