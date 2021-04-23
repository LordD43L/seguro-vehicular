import { Redirect, Route, Switch } from "react-router";
import Login from '../components/main/login/Login';
import ArmaPlan from './../components/main/arma-plan/ArmaPlan';
import Gracias from './../components/main/gracias/Gracias';


const Routes = () => {
    let appRoutes = (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/arma-plan' component={ArmaPlan} />
            <Route path='/gracias' component={Gracias} />
            <Redirect from='/' exact to='/login' />
        </Switch>
    );

    return appRoutes;
};

export default Routes;