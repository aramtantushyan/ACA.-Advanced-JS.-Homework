function debounce (fn, delay) {
    let timeout;
    return function () {
        const fnCall = () => {fn.apply(this, arguments)};
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);        
    }
}

export {debounce};
