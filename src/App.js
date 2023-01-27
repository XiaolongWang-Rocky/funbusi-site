// import logo from './logo.svg';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRouter from './router';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppRouter></AppRouter>
      </HashRouter>
    </Provider>
  );
}

export default App;
