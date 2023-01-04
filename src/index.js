import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// const router = createBrowserRouter(routes);
const mainApp = <BrowserRouter>
  <App />
</BrowserRouter>;

const root = createRoot(document.getElementById("root"));
root.render(mainApp);
  