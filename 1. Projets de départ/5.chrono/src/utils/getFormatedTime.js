const getFormatedTime = (time) => {
  const minutes = Math.floor(time / 60);
  const secondes = time % 60;

  return `${minutes < 10 ? `0${minutes}` : minutes}:${secondes < 10 ? `0${secondes}` : secondes}`
}

export default getFormatedTime
