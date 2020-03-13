import React from 'react';
import {
  render, cleanup, waitForDomChange,
} from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import ChampDetails from '../pages/ChampDetails';
import store from '../store';

const infoAatrox = {
  blurb: 'Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de...',
  id: 'Aatrox',
  lore: 'Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de encarceramento, Aatrox foi o primeiro a encontrar a liberdade novamente, e ele saiu corrompendo e transformando quem fosse tolo o suficiente de tentar tocar na arma mágica que continha sua essência. Agora, com um corpo roubado, ele vaga por Runeterra transfigurado, em uma versão bizarra da sua forma anterior, buscando uma vingança apocalíptica.',
  name: 'Aatrox',
  partype: 'Poço de Sangue',
  tags: ['Fighter', 'Tank'],
  title: 'a Espada Darkin',
};

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


describe('ChampsDetails tests', () => {
  test('Test Lines Details', async () => {
    const match = { params: { id: 'Aatrox' } };
    const details = { selected: infoAatrox, loading: false };
    const { queryByText } = renderWithRouter(
      <Provider store={store}>
        <ChampDetails match={match} details={details} />
      </Provider>, { route: '/Aatrox' },
    );
    const Loading = queryByText(/Carregando.../i);
    expect(Loading).not.toBeNull();
  });
});
