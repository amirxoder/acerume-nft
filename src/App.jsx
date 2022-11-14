import React from "react";
import { Alert, Artwork, Footer, Header, Hero, Loading } from "./components";

const App = () => {
  return (
    <div className="min-h-screen ">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artwork />
      <Footer />
      <Alert />
      <Loading />
    </div>
  );
};

export default App;
