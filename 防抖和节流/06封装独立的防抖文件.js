function debounce(fn, delay, immediate = false, resultCallback) {
    let timer = null;
    let isInvoke = false;
    const _debounce = function (...args) {
        return new Promise((resolve, reject) => {
            try {
                if (timer)
                    clearTimeout(timer);
                let res = undefined;
                if (immediate && !isInvoke) {
                    res = fn.apply(this, args);
                    if (resultCallback)
                        resultCallback(res);
                    resolve(res);
                    isInvoke = true;
                    return;
                }
                timer = setTimeout(() => {
                    res = fn.apply(this, args)
                    if (resultCallback)
                        resultCallback(res);
                    resolve
                    timer = null;
                    isInvoke = false

                }, delay);
            } catch (error) {
                reject(error);
            }
        })
    }
    _debounce.cancel = function () {
        if (timer) clearTimeout(timer);
        isInvoke = false;
        timer = null;
    }
    return _debounce;

}