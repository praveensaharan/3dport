import { BrowserRouter } from "react-router-dom";

import { Contact, Hero, Navbar, Tech, Footer, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
