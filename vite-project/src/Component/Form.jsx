import React,{useState} from 'react'
const Form = () => {
    let[name,setName] = useState("")
    let[age,setAge] = useState("")
    let[email,setEmail] = useState("")
    let btnHandler = (e)=>{
          e.preventDefault()
        console.log(name,age,email)
    }
    let nameHandler = (e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
     let ageHandler = (e)=>{
          e.preventDefault()
        setAge(e.target.value)
    }
     let emailHandler = (e)=>{
          e.preventDefault()
        setEmail(e.target.value)
    }
  return (
    <div className='border-2 rounded-2xl p-4 m-auto mt-20 h-70 w-90 shadow-2xl bg-blue-100'>
        <h1 className='font-bold text-3xl'>User Details</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input className='border rounded-2xl m-2 p-1' type="text" onChange={nameHandler} value={name}/>
        <br />
        <label htmlFor="">Age</label>
        <input className='border rounded-2xl m-2 p-1' type="text" onChange={ageHandler} value={age}/>
        <br />
        <label htmlFor="">email</label>
        <input className='border rounded-2xl m-2 p-1' type="text" onChange={emailHandler} value={email}/>
        <br />
        {/* <label htmlFor="">gender</label>
        <input className='border rounded-2xl m-2' type="radio" name='gender'/>Male
        <input className='border rounded-2xl m-2' type="radio" name='gender'/>Female
        <br /><br /> */}
        <button onClick={btnHandler} className='border rounded-2xl m-2 px-4 py-1 bg-black text-white cursor-pointer hover:bg-blue-400'>Submit</button>
      </form>
    </div>
  )
}
export default Form
