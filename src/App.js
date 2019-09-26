import React, {Component} from 'react';
import Header from "./components/layout/Header";
import Todos from './components/Todos';
import TodoItem from "./components/TodoItem";
import './App.css'
import './header.css'

class App extends Component {
  state = {
    todos: [{
      id: 1,
      title: 'take out the trash',
      completed: false
    },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Play games',
        completed: false
      },
    ]
  };


  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id ===id) {
        todo.completed = !todo.completed
      }
      return todo;
      })})
  };

  delTodo =(id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    // console.log(this.state.todos);
    return (
        <div className="App">
          <Header/>
          <Todos todos={this.state.todos} markComplete = {this.markComplete.bind(this)}
          delTodo = {this.delTodo}/>
          {/*<TodoItem/>*/}
        </div>
    );
  }
}

export default App;
