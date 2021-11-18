const usePaginated = (array, num) => {
  const times = array.length / num;
  const newArr = [];
  for (let i = 0; i < times; i++) {
    newArr.push(array.splice(0, num));
  }
  return newArr;
};

export default usePaginated;
