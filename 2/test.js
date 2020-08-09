let i = 0;
const setLog = () => {
    console.log(i);
    i++;
};
const interval = setInterval(setLog, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5500);