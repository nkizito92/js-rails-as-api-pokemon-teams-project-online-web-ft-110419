class PokemonsController < ApplicationController
    def index 
        pokemons = Pokemon.all
        options = {
            include: [:trainer]
        }
        render json: PokemonSerializer.new(pokemons, options)
    end 
    
    def show 
        pokemon = Pokemon.find_by_id(params[:id])
        options = {
            include: [:trainer]
        }
        render json: PokemonSerializer.new(pokemon, options)
    end 
end
