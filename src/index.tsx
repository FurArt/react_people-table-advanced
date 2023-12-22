import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Root } from './components/Root';
import { PeopleProvider } from './components/PeopleContext/PeopleContext';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <PeopleProvider>
      <Router>
        <Root />
      </Router>
    </PeopleProvider>,
  );