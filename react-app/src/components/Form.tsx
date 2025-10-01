import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

const Form = () => {
  // There re 3 ways to handle the input.
  // 1. By using ref (useRef State)
  // 2. By using changeEvent (onChange)
  // 3. By React hook Form (built-in library)

  // 1. By using ref (useRef State) :
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     if (nameRef.current != null) person.name = nameRef.current.value;
  //     if (ageRef.current != null) person.age = parseInt(ageRef.current.value);
  //     console.log(person);
  //   };

  // 2. By using changeEvent (onChange) :
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  // Either you can create a handleChange function like this or set the onChange event inside input element.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name :
        </label>

        <input
          onChange={handleChange}
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          value={person.name} //only when using onChange
          /*ref={nameRef}*/
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age :
        </label>
        <input
          onChange={handleChange}
          //   onChange={(event) =>
          //     setPerson({ ...person, age: parseInt(event.target.value) })
          //   }
          value={person.age} //only when using onChange
          /*ref={nameRef}*/
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

// While working with onChange event, input value and our state value can clash as we are
// saving value inside our state object but there is also input's value handler that can clash with it
// at some point. so we need to make them single on same page as you can see in input tag.

export default Form;
