import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ component: Component, ...rest }) {
  const user = useSelector((depo) => depo.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
