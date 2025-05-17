class Expense < ApplicationRecord
  MONTHS_PT_BR = [
    nil,
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ].freeze

  belongs_to :deputy
  belongs_to :supplier
  belongs_to :category
  validates :amount, :deputy_id, :deduction, :net_value, :document_type, :supplier_id, :month, :year, presence: true

  enum :document_type, {
    nota_fiscal: 0,
    recibo_ou_outros: 1,
    documento_emitido_no_exterior: 2,
    despesa_do_parlasul: 3,
    nota_fiscal_eletronica: 4
  }, default: :nota_fiscal
end
