import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogLandingPage from "./blog/index";
import Content from "./Content";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/blog" element={<BlogLandingPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
