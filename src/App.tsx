import React from "react";
import User from "./components/User";
import UserObject from "./components/UserObject";
import ArrayOfObject from "./components/ArrayOfObject";
import DataFetch from "./components/DataFetch";
import Button from "./components/Button";
import Post from "./components/Post";
import ButtonStyle from "./components/ButtonStyle";
import CounterApp from "./components/CounterApp";
import NewUser from "./components/NewUser";
import NewUsers from "./components/NewUsers";
import Counter from "./components/Counter";

const userObject = {
  name: "Mehedi",
  age: 24,
  status: "Developer",
  language: ["Bangle", "English", "Hindi"],
};

const arrayOfObject = [
  {
    id: 1,
    name: "Kongkon Jowarder",
    age: 22,
    status: "Web Developer",
    language: ["Bangle", "English"],
  },
  {
    id: 2,
    name: "Mehedi",
    age: 24,
    status: "Software Developer",
    language: ["Bangle", "English", "Hindi"],
  },
];

const btnStyles = {
  color: "white",
  background: "green"
};
const App = () => {
  return (
    <div>
      {/* <User name='Kongkon jowarder' age={22} isRegistered={false} language={["Bangla", "English"]}/> */}
      {/* <UserObject userObject={userObject} /> */}
      {/* <ArrayOfObject arrayOfObject={arrayOfObject}/> */}
      {/* <DataFetch status="error"/> */}
      {/* <Button>Click here</Button> */}
      {/* <Post/> */}
      {/* <ButtonStyle btnStyle={btnStyles} /> */}
      {/* <CounterApp/> */}
      {/* <NewUser/> */}
      {/* <NewUsers/> */}
      <Counter/>
    </div>
  );
};

export default App;
