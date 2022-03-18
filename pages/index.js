import React from "react";

const Home = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter your name..." />
        <input type="text" placeholder="Enter chat name..." />
        <button type="submit">Create Chat Room</button>
      </form>
    </div>
  );
};

export default Home;
