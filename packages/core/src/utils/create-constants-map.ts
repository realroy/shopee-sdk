export function createConstantsMap<
  T extends readonly string[]
>(constants: T) {
  return constants.reduce((prev, value) => {
    prev[value as T[number]] = value;

    return prev;
  }, {} as Record<T[number], T[number]>);
}
