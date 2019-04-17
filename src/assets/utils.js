function throttle(callback, timeout) {
  let timer, last

  return function() {
    const now = +new Date();
    const timePasted = Boolean(last) && now > last + timeout
    if (timePasted) {
      callback()
      last = now
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        callback()
      }, timeout)
    }
  }
}

export { throttle }