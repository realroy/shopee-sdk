type TransformFunction<TKey, TResult> = (key: TKey) => TResult;
export declare function transformObjectKeys<T extends object, TTransformedKey extends string>(obj: T, transformFunction: TransformFunction<T, TTransformedKey>): Record<TTransformedKey, T[keyof T]>;
export {};
//# sourceMappingURL=transform-object-keys.d.ts.map