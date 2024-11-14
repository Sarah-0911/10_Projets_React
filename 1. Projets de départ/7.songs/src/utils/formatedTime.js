const formatedTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = `${time % 60 < 10 ? "0" : ""}${Math.floor(time % 60)}`;
  return `${minutes}:${seconds}`;
}

export default formatedTime;
