import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from './pages/Game';
import HighScores from './pages/HighScores';
import GameOver from './pages/GameOver';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Container } from './styled/Conatiner';
import { Main } from './styled/Main';
import Global from './styled/Global';

function App() {
  return (
    <Router>
      <Global />
      <Main>
        <Container>
          <Navbar>
            <Switch>
              <Route path='/game' component={Game} />
              <Route path='/highScores' component={HighScores} />
              <Route path='/gameOver' component={GameOver} />
              <Route path='/' component={Home} />
            </Switch>
          </Navbar>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
