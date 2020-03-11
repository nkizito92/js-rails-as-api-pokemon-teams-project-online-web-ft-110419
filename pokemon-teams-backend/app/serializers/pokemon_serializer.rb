class PokemonSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :trainer
  attributes :species, :nickname, :trainer_id
end
