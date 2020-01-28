import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import useWindowDimensions from './utils/hooks/useWindowDimensions';
import { ToastContext } from './lib/ToastContext';
import CartContainer from './components/pages/containers/CartContainer';
import HomeContainer from './components/pages/containers/HomeContainer';
import { TopNavbar } from './components/organismes/';
import { Container, Toast } from './components/molecules';
import './index.css';

const App = () => {
  const { isMobile } = useWindowDimensions();
  return (
    <Router>
      <TopNavbar />
      <ToastContext.Consumer>
        {value => value.message !== '' && <Toast {...value} />}
      </ToastContext.Consumer>
      <Container col="" margin={isMobile ? '160' : '140'}>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/cart" component={CartContainer} />
      </Container>
    </Router>
  );
};
export default App;
