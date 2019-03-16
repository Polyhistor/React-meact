import React, {Component} from 'react'
import Person from './Person/Person'


class App extends Component {

  state = {
    person : [
      {id:'12121', name:"Jimmy", age:12},
      {id:'121s', name:"Jack", age:15},
      {id:'23232a', name:"pouya", age:27}
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

  changeNameHandler = (event, id) => {

    const personIndex = this.state.person.findIndex(p => {
      return p.id == id
    })

    // The new Way
    const person = {
      ...this.state.Persons[personIndex]
    }

    // The old way
    // const person = Object.assign({}, this.state.persons[PersonIndex])

    person.name = event.target.value;
    
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ person : person })
    
    }

  toggler = () => {
      const doesShow = this.state.personState
      this.setState({ personState : !doesShow })
  }

  deletePerson(personIndex){
    // The old way
    // const person = this.state.person.slice()
    // The new way
    const person = [...this.state.person]
    person.splice(personIndex, 1)
    this.setState({ person : person})
  }


  render() {
    
    let persons = null

    if (this.state.personState){

      persons = (
        <div> 
          {this.state.person.map( (person, index) =>{
              return <Person 
                    click = {()=>this.deletePerson(index)}
                    name = {person.name} 
                    age = {person.age} 
                    key = {person.id} 
                    changed = {(event)=>this.changeNameHandler(event, person.id)}
                    >
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