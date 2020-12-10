import React, { useEffect, useState } from "react";

const FetchCommentById = () => {
  const [searchCommentById, setSearchCommentbyId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showComment, setShowComment] = useState(null);

  async function fetchingCommentById() {
    try {
      let response = await fetch(
        `http://jsonplaceholder.typicode.com/comments/${searchCommentById}`
      );
      let results = await response.json();

      setShowComment(results);
      setSearchCommentbyId('')
      setIsSearching(false);

      console.log(results);
    } catch (e) {
      console.log(e.message);
      setIsSearching(false);
    }
  }

  useEffect(() => {
    if (!searchCommentById) {
      return;
    }
    fetchingCommentById();
  }, [isSearching]);

  function handleSearchCommentSubmit(e) {
      e.preventDefault();

      if (!searchCommentById) {
          return;
      }
      setIsSearching(true);
      fetchingCommentById();
  }

  return (
    <div>
      <form onSubmit={handleSearchCommentSubmit}>
        <input
          type="text"
          value={searchCommentById}
          onChange={(e) => setSearchCommentbyId(e.target.value)}
        />
        <button>Search Comments</button>
        {isSearching ? <p>...Fetching</p> : <p>{showComment?.title}</p>}
      </form>
    </div>
  );
};

export default FetchCommentById;
