export const initialState = {
  contacts: [],
  filters: '',
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case 'ADD': {
      return {
        ...state,
        // та новий масив задач
        contacts: [
          // в якому є всі існуючі завдання
          ...state.contacts,
          action.payload,
        ],
      };
    }
    case 'DELETE': {
      return {
        ...state,
        // та новий масив задач
        contacts: [
          // в якому є всі існуючі завдання
          ...state.contacts.filter(el => el.id !== action.payload.id),
        ],
      };
    }
    case 'FILTER': {
      return {
        ...state,
        // та новий масив задач
        filters: action.payload.value,
      };
    }
    case 'setFromLS': {
      return {
        ...state,
        // та новий масив задач
        contacts: [
          // в якому є всі існуючі завдання
          ...state.contacts,
          ...action.payload,
        ],
      };
    }
    default:
      return state;
  }
};
