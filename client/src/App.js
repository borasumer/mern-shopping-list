import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavbar";
import ShoppingList from "./components/Shoppinglist";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
