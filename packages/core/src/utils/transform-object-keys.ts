type TransformFunction<TKey, TResult> = (key: TKey) => TResult;

export function transformObjectKeys<
  T extends object,
  TTransformedKey extends string
>(
  obj: T,
  transformFunction: TransformFunction<T, TTransformedKey>
): Record<TTransformedKey, T[keyof T]> {
  type TObjKey = keyof T;

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    const result = obj.map((_, i) =>
      transformObjectKeys(obj[i], transformFunction)
    );

    return result as unknown as Record<TTransformedKey, T[TObjKey]>;
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
