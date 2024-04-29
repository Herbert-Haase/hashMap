import { equal } from "assert";
import { HashMap } from "../src/index.js";

describe("tests", () => {
  it("save to a bucket", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos", "I am the old value.");
    equal(
      hashMap.buckets[hashMap.hash("Carlos") % hashMap.buckets.length]["head"][
        "value"
      ],
      "I am the old value."
    );
    hashMap.set("Carlos", "I am the new value.");
    equal(
      hashMap.buckets[hashMap.hash("Carlos") % hashMap.buckets.length]["head"][
        "value"
      ],
      "I am the new value."
    );
  });
  it("grow bucket List size", () => {
    const hashMap = new HashMap();
    hashMap.loadFactor = 0.1;
    hashMap.set("ZZZ", "valueZZZ");
    equal(hashMap.buckets.length, 16);
    hashMap.set("AAA", "valueAAA");
    equal(hashMap.buckets.length, 32);
  });
  it("get", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos", "valueCarlos");
    equal(hashMap.get("Carlos"), "valueCarlos");
    hashMap.set("Carla", "valueCarla");
    equal(hashMap.get("Carla"), "valueCarla");
    equal(hashMap.get("Carlos"), "valueCarlos");
    equal(hashMap.get("missingNo"), null);
  });
  it("has", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos", "valueCarlos");
    equal(hashMap.has("Carlos"), true);
    hashMap.set("Carla", "valueCarla");
    equal(hashMap.has("Carla"), true);
    equal(hashMap.has("Carlos"), true);
    equal(hashMap.has("missingNo"), false);
  });
});
