const getChamp = () => (
  fetch('http://ddragon.leagueoflegends.com/cdn/10.5.1/data/pt_BR/champion.json')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
export default getChamp;
