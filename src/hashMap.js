// import "./styles/reset.css";
// import "./styles/style.css";
import { LinkedList } from "./linkedList.js";

class HashMap {
  constructor() {
    this.buckets = new Array(16);
    this.capacity = 0;
    this.loadFactor = 0.75;
  }
  grow() {
    if (this.capacity / this.buckets.length >= this.loadFactor) {
      this.buckets = this.buckets.concat(new Array(this.buckets.length));
    }
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  set(key, value) {
    const index = this.hash(key) % this.buckets.length;

    // anticheat
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    // if there is nothing, create a new LinkedList and new Node
    if (this.buckets[index] === undefined) {
      // check if time to grow array
      this.capacity++;
      this.grow();
      this.buckets[index] = new LinkedList(key, value);
      // if there is a key, replace value
    } else if (this.buckets[index].contains(key)) {
      this.buckets[index].insertAt(key, value, this.buckets[index].find(key));
      // if there is no key, create new node
    } else {
      this.buckets[index].append(key, value);
    }
  }
  get(key) {
    const index = this.hash(key) % this.buckets.length;

    try {
      const findIndex = this.buckets[index].find(key);
      return this.buckets[index].at(findIndex).value;
    } catch (err) {
      return null;
    }
  }
  has(key) {
    return this.get(key) === null ? false : true;
  }
  remove(key) {
    const entryPresent = this.has(key);

    const index = this.hash(key) % this.buckets.length;

    try {
      const findIndex = this.buckets[index].find(key);
      this.buckets[index].removeAt(findIndex);
    } catch (err) {
    } finally {
      return entryPresent;
    }
  }
  get length() {
    return this.capacity;
  }
  clear() {
    this.buckets = new Array(this.buckets.length);
    this.capacity = 0;
  }
  keys() {
    const arrayOfKeys = [];
    for (let bucket of this.buckets) {
      if (bucket !== undefined) {
        let currentNode = bucket.head;
        for (let i = 0; i < bucket.size(); i++) {
          arrayOfKeys.push(currentNode.key);
          currentNode = currentNode.next;
        }
      } else {
      }
    }
    return arrayOfKeys;
  }
  values() {
    const arrayOfValues = [];
    for (let bucket of this.buckets) {
      if (bucket !== undefined) {
        let currentNode = bucket.head;
        for (let i = 0; i < bucket.size(); i++) {
          arrayOfValues.push(currentNode.value);
          currentNode = currentNode.next;
        }
      } else {
      }
    }
    return arrayOfValues;
  }
  entries() {
    const arrayOfEntries = [];
    for (let bucket of this.buckets) {
      if (bucket !== undefined) {
        let currentNode = bucket.head;
        for (let i = 0; i < bucket.size(); i++) {
          arrayOfEntries.push([currentNode.key, currentNode.value]);
          currentNode = currentNode.next;
        }
      } else {
      }
    }
    return arrayOfEntries;
  }
}

export { HashMap };
