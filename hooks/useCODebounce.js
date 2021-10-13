export default function useCODebounce(clbk, delay) {
  let timer;

  const clearTimer = () => clearTimeout(timer);

  const setTimer = (...args) => {
    clearTimer();
    timer = setTimeout(() => clbk.call(null, ...args), delay);
  };

  return [clearTimer, setTimer];
}
