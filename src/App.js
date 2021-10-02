import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';

function App () {

  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Router exact path="/singleFriend/:friendId">
            <FriendDetail></FriendDetail>
          </Router>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/friends">
            <Friends></Friends>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>
          <Router exact path="/about/culture">
            <Culture></Culture>
          </Router>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
