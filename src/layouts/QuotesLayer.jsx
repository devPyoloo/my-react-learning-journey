import { Outlet } from "react-router-dom";

export default function QuotesLayer() {
  return (
    <>
    <h1 className="text-center font-semibold text-4xl">List of Quotes you have created...</h1>

    <Outlet />
    </>
  )
}