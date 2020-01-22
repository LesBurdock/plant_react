json.array! @plants do |plant|
  json.extract! plant, :id, :name, :description, :photo, :price
  json.user do
    json.id plant.user.id
    json.email plant.user.email
  end
end
