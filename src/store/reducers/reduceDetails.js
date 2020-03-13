const DEFAULT = {
  selected: {},
  loading: true,
};

const detail = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'DETAILS':
      return {
        selected: action.champ,
        loading: false,
      };
    default: return state;
  }
};
export default detail;
