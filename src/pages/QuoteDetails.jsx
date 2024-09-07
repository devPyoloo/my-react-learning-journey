import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../data/api";
import { useState } from "react";

const fetchData = async (quoteId) => {
  const { data } = await axios.get(`${API_URL}/${quoteId}`);
  return data;
};

const editData = async (quoteId, editedQuote) => {
  await axios.put(`${API_URL}/${quoteId}`, editedQuote);  // Use PUT or POST for editing
};

export default function QuoteDetails() {
  const { quoteId } = useParams();
  const [isToggle, setIsToggle] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const queryClient = useQueryClient();
  const [editValues, setEditValues] = useState({
    motto: "",
    author: "",
  });

  const { data: quotes, isLoading, error: fetchError } = useQuery({
    queryKey: ["quotes", quoteId],
    queryFn: () => fetchData(quoteId),
    staleTime: 30000,
  });

  const { mutate: editDataMutate } = useMutation({
    mutationFn: (editedQuote) => editData(quoteId, editedQuote),
    onError: (error) => {
      setErrorMsg(error.message || "Error editing the quote");
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["quotes", quoteId]);
      setIsToggle(false);  // Close edit mode on successful save
    },
  });

  const handleEditQuote = () => {
    if (isToggle) {
      editDataMutate(editValues);  // Save the edited data
    } else {
      setIsToggle(true);  // Open edit mode
    }
  };

  if (isLoading) return <div>Quote details is loading....</div>;
  if (fetchError) return <div>{fetchError.message}: retrieving the quote details...</div>;
  if (errorMsg) return <div>{errorMsg}</div>;

  const { author, motto } = quotes;

  return (
    <div className="details relative bg-slate-900 text-white text-center">
      <div className="bg-slate-900 drop-shadow-lg flex flex-col items-start justify-center text-xl text-white py-10 px-8 mt-1 rounded-md mx-auto w-full">
        {isToggle ? (
          <div className="flex flex-col gap-2">
            <input
            className="text-black"
              value={editValues.motto}
              type="text"
              onChange={(e) => setEditValues({ ...editValues, motto: e.target.value })}
            />
            <input
            className="text-black"
              value={editValues.author}
              type="text"
              onChange={(e) => setEditValues({ ...editValues, author: e.target.value })}
            />
          </div>
        ) : (
          <div>
            <p className="mb-2">Motto: {motto} </p>
            <p className="">Author: {author}</p>
          </div>
        )}
        <button className="underline mt-3" onClick={handleEditQuote}>
          {isToggle ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}
