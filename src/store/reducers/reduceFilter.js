const DEFAULTPARAM = {
  nameInput: '',
};

const filter = (state = DEFAULTPARAM, action) => {
  switch (action.type) {
    case 'FILTER': {
      return { nameInput: action.value };
    }
    default: return state;
  }
};

export default filter;
