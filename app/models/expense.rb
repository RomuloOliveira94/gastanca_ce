class Expense < ApplicationRecord
  belongs_to :deputy
  belongs_to :supplier
  validates_presence_of :description, :amount, :deputy_id, :deduction, :net_value, :document_type, :supplier_id
end
