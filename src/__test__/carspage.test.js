import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CarsPage from '../components/cars/CarsPage';
import store from '../redux/store';

it('To check test is working', () => {
  expect(true).toBe(true);
});

it('Test if header render correctly', () => {
  const TREE = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CarsPage />
      </BrowserRouter>
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
