import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuBar from './view/MenuBar';
import { Dashboard, Login, Register, Welcome } from './pages/index';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <MenuBar />
      <Route exact path='/' component={Welcome} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Container>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Container>
    </Router>
  );
}

export default App;
