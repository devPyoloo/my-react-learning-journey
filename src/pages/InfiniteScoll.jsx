import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const BASE_API_URL = "http://localhost:8000/posts";

// GET DATA
const fetchData = async ({ pageParam }) => {
  const response = await axios.get(
    `${BASE_API_URL}/?_limit=8&_page=${pageParam}`
  );
  return response.data;
};

// POST DATA

export default function InfiniteScoll() {

  const { ref, inView } = useInView();

  const { data, isLoading, error, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    staleTime: 30000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  useEffect(() => {
    if(inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="relative mx-auto flex-col justify-center items-center mb-20 px-10 py-20">
      {data?.pages.map((page) =>
        page.map((post) => (
          <div
            key={post.id}
            className="bg-slate-900 drop-shadow-lg flex flex-col items-center justify-center text-xl text-white py-20 px-8 mt-1 rounded-md mx-auto w-96"
          >
            <img src={post.image} className="w-1/4 mb-5" alt="" />
            <p className="text-center">{post.content}</p>
          </div>
        ))
      )}


      <div ref={ref}>{isFetching && <p>Loading...</p>}</div>
    </div>
  );
}
