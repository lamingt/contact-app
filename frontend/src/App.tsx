import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import { Suspense } from "react";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
