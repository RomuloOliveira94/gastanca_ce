require "csv"

CSV.foreach(Rails.root.join("lib", "seeds", "Ano-2024.csv"), headers: true, col_sep: ";", encoding: "bom|utf-8") do |row|
  next unless row["sgUF"] == "CE"

  party = Party.find_or_create_by!(acronym: row["sgPartido"]) do |p|
    p.acronym = row["sgPartido"]
  end

  deputy = Deputy.find_or_create_by!(integration_id: row["ideCadastro"]) do |d|
    d.name = row["txNomeParlamentar"]
    d.integration_id = row["ideCadastro"]
    d.cpf = row["cpf"]
    d.state = row["sgUF"]
    d.party_id = party.id
  end

  supplier = Supplier.find_or_create_by!(document: row["txtCNPJCPF"]) do |s|
    s.name = row["txtFornecedor"]
    s.document = row["txtCNPJCPF"]
  end

  category = Category.find_or_create_by!(name: row["txtDescricao"])

  deputy.expenses.create!(
    installment_number: row["numParcela"].to_i,
    issue_date: row["datEmissao"],
    amount: row["vlrDocumento"].to_f,
    deduction: row["vlrGlosa"].to_f,
    net_value: row["vlrLiquido"].to_f,
    document_url: row["urlDocumento"],
    document_type: row["indTipoDocumento"].to_i,
    month: row["numMes"].to_i,
    year: row["numAno"].to_i,
    supplier_id: supplier.id,
    category_id: category.id
  )
end
