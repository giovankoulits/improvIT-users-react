import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UsersContextProvider from "./UsersContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersContextProvider>
    <App />
  </UsersContextProvider>
);
