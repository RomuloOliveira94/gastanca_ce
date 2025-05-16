class AddMonthYearToExpenses < ActiveRecord::Migration[8.0]
  def change
    add_column :expenses, :month, :integer
    add_column :expenses, :year, :integer
  end
end
