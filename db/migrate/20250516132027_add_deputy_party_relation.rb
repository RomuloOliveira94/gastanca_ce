class AddDeputyPartyRelation < ActiveRecord::Migration[8.0]
  def change
    add_reference :deputies, :party, foreign_key: true
  end
end
