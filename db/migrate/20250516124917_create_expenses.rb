class CreateExpenses < ActiveRecord::Migration[8.0]
  def change
    create_table :expenses do |t|
      t.string :description
      t.integer :installment_number
      t.date :issue_date
      t.decimal :amount, precision: 10, scale: 2
      t.decimal :deduction, precision: 10, scale: 2
      t.decimal :net_value, precision: 10, scale: 2
      t.text :document_url
      t.integer :document_type

      t.references :deputy, null: false, foreign_key: true

      t.timestamps
    end
  end
end
