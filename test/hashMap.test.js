import { equal } from "assert";
import { deepEqual } from "assert";
import { HashMap } from "../src/hashSet";

describe("tests", () => {
  it("save to a bucket", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos");
    equal(
      hashMap.buckets[hashMap.hash("Carlos") % hashMap.buckets.length]["head"][
        "key"
      ],
      "Carlos"
    );
    hashMap.set("Carla");
    equal(
      hashMap.buckets[hashMap.hash("Carla") % hashMap.buckets.length]["head"][
        "key"
      ],
      "Carla"
    );
  });
  it("grow bucket List size", () => {
    const hashMap = new HashMap();
    hashMap.loadFactor = 0.1;
    hashMap.set("ZZZ");
    equal(hashMap.buckets.length, 16);
    hashMap.set("AAA");
    equal(hashMap.buckets.length, 32);
  });
  it("has", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos");
    equal(hashMap.has("Carlos"), true);
    hashMap.set("Carla");
    equal(hashMap.has("Carla"), true);
    equal(hashMap.has("Carlos"), true);
    equal(hashMap.has("missingNo"), false);
  });
  it("remove", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos");
    hashMap.set("Carl");
    hashMap.set("Carls");
    equal(hashMap.remove("Carlos"), true);
    equal(hashMap.remove("Carla"), false);
  });
  it("length", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos");
    hashMap.set("Carl");
    hashMap.set("Carls");
    equal(hashMap.length, 3);
  });
  it("clear", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos");
    hashMap.set("Carl");
    hashMap.set("Carls");
    hashMap.clear();
    equal(hashMap.length, 0);
  });
  it("keys", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos");
    hashMap.set("Carl");
    hashMap.set("Carls");
    deepEqual(hashMap.keys().sort(), ["Carlos", "Carl", "Carls"].sort());
  });
});
