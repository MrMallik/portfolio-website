import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./blog";
import Content from "./Content";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/blog/*" element={<BlogPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
