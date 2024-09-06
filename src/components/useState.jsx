import { useState, useEffect } from "react";


// Forms and Input Handling, can manage the values of form inputs and provide real-time validation feedback to users.
function FormComponent() {
  const [name, setName] = useState('');

  return (
    <form>
      <input
        type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Name: {name}</p>
    </form>
  );
}


// Toggling UI Elements, anaging visibility of elements based on user actions, such as showing a modal or a dropdown.
function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Details
      </button>
      {isVisible && <p>Here are the details...</p>}
    </div>
  );
}

// Lists and Data Display, updating lists dynamically, such as adding/removing items from a shopping cart.
function ShoppingCart() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <button onClick={() => addItem('New Item')}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

//Complex State Management, handling more complex state scenarios, such as managing multiple related state variables
function UserProfile() {
  const [profile, setProfile] = useState({ name: '', age: 0 });

  const updateName = (name) => setProfile((prev) => ({ ...prev, name }));
  const updateAge = (age) => setProfile((prev) => ({ ...prev, age }));

  return (
    <div>
      <input
        type="text"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        value={profile.age}
        onChange={(e) => updateAge(Number(e.target.value))}
      />
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
}


//Authentication Flow, managing user login state, showing different UI for logged in vs. logged out users
function AuthComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Logout</button>) : 
      (<button onClick={() => setIsLoggedIn(true)}>Login</button>)}
      <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>
    </div>
  );
}


// Fetching and Displaying Data, handling the state of data fetched from an API
function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('')
  const [pokemonName, setPokemonName] = useState('');


    useEffect(() => {
        if(pokemonName) {
          const fetchData = async () => {
            setLoading(true);
            try {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
              const result = await response.json();
              setData(result);
            } catch (error) {
              console.error("Error fetching Pokemon data:", error);
              setData(null);
            } finally {
              setLoading(false)
            }
          }; 
          fetchData();
        }
    }, [pokemonName]);


    const handleFetchPokemon = () => {
      setPokemonName(inputValue)
    }


  return (
  <div>
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name="" placeholder="Enter Pokemon name" />
    <button onClick={handleFetchPokemon}>Analyze Pokemon</button>
    {loading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <>
          <p>{data.species?.name}</p>
          <img src={data.sprites?.front_default} alt="" />
          </>

        ) 
      )}
    </div>
  );
}




function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <FormComponent />
      <ToggleComponent />
      <ShoppingCart />
      <UserProfile />
      <AuthComponent />
      <DataFetchingComponent />
    </div>
  );
}

export default App;
