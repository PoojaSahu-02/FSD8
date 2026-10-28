import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Signup = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [contact, setContact] = useState("");
  let [password, setPassword] = useState("");

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
  let passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  let btnHandler = async (e) => {
    e.preventDefault();
    // console.log(name, email, contact, age);
    let payload = { name, email, contact, password };
    try {
      await axios.post("http://localhost:3001/users", payload);
    } catch (err) {
      console.log(err);
    }
    setName("");
    setEmail("");
    setContact("");
    setPassword("");

    navigate('/login')
  };

  return (
    <div className="border rounded mx-auto mt-20 w-110 h-90 p-6 bg-blue-100">
      <h1 className="text-2xl text-blue-700 mb-4">Signup</h1>
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
          Password
        </label>
        <input
          className="border rounded mx-20 p-0.5 outline-0 text-xl"
          type="text"
          value={password}
          onChange={passwordHandler}
        />
        <br />
        <br />
        <button
          onClick={btnHandler}
          className=" cursor-pointer text-xl border rounded-2xl px-2.5 py-0.5 bg-blue-600 text-white"
        >
          Signup
        </button>
      </form>
    </div>
  );
};
export default Signup;
