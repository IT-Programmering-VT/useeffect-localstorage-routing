import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ControlledInput = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  // this is our state. Its an object that contains parameters, we
  // set the initial value to an empty string

  const [people, setPeople] = useState([]);
  // this is our second state, an empty array
  // we will stor all person inside of this array

  // this fires off every time the input changes
  const handleChange = (e) => {
    // we use the event parameter to grab the value that is put in the input field.
    const name = e.target.name;
    const value = e.target.value;

    //console.log(name, value);
    setPerson({ ...person, [name]: value });
    // update state with whatever state we had before (...person) and set the properties to the new value
    console.log(person);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // we need to call this method because the browsers default behavior
    // is that it wants to refresh right after submitting the form
    // we dont want that so we need to prevent it

    if (person.firstName && person.lastName && person.email) {
      // if all fields are filled
      //console.log("All values are filled");
      const newPerson = { ...person, id: uuidv4() };
      // create a new state containing the old state plus adding a unique id
      // we need the unique id to prevent from getting a warning when we map the persons in render
      console.log(newPerson);

      setPeople([...people, newPerson]);
      // update state with old state and new state
      setPerson({ firstName: "", lastName: "", email: "" });
      // clear input fields
    } else {
      alert("Empty values");
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <h2>Controlled Input</h2>
      <form className="form">
        <div className="form-control">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" onClick={handleSubmit} className="form-btn">
          Add Person
        </button>
      </form>
      {people.map((person, index) => {
        // destructuring
        const { id, firstName, lastName, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <h4>{lastName}</h4>
            <h4>{email}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ControlledInput;
