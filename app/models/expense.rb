class Expense < ApplicationRecord
  belongs_to :deputy
  belongs_to :supplier
  belongs_to :category
  validates_presence_of :amount, :deputy_id, :deduction, :net_value, :document_type, :supplier_id, :month, :year
end
