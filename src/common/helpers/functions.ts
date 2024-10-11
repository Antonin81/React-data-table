export function testOrderString(
  a: Record<string, string>,
  b: Record<string, string>,
  key: string
) {
  return a[key].localeCompare(b[key]);
}

export function testOrderNumber(
  a: Record<string, number>,
  b: Record<string, number>,
  key: string
) {
  if (a[key] < b[key]) {
    return -1;
  } else if (a[key] === b[key]) {
    return 0;
  } else {
    return 1;
  }
}

export function testOrderBoolean(
  a: Record<string, boolean>,
  b: Record<string, boolean>,
  key: string
) {
  if (a[key] === b[key]) {
    return 0;
  } else if (a[key] && !b[key]) {
    return -1;
  } else {
    return 1;
  }
}

export function testDataOrder(
  a: Record<string, any>,
  b: Record<string, any>,
  key: string
) {
  switch (typeof a[key]) {
    case "string":
      return testOrderString(a, b, key);
    case "number":
      return testOrderNumber(a, b, key);
    case "boolean":
      return testOrderBoolean(a, b, key);
    default:
      return 0;
  }
}
