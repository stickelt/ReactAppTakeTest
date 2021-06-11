import React from 'react'
import { obfuscate, updatedCard } from './utils';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      creditcard: '',
      obfuscated: '',
      status: '',
      originalCard: '3333',
      updated: '4444',
    };
       
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind( this );
  }

  handleChange = (event) => {
    this.setState({creditcard: event.target.value});
  }
  
  handleClick() {

    const finalCard = updatedCard(this.state.originalCard, this.state.updated);
    if(finalCard)
      this.setState({status: "Updated"});   
    

    
    const target = obfuscate(this.state.creditcard);
    this.setState({obfuscated: target});
  }



  componentDidMount() {
   
  }

  render() {
    return (
      <form>
        <p></p>
        <label>
          Credit Card Number: <input type="password" value={this.state.value} name="creditCard" onChange={this.handleChange}/>
        </label>
        <p></p>
        <label>
          Status: { this.state.status }
        </label>
        <p></p>
        <label>
          obfuscated: {this.state.obfuscated}
        </label>
        <p></p>
        <button type="button" onClick={ this.handleClick }>Check</button>
      </form>
  );

  }

}


export default App;
