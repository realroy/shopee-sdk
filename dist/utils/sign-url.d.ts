import { ShopeeContext } from "../libs";
export type SignUrlArgs = ShopeeContext["value"] & {
    path: string;
    params: Record<string, unknown>;
};
export declare function signUrl(args: SignUrlArgs): string;
