import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Addquote() {
  const [q, setQ] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const quote = { q, author };

    fetch("http://localhost:8000/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quote),
    }).then(() => {
      console.log("New quote added");
      navigate("/");
    });
  };

  return (
    <div className="relative mx-auto items-center justify-center flex mt-20">
      <section className="bg-neutral-100 flex items-center justify-center w-1/2 rounded-lg p-10">
        <form onSubmit={handleSubmit} className="flex flex-col w-60">
          <label htmlFor="author">Quote:</label>
          <textarea
            className="border-2"
            value={q}
            onChange={(e) => setQ(e.target.value)}
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
    </div>
  );
}
