import { z } from "zod";
export declare const logisticGetShippingParameterRequestParameterSchema: z.ZodObject<{
    orderSn: z.ZodString;
    packageNumber: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    orderSn: string;
    packageNumber?: string | undefined;
}, {
    orderSn: string;
    packageNumber?: string | undefined;
}>;
export declare const logisticGetShippingParameterResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodObject<{
        infoNeeded: z.ZodObject<{
            dropoff: z.ZodArray<z.ZodString, "many">;
            pickup: z.ZodArray<z.ZodString, "many">;
            nonIntegrated: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
        }, "strip", z.ZodTypeAny, {
            dropoff: string[];
            pickup: string[];
            nonIntegrated?: string[] | null | undefined;
        }, {
            dropoff: string[];
            pickup: string[];
            nonIntegrated?: string[] | null | undefined;
        }>;
        dropoff: z.ZodObject<{
            branchList: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
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
            }>, "many">>>;
            slugList: z.ZodNullable<z.ZodArray<z.ZodObject<{
                slug: z.ZodString;
                slugName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                slug: string;
                slugName: string;
            }, {
                slug: string;
                slugName: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            slugList: {
                slug: string;
                slugName: string;
            }[] | null;
            branchList?: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[] | null | undefined;
        }, {
            slugList: {
                slug: string;
                slugName: string;
            }[] | null;
            branchList?: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[] | null | undefined;
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
                timeSlotList: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                }>, "many">>>;
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
                timeSlotList?: {
                    date: number;
                    timeText: string;
                    pickupTimeId: string;
                }[] | null | undefined;
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
                timeSlotList?: {
                    date: number;
                    timeText: string;
                    pickupTimeId: string;
                }[] | null | undefined;
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
                timeSlotList?: {
                    date: number;
                    timeText: string;
                    pickupTimeId: string;
                }[] | null | undefined;
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
                timeSlotList?: {
                    date: number;
                    timeText: string;
                    pickupTimeId: string;
                }[] | null | undefined;
            }[];
        }>;
    }, "strip", z.ZodTypeAny, {
        infoNeeded: {
            dropoff: string[];
            pickup: string[];
            nonIntegrated?: string[] | null | undefined;
        };
        dropoff: {
            slugList: {
                slug: string;
                slugName: string;
            }[] | null;
            branchList?: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[] | null | undefined;
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
                timeSlotList?: {
                    date: number;
                    timeText: string;
                    pickupTimeId: string;
                }[] | null | undefined;
            }[];
        };
    }, {
        infoNeeded: {
            dropoff: string[];
            pickup: string[];
            nonIntegrated?: string[] | null | undefined;
        };
        dropoff: {
            slugList: {
                slug: string;
                slugName: string;
            }[] | null;
            branchList?: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[] | null | undefined;
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
                timeSlotList?: {
                    date: number;
                    timeText: string;
                    pickupTimeId: string;
                }[] | null | undefined;
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
            nonIntegrated?: string[] | null | undefined;
        };
        dropoff: {
            slugList: {
                slug: string;
                slugName: string;
            }[] | null;
            branchList?: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[] | null | undefined;
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
                timeSlotList?: {
                    date: number;
                    timeText: string;
                    pickupTimeId: string;
                }[] | null | undefined;
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
            nonIntegrated?: string[] | null | undefined;
        };
        dropoff: {
            slugList: {
                slug: string;
                slugName: string;
            }[] | null;
            branchList?: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[] | null | undefined;
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
                timeSlotList?: {
                    date: number;
                    timeText: string;
                    pickupTimeId: string;
                }[] | null | undefined;
            }[];
        };
    } | undefined;
}>;
export declare const getShippingParameter: (requestParameters: {
    orderSn: string;
    packageNumber?: string | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        infoNeeded: {
            dropoff: string[];
            pickup: string[];
            nonIntegrated?: string[] | null | undefined;
        };
        dropoff: {
            slugList: {
                slug: string;
                slugName: string;
            }[] | null;
            branchList?: {
                branch_id: number;
                region: string;
                state: string;
                city: string;
                address: string;
                zipcode: string;
                district: string;
                town: string;
            }[] | null | undefined;
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
                timeSlotList?: {
                    date: number;
                    timeText: string;
                    pickupTimeId: string;
                }[] | null | undefined;
            }[];
        };
    } | undefined;
}>;
//# sourceMappingURL=v2-logistic-get-shipping-parameter.d.ts.map