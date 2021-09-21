import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => {
          // console.log(props);
          return (
            <Switch>
              {page1Routes.map((route) => {
                // console.log(route);
                return (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                );
              })}
            </Switch>
          );
        }}
      ></Route>
      <Route
        path="/page2"
        render={({ match: { url } }) => {
          // console.log(props);
          return (
            <Switch>
              {page2Routes.map((route) => {
                // console.log(route);
                return (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                );
              })}
            </Switch>
          );
        }}
      ></Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
