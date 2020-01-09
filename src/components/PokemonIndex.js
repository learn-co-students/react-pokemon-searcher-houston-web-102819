import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ''
  }
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokes => {
      this.setState ({pokemons: pokes})
    })
  }
  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  addPokemon = (pokemon) => this.setState({pokemons:[...this.state.pokemons, pokemon]})
  render() {
    const searchedPokemon = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon= {this.addPokemon}/>
        <br />
        <Search onChange={this.handleChange} />
        <br />
        <PokemonCollection pokemon={searchedPokemon} toggleImage={this.toggleImage}/>
      </Container>
    )
  }
}

export default PokemonPage
