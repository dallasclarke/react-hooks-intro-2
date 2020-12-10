import React, {useState, useEffect} from 'react'

const FetchTodoById = () => {
    const [searchTodosById, setSearchTodosById] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [showTodos, setShowTodos] = useState(null);

    async function fetchingTodosById() {
        try {
            let response = await fetch(
                `http://jsonplaceholder.typicode.com/todos/${searchTodosById}`
            );
            let results = await response.json();

            setShowTodos(results);
            setSearchTodosById("");
            setIsSearching(false);

            console.log(results)
        } catch(e) {
            console.log(e.message);
            setIsSearching(false);
        }
    }

    useEffect(() => {
        if (!searchTodosById) {
            return;
        }
        fetchingTodosById();
    }, [isSearching])


    function handleSearchTodosSubmit(e) {
        e.preventDefault();

        if (!searchTodosById) {
            return;
        }
        setIsSearching(true);
        fetchingTodosById();
    }
    
    
    return (
        <div>
            <form onSubmit={handleSearchTodosSubmit}>
                <input
                    type="text"
                    value={searchTodosById}
                    onChange={(e) => setSearchTodosById(e.target.value)}
                />
                <button>Search Todos</button>
                {isSearching ? <p>...Fetching</p> : <p>{showTodos?.name}</p>}
            </form>
        </div>
    )
}

export default FetchTodoById
