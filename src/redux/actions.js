export const addContact = (name, number) => {
  return {
    type: 'ADD',
    payload: {
      id: Date.now(),
      name: name,
      number: number,
    },
  };
};
export const deleteContact = id => {
  return {
    type: 'DELETE',
    payload: {
      id: id,
    },
  };
};
export const setFilter = value => {
  return {
    type: 'FILTER',
    payload: {
      value: value,
    },
  };
};
export const setfromLS = arr => {
  return {
    type: 'setFromLS',
    payload: arr,
  };
};
