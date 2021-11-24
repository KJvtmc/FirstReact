import React, { Component } from "react";

const people = [
    {
      name: 'James',
      age: 17,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 5,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];

  export default class People extends Component{
      render(){
        return(
        <div>
          <ul>
            {people.filter(person => person.age>18).map((person)=>(
              <li className="text-start"> {person.name} is {person.age} years old.</li>
            ))}
          </ul>
        </div>
        )
      }
  }