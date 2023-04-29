import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import AllEntries from "./AllEntries";
import Login from "./Login";
import NewEntry from "./NewEntry";
import { checkLogin } from "./redux-stuff/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Authlink from "./Authlink";
import { PrivateRoute } from "./PrivateRoute";
import Profile from "./Profile";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, []);
  return (
    <div className="bg-[#8d9ba0]">
      <div className="w-full max-w-3xl px-6 mx-auto">
        {/* Linkler */}
        <nav className="flex gap-11 py-4 justify-center">
          <NavLink to="/" exact activeClassName="text-blue-700">
            AnaSayfa
          </NavLink>
          <NavLink to="/profil" activeClassName="text-blue-700">
            Profilim
          </NavLink>
          <Authlink />
        </nav>
        {/* Bölümler */}
        <main>
          <Switch>
            <Route exact path="/">
              <h1 className="text-center text-stone-500 font-suslu text-3xl py-4">
                Dwitter / Anasayfa
              </h1>
              <NewEntry />
              <AllEntries />
            </Route>
            <Route exact path="/login">
              <h1 className="text-center text-stone-500 font-suslu text-3xl py-16">
                Dwitter' a / Giriş Yap
              </h1>
              <Login />
            </Route>
            <PrivateRoute exact path="/profil" component={Profile} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
