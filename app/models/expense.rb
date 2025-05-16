class Expense < ApplicationRecord
  belongs_to :deputy
  belongs_to :supplier
  validates_presence_of :description, :amount, :issue_date, :deputy_id
  validates_numericality_of :amount, greater_than: 0
end
