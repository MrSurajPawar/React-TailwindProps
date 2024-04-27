import "./App.css";
import Cards from "./components/Cards";

function App() {
  // const myObj = {
  //   username: "SURAJ PAWAR",
  //   age: 21
  // };

  const newArr = [1,2,3];
  return (
    <>
      <h1 className="text-sky-400 bg-slate-600 rounded-lg p-4 mb-4">
        Hello this is Suraj !
      </h1>
      <Cards username="Suraj Pawar" btnText="Click me"/>
      <Cards username="Onkar Jadhav"/>
    </>
  );
}

export default App;
