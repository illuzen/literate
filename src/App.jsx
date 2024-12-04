import React, { Component } from 'react';
import logo from './assets/yinyang.png';
import './css/App.css';
import {Link, HashRouter as Router, Route, Switch } from 'react-router-dom';
import GeometryMenu from './menus/geometryMenu.jsx'
import MusicMenu from './menus/musicMenu.jsx'
import EssayMenu from './menus/essayMenu.jsx'
import PoemMenu from './menus/poemMenu.jsx'
import { TabNavigation, Tab } from 'evergreen-ui';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      children: []
    };
  }
  components = [[], <EssayMenu />, <PoemMenu />, <GeometryMenu />, <MusicMenu />];

  render() {
    return (
          <div className="App">
            <Router>

                <div>

                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                    <TabNavigation>
                      {['Essays', 'Poetry', 'Geometry', 'Music'].map((tab, index) => (
                        <Tab key={tab} is="a" id={tab} href={'#' + tab}>
                          {tab}
                        </Tab>
                      ))}
                    </TabNavigation>
                  <Switch>
                    <Route component={EssayMenu} path={'/essays'} />
                    <Route component={PoemMenu} path={'/poetry'} />
                    <Route component={GeometryMenu} path={'/geometry'} />
                    <Route component={MusicMenu} path={'/music'} />
                  </Switch>
                </div>
            </Router>
          </div>
    )
  }
}

export default App;
