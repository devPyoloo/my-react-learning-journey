import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
    <h1>Page Not Found</h1>
    <p>Go back to <Link to={"/"}>HomePage</Link></p>
    </>
  )
}