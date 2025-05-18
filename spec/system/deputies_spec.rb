require "rails_helper"

RSpec.describe "Deputies", type: :system, js: true do
  include ActionView::Helpers::NumberHelper

  it "displays a list of deputies" do
    deputies = [
      create(:deputy, name: "Danilo Forte"),
      create(:deputy, name: "Célio Studart")
    ]

    visit "/deputies"

    deputies.each do |deputy|
      expect(page).to have_content(deputy.name)
      expect(page).to have_css("img[src='#{deputy.image_url}']")
      expect(page).to have_content(deputy.party.acronym)
      expect(page).to have_content(deputy.state)
      expect(page).to have_link(href: "/deputados/#{deputy.id}")
    end
  end

  it "displays deputy details" do
    deputy = create(:deputy, :with_expenses, name: "Danilo Forte")
    visit "/deputados/#{deputy.id}"

    expect(page).to have_content(deputy.name)
    expect(page).to have_css("img[src='#{deputy.image_url}']")
    expect(page).to have_content(deputy.party.acronym)
    expect(page).to have_content(deputy.state)
    expect(page).to have_content(number_to_currency(deputy.total_expenses))
    expect(page).to have_content(number_to_currency(deputy.average_total_monthly_expense))
    expect(page).to have_content(number_to_currency(deputy.highest_expense.net_value))
  end
end
