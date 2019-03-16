import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'


class App extends Component {

    state = {
      person : [
        {name: 'James', age:12},
        {name: 'Cloe', age:22},
        {name: 'Kimber', age:23}
      ],
      showPersons: false
    }


    chagenState = (newName) => {
      this.setState({
        person : [
          {name: newName, age:12},
          {name: 'Cloe', age:22},
          {name: 'Kimber', age:23}
        ]
      })
    }

    nameChangedHandler = (event) => {
      this.setState({
        person : [
          {name: "Maximus", age:12},
          {name: event.target.value, age:22},
          {name: 'Kimber', age:23}
        ]
      })
    }

    togglePrsonHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({showPersons : !doesShow})
    }


    render () {

      let persons = null

      if (this.state.showPersons){
        persons = (
          <div >
                {this.state.person.map= (person) => {
                    <Person name={person.name} age={person.age}></Person>
                }}
          </div>
        )
      }

      return (
          <div className="App">
            <button onClick={this.togglePrsonHandler}>Change some text!</button>
          {persons}
          </div>
        )
    }
  }
    

export default App

