class cache {
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage;
    }
    setCache(key, value) {
        if (!key || !value) {
            throw new Error('key or value is null');
        }
        if (value)
            this.storage.setItem(key, JSON.stringify(value));
    }
    getCache(key) {
        return localStorage.getItem(key);
    }
    removeCache(key) {
        localStorage.removeItem(key);
    }
    removeItemCache(key) {
        localStorage.removeItem(key);
    }
}