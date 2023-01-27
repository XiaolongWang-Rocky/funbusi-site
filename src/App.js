// import logo from './logo.svg';
import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import WOW from 'wowjs';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRouter from './router';
import Header from './components/Header';

function App() {
  useEffect(()=>{
    new WOW.WOW(
      {
        live: true
      }
    ).init();
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <HashRouter>
        <AppRouter></AppRouter>
      </HashRouter>
    </Provider>
  );
}

export default App;
