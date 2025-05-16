class CreateParties < ActiveRecord::Migration[8.0]
  def change
    create_table :parties do |t|
      t.string :acronym

      t.timestamps
    end
  end
end
