const getRandomInt = () => {
  return new Promise((resolve) => {
    const rndInt = Math.trunc(Math.random() * 20 + 1);

    setTimeout(() => {
      resolve(rndInt);
    }, 2000);
  });
};

export default getRandomInt;
