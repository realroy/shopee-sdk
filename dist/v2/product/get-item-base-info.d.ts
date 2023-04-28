import { z } from "zod";
export declare const API_V2_PRODUCT_GET_ITEM_BASE_INFO = "/api/v2/product/get_item_base_info";
export declare const getItemBaseInfoRequestParametersSchema: z.ZodObject<{
    item_id_list: z.ZodArray<z.ZodNumber, "many">;
    need_tax_info: z.ZodOptional<z.ZodBoolean>;
    need_complaint_policy: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    item_id_list: number[];
    need_tax_info?: boolean | undefined;
    need_complaint_policy?: boolean | undefined;
}, {
    item_id_list: number[];
    need_tax_info?: boolean | undefined;
    need_complaint_policy?: boolean | undefined;
}>;
export declare const getItemBaseInfoResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
    warning: z.ZodString;
    request_id: z.ZodString;
    response: z.ZodObject<{
        item_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            item_id: z.ZodNumber;
            category_id: z.ZodNumber;
            item_name: z.ZodString;
            item_sku: z.ZodString;
            create_time: z.ZodNumber;
            update_time: z.ZodNumber;
            attribute_list: z.ZodArray<z.ZodObject<{
                attribute_id: z.ZodNumber;
                original_attribute_name: z.ZodString;
                is_mandatory: z.ZodBoolean;
                attribute_value_list: z.ZodArray<z.ZodObject<{
                    value_id: z.ZodNumber;
                    original_value_name: z.ZodString;
                    value_unit: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }, {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }, {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }>, "many">;
            price_info: z.ZodArray<z.ZodObject<{
                currency: z.ZodString;
                original_price: z.ZodNumber;
                current_price: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                original_price: number;
                current_price: number;
            }, {
                currency: string;
                original_price: number;
                current_price: number;
            }>, "many">;
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
            image: z.ZodObject<{
                image_url_list: z.ZodArray<z.ZodString, "many">;
                image_id_list: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                image_url_list: string[];
                image_id_list: string[];
            }, {
                image_url_list: string[];
                image_id_list: string[];
            }>;
            weight: z.ZodString;
            dimension: z.ZodObject<{
                package_length: z.ZodNumber;
                package_width: z.ZodNumber;
                package_height: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                package_length: number;
                package_width: number;
                package_height: number;
            }, {
                package_length: number;
                package_width: number;
                package_height: number;
            }>;
            logistic_info: z.ZodArray<z.ZodObject<{
                logistic_id: z.ZodNumber;
                logistic_name: z.ZodString;
                enabled: z.ZodBoolean;
                shipping_fee: z.ZodOptional<z.ZodNumber>;
                is_free: z.ZodBoolean;
                estimated_shipping_fee: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                logistic_id: number;
                logistic_name: string;
                enabled: boolean;
                is_free: boolean;
                shipping_fee?: number | undefined;
                estimated_shipping_fee?: number | undefined;
            }, {
                logistic_id: number;
                logistic_name: string;
                enabled: boolean;
                is_free: boolean;
                shipping_fee?: number | undefined;
                estimated_shipping_fee?: number | undefined;
            }>, "many">;
            pre_order: z.ZodObject<{
                is_pre_order: z.ZodBoolean;
                days_to_ship: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                is_pre_order: boolean;
                days_to_ship: number;
            }, {
                is_pre_order: boolean;
                days_to_ship: number;
            }>;
            condition: z.ZodString;
            size_chart: z.ZodString;
            item_status: z.ZodString;
            has_model: z.ZodBoolean;
            promotion_id: z.ZodNumber;
            brand: z.ZodObject<{
                brand_id: z.ZodNumber;
                original_brand_name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                brand_id: number;
                original_brand_name: string;
            }, {
                brand_id: number;
                original_brand_name: string;
            }>;
            tax_info: z.ZodObject<{
                ncm: z.ZodNumber;
                same_state_cfop: z.ZodNumber;
                diff_state_cfop: z.ZodNumber;
                csosn: z.ZodNumber;
                origin: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
                origin: number;
            }, {
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
                origin: number;
            }>;
            description_type: z.ZodString;
            description_info: z.ZodObject<{
                extended_description: z.ZodObject<{
                    field_list: z.ZodArray<z.ZodObject<{
                        field_type: z.ZodString;
                        text: z.ZodOptional<z.ZodString>;
                        image_info: z.ZodOptional<z.ZodObject<{
                            image_id: z.ZodString;
                            image_url: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            image_id: string;
                            image_url: string;
                        }, {
                            image_id: string;
                            image_url: string;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }, {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                }, {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                }>;
            }, "strip", z.ZodTypeAny, {
                extended_description: {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                };
            }, {
                extended_description: {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                };
            }>;
        }, "strip", z.ZodTypeAny, {
            item_status: string;
            item_id: number;
            update_time: number;
            category_id: number;
            item_name: string;
            item_sku: string;
            create_time: number;
            attribute_list: {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }[];
            price_info: {
                currency: string;
                original_price: number;
                current_price: number;
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
            image: {
                image_url_list: string[];
                image_id_list: string[];
            };
            weight: string;
            dimension: {
                package_length: number;
                package_width: number;
                package_height: number;
            };
            logistic_info: {
                logistic_id: number;
                logistic_name: string;
                enabled: boolean;
                is_free: boolean;
                shipping_fee?: number | undefined;
                estimated_shipping_fee?: number | undefined;
            }[];
            pre_order: {
                is_pre_order: boolean;
                days_to_ship: number;
            };
            condition: string;
            size_chart: string;
            has_model: boolean;
            promotion_id: number;
            brand: {
                brand_id: number;
                original_brand_name: string;
            };
            tax_info: {
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
                origin: number;
            };
            description_type: string;
            description_info: {
                extended_description: {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                };
            };
        }, {
            item_status: string;
            item_id: number;
            update_time: number;
            category_id: number;
            item_name: string;
            item_sku: string;
            create_time: number;
            attribute_list: {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }[];
            price_info: {
                currency: string;
                original_price: number;
                current_price: number;
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
            image: {
                image_url_list: string[];
                image_id_list: string[];
            };
            weight: string;
            dimension: {
                package_length: number;
                package_width: number;
                package_height: number;
            };
            logistic_info: {
                logistic_id: number;
                logistic_name: string;
                enabled: boolean;
                is_free: boolean;
                shipping_fee?: number | undefined;
                estimated_shipping_fee?: number | undefined;
            }[];
            pre_order: {
                is_pre_order: boolean;
                days_to_ship: number;
            };
            condition: string;
            size_chart: string;
            has_model: boolean;
            promotion_id: number;
            brand: {
                brand_id: number;
                original_brand_name: string;
            };
            tax_info: {
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
                origin: number;
            };
            description_type: string;
            description_info: {
                extended_description: {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                };
            };
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        item_list?: {
            item_status: string;
            item_id: number;
            update_time: number;
            category_id: number;
            item_name: string;
            item_sku: string;
            create_time: number;
            attribute_list: {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }[];
            price_info: {
                currency: string;
                original_price: number;
                current_price: number;
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
            image: {
                image_url_list: string[];
                image_id_list: string[];
            };
            weight: string;
            dimension: {
                package_length: number;
                package_width: number;
                package_height: number;
            };
            logistic_info: {
                logistic_id: number;
                logistic_name: string;
                enabled: boolean;
                is_free: boolean;
                shipping_fee?: number | undefined;
                estimated_shipping_fee?: number | undefined;
            }[];
            pre_order: {
                is_pre_order: boolean;
                days_to_ship: number;
            };
            condition: string;
            size_chart: string;
            has_model: boolean;
            promotion_id: number;
            brand: {
                brand_id: number;
                original_brand_name: string;
            };
            tax_info: {
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
                origin: number;
            };
            description_type: string;
            description_info: {
                extended_description: {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                };
            };
        }[] | undefined;
    }, {
        item_list?: {
            item_status: string;
            item_id: number;
            update_time: number;
            category_id: number;
            item_name: string;
            item_sku: string;
            create_time: number;
            attribute_list: {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }[];
            price_info: {
                currency: string;
                original_price: number;
                current_price: number;
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
            image: {
                image_url_list: string[];
                image_id_list: string[];
            };
            weight: string;
            dimension: {
                package_length: number;
                package_width: number;
                package_height: number;
            };
            logistic_info: {
                logistic_id: number;
                logistic_name: string;
                enabled: boolean;
                is_free: boolean;
                shipping_fee?: number | undefined;
                estimated_shipping_fee?: number | undefined;
            }[];
            pre_order: {
                is_pre_order: boolean;
                days_to_ship: number;
            };
            condition: string;
            size_chart: string;
            has_model: boolean;
            promotion_id: number;
            brand: {
                brand_id: number;
                original_brand_name: string;
            };
            tax_info: {
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
                origin: number;
            };
            description_type: string;
            description_info: {
                extended_description: {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                };
            };
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    response: {
        item_list?: {
            item_status: string;
            item_id: number;
            update_time: number;
            category_id: number;
            item_name: string;
            item_sku: string;
            create_time: number;
            attribute_list: {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }[];
            price_info: {
                currency: string;
                original_price: number;
                current_price: number;
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
            image: {
                image_url_list: string[];
                image_id_list: string[];
            };
            weight: string;
            dimension: {
                package_length: number;
                package_width: number;
                package_height: number;
            };
            logistic_info: {
                logistic_id: number;
                logistic_name: string;
                enabled: boolean;
                is_free: boolean;
                shipping_fee?: number | undefined;
                estimated_shipping_fee?: number | undefined;
            }[];
            pre_order: {
                is_pre_order: boolean;
                days_to_ship: number;
            };
            condition: string;
            size_chart: string;
            has_model: boolean;
            promotion_id: number;
            brand: {
                brand_id: number;
                original_brand_name: string;
            };
            tax_info: {
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
                origin: number;
            };
            description_type: string;
            description_info: {
                extended_description: {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                };
            };
        }[] | undefined;
    };
    error: string;
    warning: string;
    request_id: string;
}, {
    message: string;
    response: {
        item_list?: {
            item_status: string;
            item_id: number;
            update_time: number;
            category_id: number;
            item_name: string;
            item_sku: string;
            create_time: number;
            attribute_list: {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }[];
            price_info: {
                currency: string;
                original_price: number;
                current_price: number;
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
            image: {
                image_url_list: string[];
                image_id_list: string[];
            };
            weight: string;
            dimension: {
                package_length: number;
                package_width: number;
                package_height: number;
            };
            logistic_info: {
                logistic_id: number;
                logistic_name: string;
                enabled: boolean;
                is_free: boolean;
                shipping_fee?: number | undefined;
                estimated_shipping_fee?: number | undefined;
            }[];
            pre_order: {
                is_pre_order: boolean;
                days_to_ship: number;
            };
            condition: string;
            size_chart: string;
            has_model: boolean;
            promotion_id: number;
            brand: {
                brand_id: number;
                original_brand_name: string;
            };
            tax_info: {
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
                origin: number;
            };
            description_type: string;
            description_info: {
                extended_description: {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                };
            };
        }[] | undefined;
    };
    error: string;
    warning: string;
    request_id: string;
}>;
export type GetItemBaseInfoResponse = z.infer<typeof getItemBaseInfoResponseSchema>;
export type GetItemBaseInfoRequestParameters = z.infer<typeof getItemBaseInfoRequestParametersSchema>;
export declare const getItemBaseInfo: (requestParameters: {
    item_id_list: number[];
    need_tax_info?: boolean | undefined;
    need_complaint_policy?: boolean | undefined;
}) => Promise<{
    message: string;
    response: {
        item_list?: {
            item_status: string;
            item_id: number;
            update_time: number;
            category_id: number;
            item_name: string;
            item_sku: string;
            create_time: number;
            attribute_list: {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }[];
            price_info: {
                currency: string;
                original_price: number;
                current_price: number;
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
            image: {
                image_url_list: string[];
                image_id_list: string[];
            };
            weight: string;
            dimension: {
                package_length: number;
                package_width: number;
                package_height: number;
            };
            logistic_info: {
                logistic_id: number;
                logistic_name: string;
                enabled: boolean;
                is_free: boolean;
                shipping_fee?: number | undefined;
                estimated_shipping_fee?: number | undefined;
            }[];
            pre_order: {
                is_pre_order: boolean;
                days_to_ship: number;
            };
            condition: string;
            size_chart: string;
            has_model: boolean;
            promotion_id: number;
            brand: {
                brand_id: number;
                original_brand_name: string;
            };
            tax_info: {
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
                origin: number;
            };
            description_type: string;
            description_info: {
                extended_description: {
                    field_list: {
                        field_type: string;
                        text?: string | undefined;
                        image_info?: {
                            image_id: string;
                            image_url: string;
                        } | undefined;
                    }[];
                };
            };
        }[] | undefined;
    };
    error: string;
    warning: string;
    request_id: string;
}>;
export default getItemBaseInfo;
