import { equal } from "assert";
import { HashMap } from "../src/index.js";

describe("tests", () => {
  it("save to a bucket", () => {
    const hashMap = new HashMap();
    hashMap.set("Carlos", "I am the old value.");
    equal(
      hashMap.buckets[hashMap.hash("Carlos") % hashMap.buckets.length][
        "Carlos"
      ],
      "I am the old value."
    );
    hashMap.set("Carlos", "I am the new value.");
    equal(
      hashMap.buckets[hashMap.hash("Carlos") % hashMap.buckets.length][
        "Carlos"
      ],
      "I am the new value."
    );
  });
});
