import type { GetItemBaseInfoResponse, GetItemBaseInfoResponseItem } from "@shopee-sdk/core";
export declare function createGetItemBaseInfoItem(args?: Partial<GetItemBaseInfoResponseItem>): {
    item_id: any;
    category_id: any;
    item_name: any;
    item_sku: any;
    create_time: any;
    update_time: any;
    attribute_list: any;
    price_info: any;
    stock_info_v2: any;
    image: {
        imageUrlList: string[];
        imageIdList: string[];
    } | {
        image_url_list: string[];
        image_id_list: string[];
    };
    weight: string;
    dimension: {
        packageLength: number;
        packageWidth: number;
        packageHeight: number;
    } | {
        package_length: number;
        package_width: number;
        package_height: number;
    };
    logistic_info: any;
    pre_order: any;
    condition: string;
    size_chart: any;
    item_status: any;
    has_model: any;
    promotion_id: any;
    brand: {
        brandId: number;
        originalBrandName: string;
    } | {
        brand_id: number;
        original_brand_name: string;
    };
    tax_info: any;
    description_type: any;
    description_info: any;
};
export declare function createGetItemBaseInfoResponse(args?: Partial<GetItemBaseInfoResponse>): {
    error: string;
    message: string;
    warning: string;
    request_id: any;
    response: {
        itemList?: {
            itemId: number;
            updateTime: number;
            createTime: number;
            itemName: string;
            itemSku: string;
            weight: string;
            categoryId: number;
            image: {
                imageUrlList: string[];
                imageIdList: string[];
            };
            dimension: {
                packageLength: number;
                packageWidth: number;
                packageHeight: number;
            };
            preOrder: {
                daysToShip: number;
                isPreOrder: boolean;
            };
            condition: string;
            sizeChart: string;
            itemStatus: string;
            hasModel: boolean;
            brand: {
                brandId: number;
                originalBrandName: string;
            };
            descriptionType: string;
            attributeList?: {
                attributeId: number;
                originalAttributeName: string;
                isMandatory: boolean;
                attributeValueList: {
                    valueId: number;
                    originalValueName: string;
                    valueUnit: string;
                }[];
            }[] | undefined;
            priceInfo?: {
                currency: string;
                originalPrice: number;
                currentPrice: number;
            }[] | undefined;
            stockInfoV2?: {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock?: {
                    locationId: string;
                    stock: number;
                }[] | undefined;
            } | undefined;
            logisticInfo?: {
                logisticId: number;
                logisticName: string;
                enabled: boolean;
                isFree: boolean;
                shippingFee?: number | undefined;
                estimatedShippingFee?: number | undefined;
            }[] | undefined;
            promotionId?: number | undefined;
            taxInfo?: {
                ncm: number;
                sameStateCfop: number;
                diffStateCfop: number;
                csosn: number;
                origin: number;
            } | undefined;
            descriptionInfo?: {
                extendedDescription?: {
                    fieldList: {
                        fieldType: string;
                        text?: string | undefined;
                        imageInfo?: {
                            imageUrl: string;
                            imageId: string;
                        } | undefined;
                    }[];
                } | undefined;
            } | undefined;
        }[] | undefined;
    } | {
        item_list: never[];
    };
};
export declare const MOCKED_GET_ITEM_BASE_INFO_ITEMS: {
    item_id: any;
    category_id: any;
    item_name: any;
    item_sku: any;
    create_time: any;
    update_time: any;
    attribute_list: any;
    price_info: any;
    stock_info_v2: any;
    image: {
        imageUrlList: string[];
        imageIdList: string[];
    } | {
        image_url_list: string[];
        image_id_list: string[];
    };
    weight: string;
    dimension: {
        packageLength: number;
        packageWidth: number;
        packageHeight: number;
    } | {
        package_length: number;
        package_width: number;
        package_height: number;
    };
    logistic_info: any;
    pre_order: any;
    condition: string;
    size_chart: any;
    item_status: any;
    has_model: any;
    promotion_id: any;
    brand: {
        brandId: number;
        originalBrandName: string;
    } | {
        brand_id: number;
        original_brand_name: string;
    };
    tax_info: any;
    description_type: any;
    description_info: any;
}[];
export declare const getItemBaseInfoMockHandler: import("msw").RestHandler<import("msw/lib/glossary-de6278a9").M<import("msw/lib/glossary-de6278a9").h>>;
//# sourceMappingURL=v2-product-get-item-base-info.d.ts.map