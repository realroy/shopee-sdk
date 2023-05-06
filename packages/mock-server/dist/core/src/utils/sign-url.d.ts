import { ShopeeContext } from "../libs";
export type SignURLArgs = ShopeeContext["value"] & {
    path: string;
    params: Record<string, unknown>;
};
export declare function signURL(args: SignURLArgs): Promise<string>;
//# sourceMappingURL=sign-url.d.ts.map