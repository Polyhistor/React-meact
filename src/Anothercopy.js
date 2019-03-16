import React, {Component} from 'react'
import Person from './Person/Person'


class App extends Component {

  state = {
    person : [
      {name:"Jimmy", age:12},
      {name:"Jack", age:15},
      {name:"pouya", age:27}
    ],
    personState: false 
  } 

  changestate = () => {
    this.setState({
      person : [
        {name:"changed", age:12},
        {name:"Jack", age:15},
        {name:"pouya", age:27}
      ]
    })
  }

  // changeNameHandler = (event) => {
  //   this.setState({
  //     person : [
  //       {name:event.target.value, age:12},
  //       {name:"Jack", age:15},
  //       {name:"pouya", age:27}
  //     ]
  //   })
  // }

  toggler = () => {
      const doesShow = this.state.personState
      this.setState({ personState : !doesShow })
  }

  deletePersonHandler = (personIndex) => {
      const person = this.state.person
      person.splice(personIndex, 1)
      this.setState({person: person})
  }


  render() {
    
    let persons = null

    if (this.state.personState){

      persons = (
        <div> 
          {this.state.person.map( (person, index) =>{
              return <Person 
                    click = {() => this.deletePersonHandler(index)}
                    name = {person.name} 
                    age = {person.age} >
                    </Person>
          })}
        </div>
      )

    }

    return (
      <div className="App">
        <button onClick={this.changestate}>Change Text</button>
        <button onClick={this.toggler}>Show Contents</button>
        {persons}
      </div>
    )

  }


}

export default App