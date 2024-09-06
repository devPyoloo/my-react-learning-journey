import Home from "./pages/Home";
import Addquote from "./pages/Addquote";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayer from "./layouts/RootLayer";
import HelpLayer from "./layouts/HelpLayer";
import Faq from "./pages/help/Faq";
import Contact, { contactDataAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import QuotesLayer from "./layouts/QuotesLayer";
import QuoteDetails from "./pages/QuoteDetails";
import QuoteError from "./pages/QuoteError";
import Quotes from "./pages/Quotes";
import InfiniteScoll from "./pages/InfiniteScoll";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RootLayer />}>
      <Route path="/" element={<Home />} />
      <Route path="add" element={<Addquote />} />

      <Route path="help" element={<HelpLayer />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactDataAction} />
      </Route>

      <Route path="quotes" element={<QuotesLayer />} errorElement={<QuoteError />}>
        <Route index element={<Quotes />} />
        <Route path=":quoteId" element={<QuoteDetails />} />
      </Route>

      <Route path="posts" element={<InfiniteScoll />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
