json.extract! expense, :id, :installment_number, :issue_date, :amount, :deduction, :net_value, :document_url, :document_type, :month, :year
json.supplier do
  json.extract! expense.supplier, :id, :name, :document
end
json.category do
  json.extract! expense.category, :id, :name
end
