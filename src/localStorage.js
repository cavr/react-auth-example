export const loadState = () => {
  try {
    const serializedData = localStorage.getItem("state");
    if (!serializedData) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializeData = JSON.stringify(state);
    localStorage.setItem('state', serializeData);
  } catch (error) {}
};
