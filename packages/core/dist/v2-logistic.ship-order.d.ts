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
        request_id: z.ZodString;
        error: z.ZodString;
        message: z.ZodString;
        response: z.ZodObject<{
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
                branch_list: z.ZodArray<z.ZodObject<{
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
                    slug_name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    slug: string;
                    slug_name: string;
                }, {
                    slug: string;
                    slug_name: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                slugList: {
                    slug: string;
                    slug_name: string;
                }[];
                branch_list: {
                    branch_id: number;
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                }[];
            }, {
                slugList: {
                    slug: string;
                    slug_name: string;
                }[];
                branch_list: {
                    branch_id: number;
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                }[];
            }>;
            pickup: z.ZodObject<{
                address_list: z.ZodArray<z.ZodObject<{
                    address_id: z.ZodNumber;
                    region: z.ZodString;
                    state: z.ZodString;
                    city: z.ZodString;
                    district: z.ZodString;
                    town: z.ZodString;
                    address: z.ZodString;
                    zipcode: z.ZodString;
                    address_flag: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }, {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }>, "many">;
                time_slot_list: z.ZodArray<z.ZodObject<{
                    date: z.ZodNumber;
                    time_text: z.ZodString;
                    pickup_time_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }, {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                address_list: {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }[];
                time_slot_list: {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }[];
            }, {
                address_list: {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }[];
                time_slot_list: {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }[];
            }>;
        }, "strip", z.ZodTypeAny, {
            infoNeeded: {
                dropoff: string[];
                pickup: string[];
                nonIntegrated: string[];
            };
            dropoff: {
                slugList: {
                    slug: string;
                    slug_name: string;
                }[];
                branch_list: {
                    branch_id: number;
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                }[];
            };
            pickup: {
                address_list: {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }[];
                time_slot_list: {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }[];
            };
        }, {
            infoNeeded: {
                dropoff: string[];
                pickup: string[];
                nonIntegrated: string[];
            };
            dropoff: {
                slugList: {
                    slug: string;
                    slug_name: string;
                }[];
                branch_list: {
                    branch_id: number;
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                }[];
            };
            pickup: {
                address_list: {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }[];
                time_slot_list: {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }[];
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        response: {
            infoNeeded: {
                dropoff: string[];
                pickup: string[];
                nonIntegrated: string[];
            };
            dropoff: {
                slugList: {
                    slug: string;
                    slug_name: string;
                }[];
                branch_list: {
                    branch_id: number;
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                }[];
            };
            pickup: {
                address_list: {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }[];
                time_slot_list: {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }[];
            };
        };
        error: string;
        request_id: string;
    }, {
        message: string;
        response: {
            infoNeeded: {
                dropoff: string[];
                pickup: string[];
                nonIntegrated: string[];
            };
            dropoff: {
                slugList: {
                    slug: string;
                    slug_name: string;
                }[];
                branch_list: {
                    branch_id: number;
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                }[];
            };
            pickup: {
                address_list: {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }[];
                time_slot_list: {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }[];
            };
        };
        error: string;
        request_id: string;
    }>>;
    request_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    request_id: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        message: string;
        response: {
            infoNeeded: {
                dropoff: string[];
                pickup: string[];
                nonIntegrated: string[];
            };
            dropoff: {
                slugList: {
                    slug: string;
                    slug_name: string;
                }[];
                branch_list: {
                    branch_id: number;
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                }[];
            };
            pickup: {
                address_list: {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }[];
                time_slot_list: {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }[];
            };
        };
        error: string;
        request_id: string;
    } | undefined;
}, {
    request_id: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        message: string;
        response: {
            infoNeeded: {
                dropoff: string[];
                pickup: string[];
                nonIntegrated: string[];
            };
            dropoff: {
                slugList: {
                    slug: string;
                    slug_name: string;
                }[];
                branch_list: {
                    branch_id: number;
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                }[];
            };
            pickup: {
                address_list: {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }[];
                time_slot_list: {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }[];
            };
        };
        error: string;
        request_id: string;
    } | undefined;
}>;
export declare const getShippingParameter: (requestParameters: {
    orderSn: string;
    packageNumber?: number | undefined;
}) => Promise<{
    request_id: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        message: string;
        response: {
            infoNeeded: {
                dropoff: string[];
                pickup: string[];
                nonIntegrated: string[];
            };
            dropoff: {
                slugList: {
                    slug: string;
                    slug_name: string;
                }[];
                branch_list: {
                    branch_id: number;
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                }[];
            };
            pickup: {
                address_list: {
                    region: string;
                    state: string;
                    city: string;
                    address: string;
                    zipcode: string;
                    district: string;
                    town: string;
                    address_id: number;
                    address_flag: string[];
                }[];
                time_slot_list: {
                    date: number;
                    time_text: string;
                    pickup_time_id: string;
                }[];
            };
        };
        error: string;
        request_id: string;
    } | undefined;
}>;
//# sourceMappingURL=v2-logistic.ship-order.d.ts.map