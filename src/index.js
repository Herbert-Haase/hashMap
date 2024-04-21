import "./styles/reset.css";
import "./styles/style.css";

class HashMap {
  constructor() {
    this.buckets = new Array(16);
    this.capacity = 0;
    this.loadFactor = 0.75;
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
    const index = hash(key) % this.buckets.length;

    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.buckets[index] === undefined) {
      this.capacity++;
    }
    const node = { key: value };
    this.buckets[index] = node;
  }
  get(key) {}
  has(key) {}
}
