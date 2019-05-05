function throttle(callback, timeout) {
  let timer, last = 0

  return function() {
    const now = +new Date();
    const remaining = timeout - (now - last);
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      last = now
      callback()
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        timer = null
        callback()
      }, remaining)
    }
  }
}

function scrollTop(el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000/60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step)
}

export { throttle, scrollTop }