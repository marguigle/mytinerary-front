import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import dotenv from "dotenv";

dotenv.config();
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="820051858064-7lpsa7m8gg8opmj0c9i9qhddm8rikv2b.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
