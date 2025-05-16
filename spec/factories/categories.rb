FactoryBot.define do
  factory :category do
    sequence(:name) { |n| "#{FFaker::Product.name} #{n}" }
  end
end
