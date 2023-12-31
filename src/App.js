/* ---------------------------- React Router Dom ---------------------------- */
import { Route, Routes } from "react-router-dom";

/* ---------------------------------- Page ---------------------------------- */
import Home from "./pages/Home";

/* -------------------------------- Component ------------------------------- */
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
