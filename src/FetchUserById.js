import React, { useState, useEffect, useRef } from "react";

const FetchUserById = () => {
  const [singleUser, setSingleUser] = useState("");
  const [showSingleUser, setShowSingleUser] = useState(null);

  const singleUserRef = useRef(null);

  function handleSearchSingleUser() {
      searchSingleUserByIdUsingRef(singleUserRef.current.value);
  }

  async function searchSingleUserByIdUsingRef(singleUser) {
    try {
      let response = await fetch(
        `http://jsonplaceholder.typicode.com/users/${singleUser}`
      );
      let results = await response.json();

      setShowSingleUser(results);
    } catch (e) {
      console.log(e.message);
    }
  }

//   async function searchSingleUserById() {

//     try {
//         let response = await fetch(`http://jsonplaceholder.typicode.com/users/${singleUser}`);
//         let results = await response.json();

//         setShowSingleUser(results)
//     } catch(e) {
//         console.log(e.message)
//     }
//   }

//   useEffect(() => {
//     if (!singleUser) {
//         return;
//     }

//     searchSingleUserById();

//   }, [singleUser])

  return (
    <div>
      {/* <input type="text" value={singleUser} onChange={(e) => setSingleUser(e.target.value)} /> */}
      <input type="text" ref={singleUserRef} /> 
      <button onClick={handleSearchSingleUser}>Search Single User</button>
      <br /> 
      {!showSingleUser ? "" : showSingleUser.name}
    </div>
  );
};

export default FetchUserById;
