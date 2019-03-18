import React, {Component} from 'react'
import Person from './Person/Person'
import './App.css'

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
    // This copies the things
    const personcpy = {
      ...this.state.person[personIndex]
    }


    // The old way
    // const person = Object.assign({}, this.state.persons[PersonIndex])

    personcpy.name = event.target.value;
    
    const persons = [...this.state.person]
    persons[personIndex] = personcpy

    this.setState({ persons : persons })
    
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
  
    }
   
    
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

      style.backgroundColor = 'red' 
    }
      

     
    let classes = []

    if (this.state.person.length <= 2) {
      classes.push('red'); // classes  = ['red']
    }

    if (this.state.person.length <= 1){
      classes.push('bold'); // classes  = ['red', 'bold']
    }


    return (
          <div className="App"> 
            <h1>This is react dude!</h1>
            <p className={classes.join(' ')}>this is cool</p>
            <button onClick={this.changestate}>Change Text</button>
            <button style={style} onClick={this.toggler}>Show Contents</button>
            {persons}
          </div>
    )

  }


}

export default App