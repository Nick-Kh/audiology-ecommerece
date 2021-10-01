import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import React from "react";
import { Container } from 'react-bootstrap';
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ProductPage from "./pages/product-page/ProductPage";

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path="/" component={Homepage} exact />
          <Route path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
