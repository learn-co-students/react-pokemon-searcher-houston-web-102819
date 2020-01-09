import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    isClicked: false
  }
  handleClick = () => {

    this.state.isClicked ? this.setState({isClicked: false}) : this.setState({isClicked: true})
  }
  
  
  render(){
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src= {this.state.isClicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
