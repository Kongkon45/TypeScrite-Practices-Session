import React from "react";
type UserDemo = {
  userObject: {
    name: string;
    age: number;
    status: string;
    language: string[];
  };
};

const UserObject = ({ userObject }: UserDemo) => {
  return <div>
    <p>{userObject.name}</p>
    <p>{userObject.age}</p>
    <p>{userObject.status}</p>
    <p>Speaks : 
        {userObject.language?.map((lang, index)=>{
            return <div key={index} >
                <p>{lang}</p>
            </div>
        })}
    </p>
  </div>;
};

export default UserObject;
