import getRandomInt from '../../helpers/getRandomInt';

export const incrementByRandomInt = async (context) => {
  context.commit('setLoading');
  const randomInt = await getRandomInt();
  context.commit('incrementBy', randomInt);
  context.commit('setLoading');
};
