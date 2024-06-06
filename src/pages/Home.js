import React from "react";
import { Header, Introduction } from "../components/layout";

function Home() {
  return (
    <div className="w-full bg-black">
      <div className="flex flex-col items-center">
        <Header />
        <Introduction />
      </div>
    </div>
  );
}

export default Home;
