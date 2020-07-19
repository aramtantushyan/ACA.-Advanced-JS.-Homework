class Dictionary {
    constructor () {
        this.myMap = new Map ();
    }
    
    getByKey (key) {
        let currentKeyValue = this.myMap.get(key);
        if (!this.myMap.has(key)) {
            return undefined;
        } else if (currentKeyValue.length === 0) {
            return 'no value';
        } else {
            return {value: currentKeyValue,
                    remove (value) { 
                        this.value.splice(this.value.indexOf(value), 1);
                    }
            };
        }
    }


    add (key, value) {
        if(!this.myMap.has(key)) {
            this.myMap.set(key, [value]);
        } else {
            this.myMap.set(key, [...(this.myMap.get(key)), value]);
        }
        return this;
    }

    remove (key) {
        this.myMap.delete(key);
    }

    getCountByKey(key) {
        if (!this.myMap.has(key)) {
            return 0;
        }
            return this.myMap.get(key).length;
    }

    keys() {
        let keys = [];
        for (let key of this.myMap.keys()) {
            keys.push(key);
        }
        return keys;
    }

    values() {
        let values = [];
        for (let value of this.myMap.values()) {
            values.push(...value);
        }
        return values;
    }
}