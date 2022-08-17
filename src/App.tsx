import React from 'react';
import './App.css';
import {CustomTabs} from "./Components/Tabs";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HtmlMain} from "./Components/HTML";
import { HomeTask } from './Components/HTML/HomeTask';
import {Main} from "./Components/Main";
import {CssHomeTask} from "./Components/CSS/CssHomeTask";
import {CssMain} from "./Components/CSS";
import {FrameworkMain} from "./Components/Frameworks";
import {FrameworkHomeTask} from "./Components/Frameworks/FrameworkHomeTask";
import {JqueryMain} from "./Components/Jquery";
import {JqueryHomeTask} from "./Components/Jquery/JqueryHomeTask";

function App() {
  return (
      <Router>
          <div className="appStyle">
            <CustomTabs/>

            <Switch>
              <Route exact path="/main">
                <Main/>
              </Route>
              <Route exact path="/html">
                <HtmlMain/>
              </Route>
              <Route exact path="/html/:id">
                <HomeTask/>
              </Route>
              <Route exact path="/css">
                <CssMain/>
              </Route>
              <Route exact path="/css/:id">
                <CssHomeTask/>
              </Route>
              <Route exact path="/frameworks">
                <FrameworkMain/>
              </Route>
              <Route exact path="/frameworks/:id">
                <FrameworkHomeTask/>
              </Route>
              <Route exact path="/jquery">
                <JqueryMain/>
              </Route>
              <Route exact path="/jquery/:id">
                <JqueryHomeTask/>
              </Route>
            </Switch>
          </div>
      </Router>

  );
}

export default App;
