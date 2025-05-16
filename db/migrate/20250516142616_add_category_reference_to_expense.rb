class AddCategoryReferenceToExpense < ActiveRecord::Migration[8.0]
  def change
    add_reference :expenses, :category, null: true, foreign_key: true
    remove_column :expenses, :description, :string
  end
end
