import React, { useState } from "react";
import { Header, Introduction } from "../components/layout";

function Home() {
  const [section, setSection] = useState(null);

  return (
    <div className="w-full bg-black">
      <div className="flex flex-col items-center">
        <Header setSection={setSection} section={section} />
        {/* <Introduction /> */}
      </div>
    </div>
  );
}

export default Home;
