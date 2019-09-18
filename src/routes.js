import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => 'Home';
const Search = () => 'Search';
const Login = () => 'Login';

const User = () => 'User';
const Decks = () => 'Decks';

const RouteContent = () => (
  <div>
    { /* Public */ }
    <Route exact path={'/'} component={Home} />
    <Route path={'/search'} component={Search} />
    <Route path={'/login'} component={Login} />
    { /* LoggedIn Area */ }
    <Route path={'/user'} component={User} />
    <Route path={'/decks'} component={Decks} />

    { /* Admin Area */ }
    <Route path="/admin" render={() => 'Admin Area'}/>
  </div>
);

export default RouteContent;