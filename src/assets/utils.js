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

export { throttle }