import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/layout/Header";
import Todos from './components/Todos';
import TodoItem from "./components/TodoItem";
import './App.css'
import AddToDo from "./components/AddTodo"; 
import About from "./components/pages/About"; 
import axios from 'axios';
import uuid from 'uuid';



class App extends Component {
  state = {
    todos: []
  };

  // ?_limit= sets a limit of results 

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>this.setState({todos: res.data}))
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id ===id) {
        todo.completed = !todo.completed
      }
      return todo;
      })})
  };


  //Delete Todo
  delTodo =(id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=> this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  //Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   complete: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title, 
      completed: false
    })
    .then(res=> this.setState({todos: [...this.state.todos, res.data] }));
  }
  

  render() {
    // console.log(this.state.todos);
    return (
      // Anything you want to user Router with
      <Router>
        <div className="App">
          <div className="container">
          <Header/>
          {/* exact brings in only the listed components and not all of the ones included with / */}
          <Route exact path= "/" render={props => (
            <React.Fragment>
                <AddToDo addTodo={this.addTodo}/>
          <         Todos todos={this.state.todos} markComplete = {this.markComplete.bind(this)}
                    delTodo = {this.delTodo}
                  />
            </React.Fragment>
          )}/>

          <Route path='/about' component={About}/>
          
          {/*<TodoItem/>*/}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
