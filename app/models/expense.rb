class Expense < ApplicationRecord
  belongs_to :deputy
  validates_presence_of :description, :amount, :issue_date, :deputy_id
  validates_numericality_of :amount, greater_than: 0
end
