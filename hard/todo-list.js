/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todo=[];
  }
  add(x){
    this.todo.push(x);
  }
  remove(x){
    if(x>=0 && x<this.todo.length){
      this.todo.splice(x,1);
    }
  }
  update(x, updatedTodo){
    if(x>=0 && x<this.todo.length){
      this.todo[x]=updatedTodo;
    }
  }
  getAll(){
    return this.todo;
  }
  get(x){
    if(x>=0 && x<this.todo.length){
      return this.todo[x];
    }
    return null;
  }
  clear(){
    this.todo=[];
  }
}

module.exports = Todo;
