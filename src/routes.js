import App from "./App";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

export default [
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/contact',
    element: <Contact />
  },
  {
    path:'/about',
    element: <About />
  }
];
