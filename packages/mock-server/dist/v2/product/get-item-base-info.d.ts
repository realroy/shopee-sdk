import type { GetItemBaseInfoItem, GetItemBaseInfoResponse } from "@shopee-sdk/core/src/v2/product/get-item-base-info";
export declare function createGetItemBaseInfoItem(args?: Partial<GetItemBaseInfoItem>): {
    item_id: number;
    category_id: number;
    item_name: string;
    item_sku: string;
    create_time: number;
    update_time: number;
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
        seller_stock?: {
            location_id: string;
            stock: number;
        }[] | undefined;
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
    item_status: string;
    has_model: boolean;
    promotion_id: number;
    brand: {
        brand_id: number;
        original_brand_name: string;
    };
    tax_info: {
        origin: number;
        ncm: number;
        same_state_cfop: number;
        diff_state_cfop: number;
        csosn: number;
    } | undefined;
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
};
export declare function createGetItemBaseInfoResponse(args?: Partial<GetItemBaseInfoResponse>): {
    error: string;
    message: string;
    warning: string;
    request_id: string;
    response: {
        item_list?: {
            item_status: string;
            item_id: number;
            update_time: number;
            image: {
                image_url_list: string[];
                image_id_list: string[];
            };
            category_id: number;
            item_name: string;
            item_sku: string;
            create_time: number;
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
            brand: {
                brand_id: number;
                original_brand_name: string;
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
            attribute_list?: {
                attribute_id: number;
                original_attribute_name: string;
                is_mandatory: boolean;
                attribute_value_list: {
                    value_id: number;
                    original_value_name: string;
                    value_unit: string;
                }[];
            }[] | undefined;
            price_info?: {
                currency: string;
                original_price: number;
                current_price: number;
            }[] | undefined;
            stock_info_v2?: {
                summary_info: {
                    total_reserved_stock: number;
                    total_available_stock: number;
                };
                seller_stock?: {
                    location_id: string;
                    stock: number;
                }[] | undefined;
            } | undefined;
            promotion_id?: number | undefined;
            tax_info?: {
                origin: number;
                ncm: number;
                same_state_cfop: number;
                diff_state_cfop: number;
                csosn: number;
            } | undefined;
        }[] | undefined;
    };
};
export declare const MOCKED_GET_ITEM_BASE_INFO_ITEMS: {
    item_id: number;
    category_id: number;
    item_name: string;
    item_sku: string;
    create_time: number;
    update_time: number;
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
        seller_stock?: {
            location_id: string;
            stock: number;
        }[] | undefined;
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
    item_status: string;
    has_model: boolean;
    promotion_id: number;
    brand: {
        brand_id: number;
        original_brand_name: string;
    };
    tax_info: {
        origin: number;
        ncm: number;
        same_state_cfop: number;
        diff_state_cfop: number;
        csosn: number;
    } | undefined;
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
}[];
export declare const getItemBaseInfoMockHandler: import("msw").RestHandler<import("msw/lib/glossary-de6278a9").M<import("msw/lib/glossary-de6278a9").h>>;
//# sourceMappingURL=get-item-base-info.d.ts.map