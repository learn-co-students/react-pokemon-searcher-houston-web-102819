import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleChange = (e, {name}) => {
    this.setState({[name]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon',{
      method: "POST",
      headers: {
        
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          {},
          {},
          {},
          {},
          {},
          {value: this.state.hp}
        ],
        sprites:{
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })

    })
    .then(res => res.json())
    .then(pokemon => this.props.addPokemon(pokemon))
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
