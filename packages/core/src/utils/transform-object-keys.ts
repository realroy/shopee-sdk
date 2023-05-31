type TransformFunction<TKey, TResult> = (key: TKey) => TResult

export function transformObjectKeys<T extends object, TTransformedKey extends string>(obj: T, transformFunction: TransformFunction<T, TTransformedKey>) {
  type TObjKey = keyof T

  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
    return obj;
  }
  

  const result = {} as Record<TTransformedKey, T[TObjKey]>
  
  for (const [k, v] of Object.entries(obj)) {
    // @ts-ignore
    result[transformFunction(k)] = transformObjectKeys(v, transformFunction)
  }

  return result
}