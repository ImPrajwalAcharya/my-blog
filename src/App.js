import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Update import
import Footer from "./components/Footer";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import AllPostList from "./components/AllPosts";

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-black">
        <Routes> {/* Replace Switch with Routes */}
          <Route exact path="/" element={<Home />} /> {/* Update Route syntax */}
          <Route path="/my-blog/" element={<Home />} /> {/* Update Route syntax */}
          <Route path="/all-posts" element={<AllPostList />} /> {/* Update Route syntax */}
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
        <Footer />
      </main>

    </Router>
  );
}

export default App;
