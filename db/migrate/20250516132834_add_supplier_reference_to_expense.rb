class AddSupplierReferenceToExpense < ActiveRecord::Migration[8.0]
  def change
    add_reference :expenses, :supplier, foreign_key: true
  end
end
