import React from "react";
import User from "./components/User";
import UserObject from "./components/UserObject";
import ArrayOfObject from "./components/ArrayOfObject";

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
  }
];

const App = () => {
  return (
    <div>
      {/* <User name='Kongkon jowarder' age={22} isRegistered={false} language={["Bangla", "English"]}/> */}
      {/* <UserObject userObject={userObject} /> */}
      <ArrayOfObject arrayOfObject={arrayOfObject}/>
    </div>
  );
};

export default App;
