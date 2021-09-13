import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
class TodoList extends Component{
 constructor(props){
    super(props);
    this.state={todos: []};   
    this.create = this.create.bind(this);
    this.removeItem = this.removeItem.bind(this);     
    this.update = this.update.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  create(newTodo){
      this.setState({
          todos: [...this.state.todos, newTodo]
      });
  }
  removeItem(id){
      this.setState({
          todos: this.state.todos.filter(t =>t.id !==id)
      });
  }
    update(id,updatedTask){
       const updatedTodos= this.state.todos.map(todo =>{
        if(todo.id === id){
            return {...todo, task:updatedTask};
        }
        return todo;
       });
       this.setState({todos: updatedTodos});
   } 
   toggleCompleted(id){
      const updatedTodos= this.state.todos.map(todo =>{
        if(todo.id === id){
            return {...todo, completed: !todo.completed};
        }
        return todo;
       });
       this.setState({todos: updatedTodos});
   }
 render(){
     const todos = this.state.todos.map(todo => {
          return <Todo key={todo.id} 
              id={todo.id}
              task={todo.task} 
              removeItem={this.removeItem}
              updateTodo ={this.update}
              completed={todo.completed}
              toggleTodo={this.toggleCompleted}
              />
     });
     return(
        <div className="TodoList">
            <h1>
            Todo List! <span>A simple Todo List App.</span>
            </h1>
            <ul>
              {todos}
            </ul>
            <NewTodoForm createTodo={this.create} />

        </div>
     );
 }
 
}
export default TodoList;