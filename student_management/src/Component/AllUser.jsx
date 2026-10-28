import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllUser = () => {
  const [content, setContent] = useState([]);

  const getData = async () => {
    let response = await axios.get("http://localhost:3000/students");
    setContent(response.data);
  };

  useEffect(() => {
    try{
    getData()
    }
    catch(err){
      console.log(err)
    }
  }, []);

  let deleteHandler = async(id)=>{
    try{
    await axios.delete(`http://localhost:3000/students/${id}`)
    alert("User Deleted!!")
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          All Students
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          View and manage student records.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">Name</th>
              <th scope="col" className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">Email</th>
              <th scope="col" className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">Age</th>
              <th scope="col" className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">Contact</th>
              <th scope="col" className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {content.map((ele) => (
              <tr key={ele.id} className="transition-colors duration-200 hover:bg-blue-50/70">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{ele.name}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{ele.email}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{ele.age}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{ele.contact}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <button type="button" className="mr-2 rounded-md px-2 py-1 font-medium text-blue-700 transition duration-200 hover:bg-blue-100 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"><Link to={`/edit/${ele.id}`}>Edit</Link></button>
                  <button type="button" className="rounded-md px-2 py-1 font-medium text-red-600 transition duration-200 hover:bg-red-100 hover:text-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" onClick={()=>{deleteHandler(ele.id)}}>Delete</button>
                </td>
              </tr>
            ))}
            {content.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-sm text-slate-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AllUser;
