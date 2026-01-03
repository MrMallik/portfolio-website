import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./blog";
import Content from "./Content";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/blog/*" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
