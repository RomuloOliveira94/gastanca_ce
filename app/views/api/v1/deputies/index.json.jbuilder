json.array! @deputies do |deputy|
  json.partial! deputy, as: :deputy
end
