import { useRouteError, Link } from "react-router-dom";

export default function QuoteError() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message || "An unexpected error occurred"}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
}
