
import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import InscriptionForm from './InscriptionForm';
import ListeInscriptions from './ListeInscriptions';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/inscription">Inscription</Link>
            </li>
            <li>
              <Link to="/liste">Liste d'Inscriptions</Link>
            </li>
          </ul>
        </nav>
   
          <Route path="/inscription">
            <InscriptionForm />
          </Route>
          <Route path="/liste">
            <ListeInscriptions />
          </Route>
      </div>
    </Router>
  );
};

export default App;
