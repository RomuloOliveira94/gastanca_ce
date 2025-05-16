class CreateDeputies < ActiveRecord::Migration[8.0]
  def change
    create_table :deputies do |t|
      t.string :name
      t.string :integration_id
      t.string :cpf
      t.string :state
      t.timestamps
    end

    add_index :deputies, :integration_id
  end
end
