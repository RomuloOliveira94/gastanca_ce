FactoryBot.define do
  factory :expense do
    deputy
    supplier
    category
    issue_date { Time.zone.now.to_date }
    amount { rand(100..5000) }
    deduction { rand(0..100) }
    net_value { amount - (amount * deduction / 100) }
    description { FFaker::Lorem.sentence }
    year { Time.current.year }
    month { Time.current.month }
    document_type { 0 }
    document_url { FFaker::Internet.http_url }

    trait :with_deputy do
      association :deputy, factory: :deputy, strategy: :build
    end

    trait :with_supplier do
      association :supplier, factory: :supplier, strategy: :build
    end

    trait :with_category do
      association :category, factory: :category, strategy: :build
    end
  end
end
