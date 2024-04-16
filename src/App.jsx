/* eslint-enable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
const App = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
