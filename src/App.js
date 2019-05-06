import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
      search: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const styles={
      form:{
        textAlign:"center",
        zoom: 2.3,
      },
      title:{
        textAlign:"center", 
        display:"block",
        margin: 20,
        color: "gold"
      },
      img:{
        display:"block",
        margin: "auto",
        marginTop: 20,
        border: 'solid black',
        outline: "none"
      }
    }
    return (
      <div>
        <h1 style={styles.title}>Find Company Logos</h1>
        <form style={styles.form} onSubmit={this.handleSubmit} action="">
          <input 
            style={{outline:"none", borderRadius: 2, border: "white solid", textAlign:"center"}}
            type="text" 
            name="search" 
            value={this.state.search}
            onChange={this.handleChange}
            autoFocus
            autoComplete='off'
            placeholder="OneRefugee.org"
            required
          />
        </form>
          {this.state.search === "" ? null :
            <img style={styles.img} src={`https://logo.clearbit.com/${this.state.search}`} alt=""/>
          }
      </div>
    );
  }
}

export default App;