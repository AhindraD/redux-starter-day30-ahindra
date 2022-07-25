import { Provider } from "react-redux";
import Login from "./components/Login";
import Profile from "./components/Profile";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="app">
          <Profile />
          <Login />
        </div>
      </div>
    </Provider>
  );
}

export default App;
