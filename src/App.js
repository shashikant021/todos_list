import './App.css';
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am OnDelete todo", todo);

    // this method is not use in react to delete
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "list of rasan",
      desc: "ghar "
    },
    {
      sno: 1,
      title: "list of rasan2",
      desc: "ghar 2"
    },
    {
      sno: 3,
      title: "list of rasan3",
      desc: "ghar1 "
    }
  ]);

  return (
    <>

      <Header title="MyTodosList" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  );
}

export default App;
