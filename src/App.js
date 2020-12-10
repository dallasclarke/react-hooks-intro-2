import FetchUsers from "./FetchUsers";
import FetchUserById from "./FetchUserById"
import FetchCommentById from "./FetchCommentById"
import FetchTodosById from "./FetchTodoById"
import './App.css';

function App() {
  return (
    <div className="App">
      <FetchUsers />
      <hr />
      <FetchUserById />
      <hr /> 
      <FetchCommentById /> 
      <hr /> 
      <FetchTodosById />
    </div>
  );
}

export default App;
