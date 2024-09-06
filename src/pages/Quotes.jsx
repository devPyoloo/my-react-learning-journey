import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../data/api";

// const BASE_API_URL = "http://localhost:8000/quotes/?_limit=5&_page=t";
// the items per page in json

// GET DATA
const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// I have 10 items and it limit the items to 5

// POST DATA
const addData = async (newQuote) => {
  await axios.post(API_URL, newQuote);
};

//DELETE DATA
const deleteData = async (quoteId) => {
  await axios.delete(`${API_URL}/${quoteId}`);
};

export default function Quotes() {
  // const [page, setPage] = useState(1);

  const [motto, setMotto] = useState("");
  const [author, setAuthor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    data: quotes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["quotes"],
    queryFn: fetchData,
    staleTime: 10000, // 10secs how long the data stay fresh in the browser
  });

  const queryClient = useQueryClient();

  const { mutate: addMutate, error: mutationError } = useMutation({
    mutationFn: addData,

    onMutate: async (newQuote) => {
      await queryClient.cancelQueries(["quotes"]); //cancel any ongoing fetch request for the ["quotes"] query.

      const previousQuoteData = queryClient.getQueryData(["quotes"]); //make a copy or store the current quotes data so you can use this to revert if something goes wrong.

      queryClient.setQueryData(["quotes"], (oldQueryData) => {
        return [
          ...oldQueryData,
          { ...newQuote, id: String(oldQueryData.length + 1) },
        ];
      }); // make a optimistic updates meaning, update the local cache data and add the new quote to the existing list of quotes. aslo add id is optionnal

      return { previousQuoteData }; //return the current data before it triggers the mutation function (addData) this will be used in onError incase of mutation fails
    },

    onError: (error, _newQuote, context) => {
      queryClient.setQueryData(["quotes"], context.previousQuoteData); // revert the previousQuoteData and context means it allows to access the return value(previousQuoteData) of onMutation.
      setErrorMessage(
        error.message || "An error occurred while adding the quote."
      );
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["quotes"]); // ensures that the cache is refreshed and the data is consistent. It's more about keeping the data up-to-date
    },
  });


  //handle delete muatution
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteData,
    onMutate: async (quoteId) => {

      await queryClient.cancelQueries(["quotes"]);

      const previousQuoteData = queryClient.getQueryData(["quotes"]); 
      
      queryClient.setQueryData(["quotes"], (oldQueryData) => oldQueryData.filter((quote) => quote.id !== quoteId)
      ); 

      return { previousQuoteData }; 
    },

    onError: (error, _quoteId, context) => {
      queryClient.setQueryData(["quotes"], context.previousQuoteData); 
      setErrorMessage(
        error.message || "An error occurred while deleting the quote."
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["quotes"]);
    }
  });

  const handleDeleteQuote = (id) => {   
    deleteMutate(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quote = { motto, author };

    addMutate(quote);
    console.log(quote);

    setAuthor("");
    setMotto("");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Loading quotes</div>;

  return (
    <div className="relative mx-auto flex-col justify-center items-center mb-20 px-10 py-20">
      <section className="bg-neutral-100 flex items-center justify-center w-1/2 rounded-lg p-10">
        <form onSubmit={handleSubmit} className="flex flex-col w-60">
          <label htmlFor="author">Quote:</label>
          <textarea
            className="border-2"
            value={motto}
            onChange={(e) => setMotto(e.target.value)}
          />
          <label htmlFor="author">Author:</label>
          <input
            className="border-2"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="submit mt-4 bg-orange-500 text-white py-1 rounded-sm hover:bg-orange-400">
            Add
          </button>
        </form>
      </section>

      {mutationError && <div> {errorMessage} </div>}

      {quotes?.map((quote) => (
        <div
          key={quote.id}
          className="bg-slate-900 drop-shadow-lg flex flex-col items-start justify-center text-xl text-white py-10 px-8 mt-1 rounded-md mx-auto w-full"
        >
          <Link to={quote.id}>
            <h1 className="text-2xl mb-2"> {quote.motto} </h1>
            <p className="text-right"> Author: {quote.author}</p>
          </Link>
          <button
            className="underline mt-3"
            onClick={() => handleDeleteQuote(quote.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* <div className="flex justify-center items-center gap-10 mt-20">
      <button disabled={page === 1} onClick={() => setPage(prevPage => Math.max( prevPage - 1))} className={`py-3 px-9 bg-gray-400 hover:bg-gray-200 ${page === 1 ? 'hover:cursor-not-allowed' : ''}`}>Previous</button>
      <span className="text-xl font-semibold">{page}</span>
      <button disabled={page > quotes.length} onClick={() => setPage(prevPage => prevPage + 1)} className="py-3 px-9 bg-gray-400 hover:bg-gray-200">Next</button>
      </div>
       */}
    </div>
  );
}
