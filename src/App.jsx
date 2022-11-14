import React from "react";
import { Artwork, Footer, Header, Hero } from "./components";

const App = () => {
  return (
    <div className="min-h-screen ">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artwork />
      <Footer />
    </div>
  );
};

export default App;
