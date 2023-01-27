// import logo from './logo.svg';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
