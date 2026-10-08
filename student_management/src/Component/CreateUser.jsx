import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [contact, setContact] = useState("");
  let [age, setAge] = useState("");

let navigate = useNavigate()


  let nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  let emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  let contactHandler = (e) => {
    e.preventDefault();
    setContact(e.target.value);
  };
  let ageHandler = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  let btnHandler = async (e) => {
    e.preventDefault();
    // console.log(name, email, contact, age);
    let payload = { name, email, contact, age };
    try {
      await axios.post("http://localhost:3000/students", payload);
    } catch (err) {
      console.log(err);
    }
    setName("");
    setEmail("");
    setContact("");
    setAge("");

    navigate('/alluser')
  };

  return (
    <div className="border rounded mx-auto mt-20 w-110 h-90 p-6 bg-blue-100">
      <h1 className="text-2xl text-blue-700 mb-4">Create User</h1>
      <form>
        <label className="text-xl" htmlFor="">
          Name
        </label>
        <input
          className="border rounded mx-8 p-0.5 outline-0 text-xl"
          type="text"
          value={name}
          onChange={nameHandler}
        />
        <br />
        <br />
        <label className="text-xl" htmlFor="">
          Email
        </label>
        <input
          className="border rounded mx-8 p-0.5 outlin+e-0 text-xl"
          type="text"
          value={email}
          onChange={emailHandler}
        />
        <br />
        <br />
        <label className="text-xl" htmlFor="">
          Contact
        </label>
        <input
          className="border rounded mx-4 p-0.5 outline-0 text-xl"
          type="text"
          value={contact}
          onChange={contactHandler}
        />
        <br />
        <br />
        <label className="text-xl" htmlFor="">
          Age
        </label>
        <input
          className="border rounded mx-10 p-0.5 outline-0 text-xl"
          type="text"
          value={age}
          onChange={ageHandler}
        />
        <br />
        <br />
        <button
          onClick={btnHandler}
          className=" cursor-pointer text-xl border rounded-2xl px-2.5 py-0.5 bg-blue-600 text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default CreateUser;
