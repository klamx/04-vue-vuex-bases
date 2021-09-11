export const increment = (state) => {
  state.count++;
  state.lastMutation = 'increment';
};

export const incrementBy = (state, val) => {
  state.count += val;
  state.lastMutation = 'incrementBy ' + val;
  state.lastRandomInt = val;
};

export const incrementRandom = (state) => {
  state.count += Math.trunc(Math.random() * 100);
};

export const setLoading = (state) => {
  state.isLoading = !state.isLoading;
  state.lastMutation = 'incrementBy ';
};
