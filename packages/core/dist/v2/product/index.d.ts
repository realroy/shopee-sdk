export declare const apis: {
    getItemList: (requestParameters: {
        item_status: ("NORMAL" | "DELETED" | "UNLIST" | "BANNED")[];
        offset?: number | undefined;
        page_size?: number | undefined;
        update_time_from?: Date | undefined;
        update_time_to?: Date | undefined;
    }) => Promise<{
        error: string;
        request_id: string;
        message?: string | null | undefined;
        warning?: string | null | undefined;
        response?: {
            item?: ({
                item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
                item_id: number;
                update_time: number;
            } | undefined)[] | undefined;
        } | undefined;
        total_count?: number | undefined;
        has_next_page?: boolean | undefined;
        next_offset?: number | undefined;
    }>;
    getItemBaseInfo: (requestParameters: {
        item_id_list: string;
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
                    ncm: number;
                    same_state_cfop: number;
                    diff_state_cfop: number;
                    csosn: number;
                    origin: number;
                } | undefined;
            }[] | undefined;
        };
        error: string;
        warning: string;
        request_id: string;
    }>;
    getItemExtraInfo: (requestParameters: {
        item_id_list: string;
    }) => Promise<{
        message: string;
        error: string;
        request_id: string;
        warning?: string | undefined;
        response?: {
            item_list?: {
                item_id: number;
                sale: number;
                views: number;
                likes: number;
                rating_star: number;
                comment_count: number;
            }[] | undefined;
        } | undefined;
    }>;
};
export type * from './get-item-list';
export type * from './get-item-base-info';
export type * from './get-item-extra-info';
//# sourceMappingURL=index.d.ts.map