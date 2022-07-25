
import Login from "./components/Login";
import Profile from "./components/Profile";

import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { toggleTheme } from './slices/themeSlice';

function App() {
  let { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  return (
    <div className={"container " + theme}>
      <div className="app">
        <Profile />
        <Login />
        <button className='toggle-bttn' onClick={() => {
          dispatch(toggleTheme());
        }}> Theme : {theme}
        </button>
      </div>
    </div >
  );
}

export default App;
