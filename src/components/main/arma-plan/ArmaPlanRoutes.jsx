import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import DatosAuto from './datos-auto/DatosAuto';
import Coberturas from './coberturas/Coberturas';

const ArmaPlanRoutes = () => {
    let { path, url } = useRouteMatch();

    let appRoutes = (
        <Switch>
            <Route path={`${path}/datos-auto`} component={DatosAuto} />
            <Route path={`${path}/coberturas`} component={Coberturas} />
            <Redirect from={path} exact to={`${path}/datos-auto`} />
        </Switch>
    );

    return appRoutes;
};

export default ArmaPlanRoutes;