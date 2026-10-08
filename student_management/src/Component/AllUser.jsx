import { useState, useEffect } from "react";
import axios from "axios";
const AllUser = () => {
  let [content, setContent] = useState([]);
  let getData = async () => {
    let response = await axios.get("http://localhost:3000/students");
    // console.log(response.data)
    setContent(response.data);
  };
  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <div>
      {content.map((ele) => {
        return (
          <div key={ele.id}>
            <p>Name = {ele.name}</p>
            <p>Email = {ele.email}</p>
            <p>Contact = {ele.contact}</p>
            <p>Age = {ele.age}</p>
          </div>
        );
      })}
    </div>
  );
};
export default AllUser;
