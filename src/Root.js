import { Switch, Route } from 'react-router-dom';
import useAuth from './app/Hooks/useAuth';
import PrivateRoute from './app/Routes/PrivateRoute';
import GuestRoute from './app/Routes/GuestRoute';
import DesktopView from './app/views/DesktopView';
import GuestView from './app/views/GuestView';

export default function Root() {
  return (
    <Switch>
      <GuestRoute path="/" exact render={(props) => <GuestView />} />
      <PrivateRoute path="/pulpit" exact render={(props) => <DesktopView />} />
    </Switch>
  );
}
