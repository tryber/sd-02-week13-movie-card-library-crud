import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render, cleanup, fireEvent, waitForDomChange,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../store';


afterEach(cleanup);

describe('Test ChampList', () => {
  test('Renders ChampList', async () => {
    const { queryByText, getByLabelText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const Loading = queryByText(/Carregando.../i);
    expect(Loading).not.toBeNull();
    await waitForDomChange()
      .then(() => {
        expect(queryByText(/Aatrox a Espada Darkin/i)).not.toBeNull();
        expect(queryByText(/Aatrox a Espada Darkin/i)).toBeInTheDocument();

        fireEvent.change(getByLabelText(/Pesquisar Por Nome/i), {
          target: {
            value: 'Akali',
          },
        });
        expect(queryByText(/a Assassina Renegada/)).not.toBeNull();
        expect(queryByText(/a Assassina Renegada/)).toBeInTheDocument();
        expect(queryByText(/Aatrox a Espada Darkin/i)).toBeNull();
        fireEvent.change(getByLabelText(/Pesquisar Por Nome/i), {
          target: {
            value: 'aaaaaaa',
          },
        });
        expect(queryByText(/Nenhum Resultado Encontrado/i)).toBeInTheDocument();
      });
  });
});
