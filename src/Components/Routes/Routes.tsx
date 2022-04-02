import { Route, Switch, Redirect } from "react-router";
import Detail from "../../Detail/Detail";
import Resume from "../../Home/components/Resume/Resume";
import Home from "../../Home/Home";
import useGoogleAnalytics from "../../Hooks/useGoogleAnalytics";

const Routes = () => {
  useGoogleAnalytics();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/detail/:id" component={Detail} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
