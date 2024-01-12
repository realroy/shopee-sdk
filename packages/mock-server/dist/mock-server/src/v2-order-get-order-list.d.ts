import { GetOrderListResponse } from "@shopee-sdk/core";
export declare function createGetOrderListResponse(args?: Partial<GetOrderListResponse>): {
    error: string | undefined;
    message: string | undefined;
    response: {
        more: boolean;
        nextCursor: string;
        orderList: {
            orderSn: string;
        }[];
    };
    requestId: string;
};
export declare const getOrderListMockHandler: import("msw").RestHandler<import("msw/lib/glossary-de6278a9").M<import("msw/lib/glossary-de6278a9").h>>;
//# sourceMappingURL=v2-order-get-order-list.d.ts.map