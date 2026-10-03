import React, { useRef } from "react";
const Uncontrolled = () => {
  let nameRef = useRef();
  let ageRef = useRef();
  let emailRef = useRef();
  // console.log(nameRef,ageRef,emailRef)
  let btnHandler = (e) => {
    e.preventDefault();
    console.log(nameRef, ageRef, emailRef);
    console.log(nameRef.current.value);
    console.log(ageRef.current.value);
    console.log(emailRef.current.value);
  };
  return (
    <div className="border-2 rounded-2xl p-4 m-auto mt-20 h-70 w-90 shadow-2xl bg-blue-100">
      <h1 className="font-bold text-3xl">User Details</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input
          ref={nameRef}
          className="border rounded-2xl m-2 p-1"
          type="text"
        />
        <br />
        <label htmlFor="">Age</label>
        <input
          ref={ageRef}
          className="border rounded-2xl m-2 p-1"
          type="text"
        />
        <br />
        <label htmlFor="">email</label>
        <input
          ref={emailRef}
          className="border rounded-2xl m-2 p-1"
          type="text"
        />
        <br />
        {/* <label htmlFor="">gender</label>
        <input className='border rounded-2xl m-2' type="radio" name='gender'/>Male
        <input className='border rounded-2xl m-2' type="radio" name='gender'/>Female
        <br /><br /> */}
        <button
          onClick={btnHandler}
          className="border rounded-2xl m-2 px-4 py-1 bg-black text-white cursor-pointer hover:bg-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Uncontrolled;
