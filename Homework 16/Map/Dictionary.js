class Dictionary {
    constructor () {
        this.myMap = new Map ();
    }
    
    getByKey (key) {
        if (!myMap.has(key)) {
            return undefined;
        } else if (this.myMap.get(key).length = 0) {
            return 'no value';
        } else if (this.myMap.get(key).length = 1) {
            return this.myMap.get(key)[0];
        } else {
            return this.myMap.get(key);
        }
    }

    add (key, value) {
        if(!myMap.has(key)) {
            myMap.set(key, [value]);
        }
        myMap.set(key, [...myMap.get(key), value]);
    }

    remove (key) {
        myMap.delete(key);
    }

    getCountByKey(key) {
        if (!myMap.has(key)) {
            return 0;
        }
            return myMap.get(key).length;
    }

    keys() {
        return myMap.keys();
    }

    values() {
        return myMap.values();
    }
}