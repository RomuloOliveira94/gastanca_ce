# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_05_16_132834) do
  create_table "deputies", force: :cascade do |t|
    t.string "name"
    t.string "integration_id"
    t.string "cpf"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "party_id"
    t.index ["integration_id"], name: "index_deputies_on_integration_id"
    t.index ["party_id"], name: "index_deputies_on_party_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.string "description"
    t.integer "installment_number"
    t.date "issue_date"
    t.decimal "amount", precision: 10, scale: 2
    t.decimal "deduction", precision: 10, scale: 2
    t.decimal "net_value", precision: 10, scale: 2
    t.text "document_url"
    t.integer "document_type"
    t.integer "deputy_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "supplier_id"
    t.index ["deputy_id"], name: "index_expenses_on_deputy_id"
    t.index ["supplier_id"], name: "index_expenses_on_supplier_id"
  end

  create_table "parties", force: :cascade do |t|
    t.string "acronym"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "suppliers", force: :cascade do |t|
    t.string "name"
    t.string "document"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "deputies", "parties"
  add_foreign_key "expenses", "deputies"
  add_foreign_key "expenses", "suppliers"
end
