export function deepAssign(
  obj1: { [key: string]: any },
  obj2: { [key: string]: any }
) {
  const res: { [key: string]: any } = {};

  for (const k in obj1) {
    res[k] = obj1[k];
  }
  for (const k in obj2) {
    if (typeof obj2[k] === "object") {
      res[k] = deepAssign(res[k] || {}, obj2[k]);
    } else {
      res[k] = obj2[k];
    }
  }

  return res;
}
