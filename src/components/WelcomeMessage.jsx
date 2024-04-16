import React from "react";

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="m-5">
      <h1>Your postlist is empty, nothing to show.</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get posts from server
      </button>
    </center>
  );
};

export default WelcomeMessage;
