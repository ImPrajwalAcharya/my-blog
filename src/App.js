import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import NoPage from "./components/NoPage";

// Lazy load components for better performance
const Home = lazy(() => import("./components/Home"));
const PostDetail = lazy(() => import("./components/PostDetail"));
const AllPostList = lazy(() => import("./components/AllPosts"));

// Routes Configuration
const ROUTES = {
  HOME: "/",
  BLOG_HOME: "/my-blog",
  ALL_POSTS: "/my-blog/all-posts",
  POST_DETAIL: "/post/:id",
  NOT_FOUND: "*",
};

function App() {
  // Conditional Footer rendering based on route
  const location = useLocation();
  const shouldShowFooter = ![ROUTES.NOT_FOUND].includes(location.pathname);

  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={<div className="text-center pt-10">Loading...</div>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BLOG_HOME} element={<Home />} />
          <Route path={ROUTES.ALL_POSTS} element={<AllPostList />} />
          <Route path={ROUTES.POST_DETAIL} element={<PostDetail />} />
          <Route path={ROUTES.NOT_FOUND} element={<NoPage />} />
        </Routes>
      </Suspense>
      {shouldShowFooter && <Footer />}
    </main>
  );
}

export default App;