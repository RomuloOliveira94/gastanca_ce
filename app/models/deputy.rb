class Deputy < ApplicationRecord
  has_many :expenses, dependent: :destroy
  belongs_to :party
  validates :name, :integration_id, :cpf, :state, presence: true

  def image_url
    "http://www.camara.leg.br/internet/deputado/bandep/#{integration_id}.jpg"
  end

  def monthly_expenses
    expenses.includes(:category, :supplier).order(:month).group_by { |e| Expense::MONTHS_PT_BR[e.month] }
  end

  def total_monthly_expenses
    monthly_expenses.transform_values { |exps| exps.sum(&:net_value) }
  end

  def total_expenses
    expenses.sum(&:net_value)
  end

  def total_category_expenses
    expenses.includes(:category).group_by { |e| e.category.name }
                                .transform_values { |exps| exps.sum(&:net_value) }
  end

  def most_expensive_expense
    expenses.order(net_value: :desc).first
  end

  def average_total_monthly_expense
    return 0 if expenses.empty?
    total_expenses.to_f / monthly_expenses.keys.size
  end
end
