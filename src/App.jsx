
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import EcommerceRoutes from "./routes/EcommerceRoutes";







function App() {


  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <EcommerceRoutes/>
      
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
