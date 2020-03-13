import React from 'react';
import {
  render, cleanup,
} from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import store from '../store';
import NotFound from '../pages/NotFound';


afterEach(cleanup);

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe('Test Not Found', () => {
  test('testNotFound', async () => {
    const { queryByText } = renderWithRouter(
      <Provider store={store}>
        <NotFound />
      </Provider>, { route: '/xablau' },
    );
    expect(queryByText(/Página não encontrada/i)).not.toBeNull();
    expect(queryByText(/Página não encontrada/i)).toBeInTheDocument();
  });
});
