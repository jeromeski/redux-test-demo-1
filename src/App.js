// import "./styles.css";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePageOne from './pages/HomePageOne';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePageOne} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
