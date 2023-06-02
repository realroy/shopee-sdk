import { z } from "zod";
export declare const logisticGetShippingParameterRequestParameterSchema: z.ZodObject<{
    orderSn: z.ZodString;
    packageNumber: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    orderSn: string;
    packageNumber?: number | undefined;
}, {
    orderSn: string;
    packageNumber?: number | undefined;
}>;
export declare const logisticGetShippingParameterResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodObject<{
        infoNeeded: z.ZodObject<{
            dropoff: z.ZodArray<z.ZodString, "many">;
            pickup: z.ZodArray<z.ZodString, "many">;
            nonIntegrated: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            dropoff: string[];
            pickup: string[];
            nonIntegrated: string[];
        }, {
            dropoff: string[];
            pickup: string[];
            nonIntegrated: string[];
        }>;
        dropoff: z.ZodObject<{
            branchList: z.ZodArray<z.ZodObject<{
                branch_id: z.ZodNumber;
                region: z.ZodString;
                state: z.ZodString;
                city: z.ZodString;
                address: z.ZodString;
                zipcode: z.ZodString;
                district: z.ZodString;
                town: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }, {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }>, "many">;
            slugList: z.ZodArray<z.ZodObject<{
                slug: z.ZodString;
                slugName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                slug: string;
                slugName: string;
            }, {
                slug: string;
                slugName: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            branchList: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[];
            slugList: {
                slug: string;
                slugName: string;
            }[];
        }, {
            branchList: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[];
            slugList: {
                slug: string;
                slugName: string;
            }[];
        }>;
        pickup: z.ZodObject<{
            addressList: z.ZodArray<z.ZodObject<{
                addressId: z.ZodNumber;
                region: z.ZodString;
                state: z.ZodString;
                city: z.ZodString;
                district: z.ZodString;
                town: z.ZodString;
                address: z.ZodString;
                zipcode: z.ZodString;
                addressFlag: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
                addressId: number;
                addressFlag: string[];
            }, {
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
                addressId: number;
                addressFlag: string[];
            }>, "many">;
            timeSlotList: z.ZodArray<z.ZodObject<{
                date: z.ZodNumber;
                timeText: z.ZodString;
                pickupTimeId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                date: number;
                timeText: string;
                pickupTimeId: string;
            }, {
                date: number;
                timeText: string;
                pickupTimeId: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            addressList: {
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
                addressId: number;
                addressFlag: string[];
            }[];
            timeSlotList: {
                date: number;
                timeText: string;
                pickupTimeId: string;
            }[];
        }, {
            addressList: {
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
                addressId: number;
                addressFlag: string[];
            }[];
            timeSlotList: {
                date: number;
                timeText: string;
                pickupTimeId: string;
            }[];
        }>;
    }, "strip", z.ZodTypeAny, {
        infoNeeded: {
            dropoff: string[];
            pickup: string[];
            nonIntegrated: string[];
        };
        dropoff: {
            branchList: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[];
            slugList: {
                slug: string;
                slugName: string;
            }[];
        };
        pickup: {
            addressList: {
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
                addressId: number;
                addressFlag: string[];
            }[];
            timeSlotList: {
                date: number;
                timeText: string;
                pickupTimeId: string;
            }[];
        };
    }, {
        infoNeeded: {
            dropoff: string[];
            pickup: string[];
            nonIntegrated: string[];
        };
        dropoff: {
            branchList: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[];
            slugList: {
                slug: string;
                slugName: string;
            }[];
        };
        pickup: {
            addressList: {
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
                addressId: number;
                addressFlag: string[];
            }[];
            timeSlotList: {
                date: number;
                timeText: string;
                pickupTimeId: string;
            }[];
        };
    }>>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        infoNeeded: {
            dropoff: string[];
            pickup: string[];
            nonIntegrated: string[];
        };
        dropoff: {
            branchList: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[];
            slugList: {
                slug: string;
                slugName: string;
            }[];
        };
        pickup: {
            addressList: {
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
                addressId: number;
                addressFlag: string[];
            }[];
            timeSlotList: {
                date: number;
                timeText: string;
                pickupTimeId: string;
            }[];
        };
    } | undefined;
}, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        infoNeeded: {
            dropoff: string[];
            pickup: string[];
            nonIntegrated: string[];
        };
        dropoff: {
            branchList: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[];
            slugList: {
                slug: string;
                slugName: string;
            }[];
        };
        pickup: {
            addressList: {
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
                addressId: number;
                addressFlag: string[];
            }[];
            timeSlotList: {
                date: number;
                timeText: string;
                pickupTimeId: string;
            }[];
        };
    } | undefined;
}>;
export declare const getShippingParameter: (requestParameters: {
    orderSn: string;
    packageNumber?: number | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        infoNeeded: {
            dropoff: string[];
            pickup: string[];
            nonIntegrated: string[];
        };
        dropoff: {
            branchList: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[];
            slugList: {
                slug: string;
                slugName: string;
            }[];
        };
        pickup: {
            addressList: {
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
                addressId: number;
                addressFlag: string[];
            }[];
            timeSlotList: {
                date: number;
                timeText: string;
                pickupTimeId: string;
            }[];
        };
    } | undefined;
}>;
//# sourceMappingURL=v2-logistic.get-shipping-parameter.d.ts.map