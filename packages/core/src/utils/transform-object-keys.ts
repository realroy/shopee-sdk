type TransformFunction<TKey, TResult> = (key: TKey) => TResult;

// @ts-ignore
export function transformObjectKeys<
  T extends object,
  TTransformedKey extends string
>(obj: T, transformFunction: TransformFunction<T, TTransformedKey>) {
  type TObjKey = keyof T;

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const result = [];
    for (const k of obj) {
      if (k === undefined) {
        continue;
      }

      // @ts-ignore
      const transformed = transformObjectKeys(k, transformFunction);

      result.push(transformed);
    }

    return result;
  }

  const result = {} as Record<TTransformedKey, T[TObjKey]>;

  for (const [k, v] of Object.entries(obj)) {
    if (k === undefined) {
      continue;
    }

    // @ts-ignore
    result[transformFunction(k)] = transformObjectKeys(v, transformFunction);
  }

  return result;
}
