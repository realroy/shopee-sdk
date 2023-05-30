import { z } from "zod";
export declare const getModelListRequestParametersSchema: z.ZodObject<{
    item_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    item_id: string;
}, {
    item_id: string;
}>;
export declare const getModelListResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
    warning: z.ZodString;
    request_id: z.ZodString;
    response: z.ZodObject<{
        tier_variation: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            option_list: z.ZodArray<z.ZodObject<{
                option: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                option: string;
            }, {
                option: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            name: string;
            option_list: {
                option: string;
            }[];
        }, {
            name: string;
            option_list: {
                option: string;
            }[];
        }>, "many">;
        model: z.ZodArray<z.ZodObject<{
            model_id: z.ZodNumber;
            model_status: z.ZodString;
            promotion_id: z.ZodNumber;
            tier_index: z.ZodArray<z.ZodNumber, "many">;
            price_info: z.ZodArray<z.ZodObject<{
                current_price: z.ZodNumber;
                original_price: z.ZodNumber;
                inflated_price_of_current_price: z.ZodNumber;
                inflated_price_of_original_price: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                original_price: number;
                current_price: number;
                inflated_price_of_current_price: number;
                inflated_price_of_original_price: number;
            }, {
                original_price: number;
                current_price: number;
                inflated_price_of_current_price: number;
                inflated_price_of_original_price: number;
            }>, "many">;
            model_sku: z.ZodString;
            pre_order: z.ZodObject<{
                is_pre_order: z.ZodBoolean;
                days_to_ship: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                days_to_ship: number;
                is_pre_order: boolean;
            }, {
                days_to_ship: number;
                is_pre_order: boolean;
            }>;
            stock_info_v2: z.ZodObject<{
                summary_info: z.ZodObject<{
                    total_reserved_stock: z.ZodNumber;
                    total_available_stock: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    total_reserved_stock: number;
                    total_available_stock: number;
                }, {
                    total_reserved_stock: number;
                    total_available_stock: number;
                }>;
                seller_stock: z.ZodArray<z.ZodObject<{
                    location_id: z.ZodString;
                    stock: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    location_id: string;
                    stock: number;
                }, {
                    location_id: string;
                    stock: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock: {
                    location_id: string;
                    stock: number;
                }[];
            }, {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock: {
                    location_id: string;
                    stock: number;
                }[];
            }>;
        }, "strip", z.ZodTypeAny, {
            model_id: number;
            model_sku: string;
            promotion_id: number;
            price_info: {
                original_price: number;
                current_price: number;
                inflated_price_of_current_price: number;
                inflated_price_of_original_price: number;
            }[];
            stock_info_v2: {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock: {
                    location_id: string;
                    stock: number;
                }[];
            };
            pre_order: {
                days_to_ship: number;
                is_pre_order: boolean;
            };
            model_status: string;
            tier_index: number[];
        }, {
            model_id: number;
            model_sku: string;
            promotion_id: number;
            price_info: {
                original_price: number;
                current_price: number;
                inflated_price_of_current_price: number;
                inflated_price_of_original_price: number;
            }[];
            stock_info_v2: {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock: {
                    location_id: string;
                    stock: number;
                }[];
            };
            pre_order: {
                days_to_ship: number;
                is_pre_order: boolean;
            };
            model_status: string;
            tier_index: number[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        tier_variation: {
            name: string;
            option_list: {
                option: string;
            }[];
        }[];
        model: {
            model_id: number;
            model_sku: string;
            promotion_id: number;
            price_info: {
                original_price: number;
                current_price: number;
                inflated_price_of_current_price: number;
                inflated_price_of_original_price: number;
            }[];
            stock_info_v2: {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock: {
                    location_id: string;
                    stock: number;
                }[];
            };
            pre_order: {
                days_to_ship: number;
                is_pre_order: boolean;
            };
            model_status: string;
            tier_index: number[];
        }[];
    }, {
        tier_variation: {
            name: string;
            option_list: {
                option: string;
            }[];
        }[];
        model: {
            model_id: number;
            model_sku: string;
            promotion_id: number;
            price_info: {
                original_price: number;
                current_price: number;
                inflated_price_of_current_price: number;
                inflated_price_of_original_price: number;
            }[];
            stock_info_v2: {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock: {
                    location_id: string;
                    stock: number;
                }[];
            };
            pre_order: {
                days_to_ship: number;
                is_pre_order: boolean;
            };
            model_status: string;
            tier_index: number[];
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    response: {
        tier_variation: {
            name: string;
            option_list: {
                option: string;
            }[];
        }[];
        model: {
            model_id: number;
            model_sku: string;
            promotion_id: number;
            price_info: {
                original_price: number;
                current_price: number;
                inflated_price_of_current_price: number;
                inflated_price_of_original_price: number;
            }[];
            stock_info_v2: {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock: {
                    location_id: string;
                    stock: number;
                }[];
            };
            pre_order: {
                days_to_ship: number;
                is_pre_order: boolean;
            };
            model_status: string;
            tier_index: number[];
        }[];
    };
    error: string;
    request_id: string;
    warning: string;
}, {
    message: string;
    response: {
        tier_variation: {
            name: string;
            option_list: {
                option: string;
            }[];
        }[];
        model: {
            model_id: number;
            model_sku: string;
            promotion_id: number;
            price_info: {
                original_price: number;
                current_price: number;
                inflated_price_of_current_price: number;
                inflated_price_of_original_price: number;
            }[];
            stock_info_v2: {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock: {
                    location_id: string;
                    stock: number;
                }[];
            };
            pre_order: {
                days_to_ship: number;
                is_pre_order: boolean;
            };
            model_status: string;
            tier_index: number[];
        }[];
    };
    error: string;
    request_id: string;
    warning: string;
}>;
export declare const getModelList: (requestParameters: {
    item_id: string;
}) => Promise<{
    message: string;
    response: {
        tier_variation: {
            name: string;
            option_list: {
                option: string;
            }[];
        }[];
        model: {
            model_id: number;
            model_sku: string;
            promotion_id: number;
            price_info: {
                original_price: number;
                current_price: number;
                inflated_price_of_current_price: number;
                inflated_price_of_original_price: number;
            }[];
            stock_info_v2: {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock: {
                    location_id: string;
                    stock: number;
                }[];
            };
            pre_order: {
                days_to_ship: number;
                is_pre_order: boolean;
            };
            model_status: string;
            tier_index: number[];
        }[];
    };
    error: string;
    request_id: string;
    warning: string;
}>;
//# sourceMappingURL=v2-product-get-model-list.d.ts.map