import { interval, log, debounce, throttle } from '.';
import { doubleBind } from '../angular';

export const testInterval = () => {
  const appDiv = document.getElementById('app');
  const dataBind = doubleBind({}, appDiv);
  function submit(data) {
    const now = new Date();
    const dataWithTime = {
      ...data,
      submitTime: `${now.toLocaleTimeString()} ${now.getMilliseconds()}`,
    };
    dataBind.text = JSON.stringify(dataWithTime);
    return dataWithTime;
  }
  const intervalSubmit = interval(submit, 5);
  intervalSubmit();
};

export const testLog = () => {
  function submit(data) {
    const now = new Date();
    const dataWithTime = {
      ...data,
      submitTime: `${now.toLocaleTimeString()} ${now.getMilliseconds()}`,
    };
    return dataWithTime;
  }

  const logSubmit = log(submit);
  logSubmit();
};

export const testThrottle = () => {
  const appDiv = document.getElementById('app');
  const dataBind = doubleBind({}, appDiv);

  function submit(data) {
    const now = new Date();
    const dataWithTime = {
      ...data,
      submitTime: `${now.toLocaleTimeString()} ${now.getMilliseconds()}`,
    };
    dataBind.text = JSON.stringify(dataWithTime);
    return dataWithTime;
  }

  const logSubmit = log(submit);
  const throttleLogSubmit = throttle(logSubmit);

  const intervalSubmit = interval(throttleLogSubmit, 10, 500);
  intervalSubmit({ name: 'submit test' });
};

export const testDebounce = () => {
  const appDiv = document.getElementById('app');
  const dataBind = doubleBind({}, appDiv);

  function submit(data) {
    const now = new Date();
    const dataWithTime = {
      ...data,
      submitTime: `${now.toLocaleTimeString()} ${now.getMilliseconds()}`,
    };
    console.log(this);

    dataBind.text = JSON.stringify(dataWithTime);
    return dataWithTime;
  }

  const logSubmit = log(submit);
  const debounceLogSubmit = debounce(logSubmit);

  const intervalSubmit = interval(debounceLogSubmit, 10, 500);

  intervalSubmit({ name: 'submit test' });
};
