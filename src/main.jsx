import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Product from "./context/productsContext.jsx";
import { XitSavdoProvider } from "./context/XitSavdoContext.jsx";
import KarzinkaProvider from "./context/BasketContext.jsx";
import LikeProvider from "./context/LikeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Product>
      <XitSavdoProvider>
        <KarzinkaProvider>
          <LikeProvider>
            <App />
          </LikeProvider>
        </KarzinkaProvider>
      </XitSavdoProvider>
    </Product>
  </BrowserRouter>
);
