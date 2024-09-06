import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8000/quotes";

const fetchData = async (quoteId) => {
    const response = await axios.get(`${API_URL}/${quoteId}`)
    return response.data
}

export default function QuoteDetails() {
  const { quoteId } = useParams();

  const { data: quotes, isLoading } = useQuery({
    queryKey: ["quotes", quoteId],
    queryFn: () => fetchData(quoteId),
  });
  if(isLoading) return <div>Quote details is loading....</div>

  const { author, q } = quotes;

  return (
<div className="details relative bg-slate-900 text-white text-center">
    <p> { q }</p>
    <h1>Author: { author }</h1>
  </div>
  ) 
}
