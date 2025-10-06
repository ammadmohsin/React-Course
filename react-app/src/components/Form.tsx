import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name cannot be less than 3 characters" }),
  age: z
    .number({ invalid_type_error: "Please input number only" })
    .min(18, { message: "Age should be greater than or equal to 18" }),
});

type FormData = z.infer<typeof schema>;

// interface FormData { // Only used in onChange Event
//   name: string;
//   age: number;
// }

const Form = () => {
  // There re 3 ways to handle the input.
  // 1. By using ref (useRef State)
  // 2. By using changeEvent (onChange)
  // 3. By React hook Form (built-in library) (to install : "npm i react-hook-form@7.43" then import useForm from react-hook-form);

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
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  // };

  // Either you can create a handleChange function like this or set the onChange event inside input element.
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPerson({
  //     ...person,
  //     [event.target.id]: event.target.value,
  //   });
  // };

  // 3. By using React Hook Form :
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = handleSubmit((data) => console.log(data)); //OR
  // const onSubmit = (data: FieldValues) => console.log(data); (now pass handleSubmit(onSubmit) inside form's onSubmit)

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name :
        </label>

        <input
          // ref={nameRef}
          // onChange={handleChange}
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          // value={person.name} //only when using onChange
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message} </p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age :
        </label>
        <input
          // ref={nameRef}
          // onChange={handleChange}
          //   onChange={(event) =>
          //     setPerson({ ...person, age: parseInt(event.target.value) })
          //   }
          // value={person.age} //only when using onChange
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message} </p>}
      </div>
      <button /*disabled={!isValid}*/ className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

// Ps : While working with onChange event, input value and our state value can clash as we are
// saving value inside our state object but there is also input's value handler that can clash with it
// at some point. so we need to gather them on a same page as you can see in input tag.

export default Form;
