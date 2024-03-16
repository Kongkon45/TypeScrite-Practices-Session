import React from "react";
type objectDemo = {
  arrayOfObject: {
    id: number;
    name: string;
    age: number;
    status: string;
    language: string[];
  }[];
};


const ArrayOfObject = ({arrayOfObject}: objectDemo) => {
    
  return <div>
    {arrayOfObject?.map((object)=>{
        return <div>
            <p>{object.id}</p>
            <p>{object.name}</p>
            <p>{object.age}</p>
            <p>{object.status}</p>
            <p>{object.language.join(", ")}</p>
        </div>
    })}
  </div>;
};

export default ArrayOfObject;
