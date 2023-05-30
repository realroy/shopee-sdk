import { z } from "zod";
export declare const getOrderDetailRequestParametersSchema: z.ZodObject<{
    order_sn_list: z.ZodArray<z.ZodString, "many">;
    response_optional_fields: z.ZodOptional<z.ZodEnum<["buyer_user_id", "buyer_username", "estimated_shipping_fee", "recipient_address", "actual_shipping_fee", "goods_to_declare", "note", "note_update_time", "item_list", "pay_time", "dropshipper", "dropshipper_phone", "split_up", "buyer_cancel_reason", "cancel_by", "cancel_reason", "actual_shipping_fee_confirmed", "buyer_cpf_id", "fulfillment_flag", "pickup_done_time", "package_list", "shipping_carrier", "payment_method", "total_amount", "buyer_username", "invoice_data", "checkout_shipping_carrier", "reverse_shipping_fee", "order_chargeable_weight_gram", "edt", "prescription_images", "prescription_check_status"]>>;
}, "strip", z.ZodTypeAny, {
    order_sn_list: string[];
    response_optional_fields?: "buyer_user_id" | "buyer_username" | "estimated_shipping_fee" | "recipient_address" | "actual_shipping_fee" | "goods_to_declare" | "note" | "note_update_time" | "item_list" | "pay_time" | "dropshipper" | "dropshipper_phone" | "split_up" | "buyer_cancel_reason" | "cancel_by" | "cancel_reason" | "actual_shipping_fee_confirmed" | "buyer_cpf_id" | "fulfillment_flag" | "pickup_done_time" | "package_list" | "shipping_carrier" | "payment_method" | "total_amount" | "invoice_data" | "checkout_shipping_carrier" | "reverse_shipping_fee" | "order_chargeable_weight_gram" | "edt" | "prescription_images" | "prescription_check_status" | undefined;
}, {
    order_sn_list: string[];
    response_optional_fields?: "buyer_user_id" | "buyer_username" | "estimated_shipping_fee" | "recipient_address" | "actual_shipping_fee" | "goods_to_declare" | "note" | "note_update_time" | "item_list" | "pay_time" | "dropshipper" | "dropshipper_phone" | "split_up" | "buyer_cancel_reason" | "cancel_by" | "cancel_reason" | "actual_shipping_fee_confirmed" | "buyer_cpf_id" | "fulfillment_flag" | "pickup_done_time" | "package_list" | "shipping_carrier" | "payment_method" | "total_amount" | "invoice_data" | "checkout_shipping_carrier" | "reverse_shipping_fee" | "order_chargeable_weight_gram" | "edt" | "prescription_images" | "prescription_check_status" | undefined;
}>;
export declare const getOrderDetailResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodObject<{
        order_list: z.ZodArray<z.ZodObject<{
            checkout_shipping_carrier: z.ZodNull;
            reverse_shipping_fee: z.ZodNull;
            actual_shipping_fee: z.ZodNull;
            actual_shipping_fee_confirmed: z.ZodBoolean;
            buyer_cancel_reason: z.ZodString;
            buyer_cpf_id: z.ZodNull;
            buyer_user_id: z.ZodNumber;
            buyer_username: z.ZodString;
            cancel_by: z.ZodString;
            cancel_reason: z.ZodString;
            cod: z.ZodBoolean;
            create_time: z.ZodNumber;
            currency: z.ZodString;
            days_to_ship: z.ZodNumber;
            dropshipper: z.ZodString;
            dropshipper_phone: z.ZodString;
            estimated_shipping_fee: z.ZodNumber;
            fulfillment_flag: z.ZodString;
            goods_to_declare: z.ZodBoolean;
            invoice_data: z.ZodNull;
            item_list: z.ZodArray<z.ZodObject<{
                item_id: z.ZodNumber;
                item_name: z.ZodString;
                item_sku: z.ZodString;
                model_id: z.ZodNumber;
                model_name: z.ZodString;
                model_sku: z.ZodString;
                model_quantity_purchased: z.ZodNumber;
                model_original_price: z.ZodNumber;
                model_discounted_price: z.ZodNumber;
                wholesale: z.ZodBoolean;
                weight: z.ZodNumber;
                add_on_deal: z.ZodBoolean;
                main_item: z.ZodBoolean;
                add_on_deal_id: z.ZodNumber;
                promotion_type: z.ZodString;
                promotion_id: z.ZodNumber;
                order_item_id: z.ZodNumber;
                promotion_group_id: z.ZodNumber;
                image_info: z.ZodObject<{
                    image_url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    image_url: string;
                }, {
                    image_url: string;
                }>;
                product_location_id: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                item_id: number;
                item_name: string;
                item_sku: string;
                model_id: number;
                model_name: string;
                model_sku: string;
                model_quantity_purchased: number;
                model_original_price: number;
                model_discounted_price: number;
                wholesale: boolean;
                weight: number;
                add_on_deal: boolean;
                main_item: boolean;
                add_on_deal_id: number;
                promotion_type: string;
                promotion_id: number;
                order_item_id: number;
                promotion_group_id: number;
                image_info: {
                    image_url: string;
                };
                product_location_id: string[];
            }, {
                item_id: number;
                item_name: string;
                item_sku: string;
                model_id: number;
                model_name: string;
                model_sku: string;
                model_quantity_purchased: number;
                model_original_price: number;
                model_discounted_price: number;
                wholesale: boolean;
                weight: number;
                add_on_deal: boolean;
                main_item: boolean;
                add_on_deal_id: number;
                promotion_type: string;
                promotion_id: number;
                order_item_id: number;
                promotion_group_id: number;
                image_info: {
                    image_url: string;
                };
                product_location_id: string[];
            }>, "many">;
            message_to_seller: z.ZodString;
            note: z.ZodString;
            note_update_time: z.ZodNumber;
            order_sn: z.ZodString;
            order_status: z.ZodString;
            package_list: z.ZodArray<z.ZodObject<{
                package_number: z.ZodString;
                logistics_status: z.ZodString;
                shipping_carrier: z.ZodString;
                item_list: z.ZodArray<z.ZodObject<{
                    item_id: z.ZodNumber;
                    model_id: z.ZodNumber;
                    model_quantity: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }, {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                item_list: {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }[];
                shipping_carrier: string;
                package_number: string;
                logistics_status: string;
            }, {
                item_list: {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }[];
                shipping_carrier: string;
                package_number: string;
                logistics_status: string;
            }>, "many">;
            pay_time: z.ZodNumber;
            payment_method: z.ZodString;
            pickup_done_time: z.ZodNumber;
            recipient_address: z.ZodObject<{
                name: z.ZodString;
                phone: z.ZodString;
                town: z.ZodString;
                district: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                region: z.ZodString;
                zipcode: z.ZodString;
                full_address: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                phone: string;
                town: string;
                district: string;
                city: string;
                state: string;
                region: string;
                zipcode: string;
                full_address: string;
            }, {
                name: string;
                phone: string;
                town: string;
                district: string;
                city: string;
                state: string;
                region: string;
                zipcode: string;
                full_address: string;
            }>;
            region: z.ZodString;
            ship_by_date: z.ZodNumber;
            shipping_carrier: z.ZodString;
            split_up: z.ZodBoolean;
            total_amount: z.ZodNumber;
            update_time: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            buyer_user_id: number;
            buyer_username: string;
            estimated_shipping_fee: number;
            recipient_address: {
                name: string;
                phone: string;
                town: string;
                district: string;
                city: string;
                state: string;
                region: string;
                zipcode: string;
                full_address: string;
            };
            actual_shipping_fee: null;
            goods_to_declare: boolean;
            note: string;
            note_update_time: number;
            item_list: {
                item_id: number;
                item_name: string;
                item_sku: string;
                model_id: number;
                model_name: string;
                model_sku: string;
                model_quantity_purchased: number;
                model_original_price: number;
                model_discounted_price: number;
                wholesale: boolean;
                weight: number;
                add_on_deal: boolean;
                main_item: boolean;
                add_on_deal_id: number;
                promotion_type: string;
                promotion_id: number;
                order_item_id: number;
                promotion_group_id: number;
                image_info: {
                    image_url: string;
                };
                product_location_id: string[];
            }[];
            pay_time: number;
            dropshipper: string;
            dropshipper_phone: string;
            split_up: boolean;
            buyer_cancel_reason: string;
            cancel_by: string;
            cancel_reason: string;
            actual_shipping_fee_confirmed: boolean;
            buyer_cpf_id: null;
            fulfillment_flag: string;
            pickup_done_time: number;
            package_list: {
                item_list: {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }[];
                shipping_carrier: string;
                package_number: string;
                logistics_status: string;
            }[];
            shipping_carrier: string;
            payment_method: string;
            total_amount: number;
            invoice_data: null;
            checkout_shipping_carrier: null;
            reverse_shipping_fee: null;
            cod: boolean;
            create_time: number;
            currency: string;
            days_to_ship: number;
            message_to_seller: string;
            order_sn: string;
            order_status: string;
            region: string;
            ship_by_date: number;
            update_time: number;
        }, {
            buyer_user_id: number;
            buyer_username: string;
            estimated_shipping_fee: number;
            recipient_address: {
                name: string;
                phone: string;
                town: string;
                district: string;
                city: string;
                state: string;
                region: string;
                zipcode: string;
                full_address: string;
            };
            actual_shipping_fee: null;
            goods_to_declare: boolean;
            note: string;
            note_update_time: number;
            item_list: {
                item_id: number;
                item_name: string;
                item_sku: string;
                model_id: number;
                model_name: string;
                model_sku: string;
                model_quantity_purchased: number;
                model_original_price: number;
                model_discounted_price: number;
                wholesale: boolean;
                weight: number;
                add_on_deal: boolean;
                main_item: boolean;
                add_on_deal_id: number;
                promotion_type: string;
                promotion_id: number;
                order_item_id: number;
                promotion_group_id: number;
                image_info: {
                    image_url: string;
                };
                product_location_id: string[];
            }[];
            pay_time: number;
            dropshipper: string;
            dropshipper_phone: string;
            split_up: boolean;
            buyer_cancel_reason: string;
            cancel_by: string;
            cancel_reason: string;
            actual_shipping_fee_confirmed: boolean;
            buyer_cpf_id: null;
            fulfillment_flag: string;
            pickup_done_time: number;
            package_list: {
                item_list: {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }[];
                shipping_carrier: string;
                package_number: string;
                logistics_status: string;
            }[];
            shipping_carrier: string;
            payment_method: string;
            total_amount: number;
            invoice_data: null;
            checkout_shipping_carrier: null;
            reverse_shipping_fee: null;
            cod: boolean;
            create_time: number;
            currency: string;
            days_to_ship: number;
            message_to_seller: string;
            order_sn: string;
            order_status: string;
            region: string;
            ship_by_date: number;
            update_time: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        order_list: {
            buyer_user_id: number;
            buyer_username: string;
            estimated_shipping_fee: number;
            recipient_address: {
                name: string;
                phone: string;
                town: string;
                district: string;
                city: string;
                state: string;
                region: string;
                zipcode: string;
                full_address: string;
            };
            actual_shipping_fee: null;
            goods_to_declare: boolean;
            note: string;
            note_update_time: number;
            item_list: {
                item_id: number;
                item_name: string;
                item_sku: string;
                model_id: number;
                model_name: string;
                model_sku: string;
                model_quantity_purchased: number;
                model_original_price: number;
                model_discounted_price: number;
                wholesale: boolean;
                weight: number;
                add_on_deal: boolean;
                main_item: boolean;
                add_on_deal_id: number;
                promotion_type: string;
                promotion_id: number;
                order_item_id: number;
                promotion_group_id: number;
                image_info: {
                    image_url: string;
                };
                product_location_id: string[];
            }[];
            pay_time: number;
            dropshipper: string;
            dropshipper_phone: string;
            split_up: boolean;
            buyer_cancel_reason: string;
            cancel_by: string;
            cancel_reason: string;
            actual_shipping_fee_confirmed: boolean;
            buyer_cpf_id: null;
            fulfillment_flag: string;
            pickup_done_time: number;
            package_list: {
                item_list: {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }[];
                shipping_carrier: string;
                package_number: string;
                logistics_status: string;
            }[];
            shipping_carrier: string;
            payment_method: string;
            total_amount: number;
            invoice_data: null;
            checkout_shipping_carrier: null;
            reverse_shipping_fee: null;
            cod: boolean;
            create_time: number;
            currency: string;
            days_to_ship: number;
            message_to_seller: string;
            order_sn: string;
            order_status: string;
            region: string;
            ship_by_date: number;
            update_time: number;
        }[];
    }, {
        order_list: {
            buyer_user_id: number;
            buyer_username: string;
            estimated_shipping_fee: number;
            recipient_address: {
                name: string;
                phone: string;
                town: string;
                district: string;
                city: string;
                state: string;
                region: string;
                zipcode: string;
                full_address: string;
            };
            actual_shipping_fee: null;
            goods_to_declare: boolean;
            note: string;
            note_update_time: number;
            item_list: {
                item_id: number;
                item_name: string;
                item_sku: string;
                model_id: number;
                model_name: string;
                model_sku: string;
                model_quantity_purchased: number;
                model_original_price: number;
                model_discounted_price: number;
                wholesale: boolean;
                weight: number;
                add_on_deal: boolean;
                main_item: boolean;
                add_on_deal_id: number;
                promotion_type: string;
                promotion_id: number;
                order_item_id: number;
                promotion_group_id: number;
                image_info: {
                    image_url: string;
                };
                product_location_id: string[];
            }[];
            pay_time: number;
            dropshipper: string;
            dropshipper_phone: string;
            split_up: boolean;
            buyer_cancel_reason: string;
            cancel_by: string;
            cancel_reason: string;
            actual_shipping_fee_confirmed: boolean;
            buyer_cpf_id: null;
            fulfillment_flag: string;
            pickup_done_time: number;
            package_list: {
                item_list: {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }[];
                shipping_carrier: string;
                package_number: string;
                logistics_status: string;
            }[];
            shipping_carrier: string;
            payment_method: string;
            total_amount: number;
            invoice_data: null;
            checkout_shipping_carrier: null;
            reverse_shipping_fee: null;
            cod: boolean;
            create_time: number;
            currency: string;
            days_to_ship: number;
            message_to_seller: string;
            order_sn: string;
            order_status: string;
            region: string;
            ship_by_date: number;
            update_time: number;
        }[];
    }>;
    request_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    response: {
        order_list: {
            buyer_user_id: number;
            buyer_username: string;
            estimated_shipping_fee: number;
            recipient_address: {
                name: string;
                phone: string;
                town: string;
                district: string;
                city: string;
                state: string;
                region: string;
                zipcode: string;
                full_address: string;
            };
            actual_shipping_fee: null;
            goods_to_declare: boolean;
            note: string;
            note_update_time: number;
            item_list: {
                item_id: number;
                item_name: string;
                item_sku: string;
                model_id: number;
                model_name: string;
                model_sku: string;
                model_quantity_purchased: number;
                model_original_price: number;
                model_discounted_price: number;
                wholesale: boolean;
                weight: number;
                add_on_deal: boolean;
                main_item: boolean;
                add_on_deal_id: number;
                promotion_type: string;
                promotion_id: number;
                order_item_id: number;
                promotion_group_id: number;
                image_info: {
                    image_url: string;
                };
                product_location_id: string[];
            }[];
            pay_time: number;
            dropshipper: string;
            dropshipper_phone: string;
            split_up: boolean;
            buyer_cancel_reason: string;
            cancel_by: string;
            cancel_reason: string;
            actual_shipping_fee_confirmed: boolean;
            buyer_cpf_id: null;
            fulfillment_flag: string;
            pickup_done_time: number;
            package_list: {
                item_list: {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }[];
                shipping_carrier: string;
                package_number: string;
                logistics_status: string;
            }[];
            shipping_carrier: string;
            payment_method: string;
            total_amount: number;
            invoice_data: null;
            checkout_shipping_carrier: null;
            reverse_shipping_fee: null;
            cod: boolean;
            create_time: number;
            currency: string;
            days_to_ship: number;
            message_to_seller: string;
            order_sn: string;
            order_status: string;
            region: string;
            ship_by_date: number;
            update_time: number;
        }[];
    };
    request_id: string;
    error?: string | undefined;
    message?: string | undefined;
}, {
    response: {
        order_list: {
            buyer_user_id: number;
            buyer_username: string;
            estimated_shipping_fee: number;
            recipient_address: {
                name: string;
                phone: string;
                town: string;
                district: string;
                city: string;
                state: string;
                region: string;
                zipcode: string;
                full_address: string;
            };
            actual_shipping_fee: null;
            goods_to_declare: boolean;
            note: string;
            note_update_time: number;
            item_list: {
                item_id: number;
                item_name: string;
                item_sku: string;
                model_id: number;
                model_name: string;
                model_sku: string;
                model_quantity_purchased: number;
                model_original_price: number;
                model_discounted_price: number;
                wholesale: boolean;
                weight: number;
                add_on_deal: boolean;
                main_item: boolean;
                add_on_deal_id: number;
                promotion_type: string;
                promotion_id: number;
                order_item_id: number;
                promotion_group_id: number;
                image_info: {
                    image_url: string;
                };
                product_location_id: string[];
            }[];
            pay_time: number;
            dropshipper: string;
            dropshipper_phone: string;
            split_up: boolean;
            buyer_cancel_reason: string;
            cancel_by: string;
            cancel_reason: string;
            actual_shipping_fee_confirmed: boolean;
            buyer_cpf_id: null;
            fulfillment_flag: string;
            pickup_done_time: number;
            package_list: {
                item_list: {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }[];
                shipping_carrier: string;
                package_number: string;
                logistics_status: string;
            }[];
            shipping_carrier: string;
            payment_method: string;
            total_amount: number;
            invoice_data: null;
            checkout_shipping_carrier: null;
            reverse_shipping_fee: null;
            cod: boolean;
            create_time: number;
            currency: string;
            days_to_ship: number;
            message_to_seller: string;
            order_sn: string;
            order_status: string;
            region: string;
            ship_by_date: number;
            update_time: number;
        }[];
    };
    request_id: string;
    error?: string | undefined;
    message?: string | undefined;
}>;
export declare const getOrderDetail: (requestParameters: {
    order_sn_list: string[];
    response_optional_fields?: "buyer_user_id" | "buyer_username" | "estimated_shipping_fee" | "recipient_address" | "actual_shipping_fee" | "goods_to_declare" | "note" | "note_update_time" | "item_list" | "pay_time" | "dropshipper" | "dropshipper_phone" | "split_up" | "buyer_cancel_reason" | "cancel_by" | "cancel_reason" | "actual_shipping_fee_confirmed" | "buyer_cpf_id" | "fulfillment_flag" | "pickup_done_time" | "package_list" | "shipping_carrier" | "payment_method" | "total_amount" | "invoice_data" | "checkout_shipping_carrier" | "reverse_shipping_fee" | "order_chargeable_weight_gram" | "edt" | "prescription_images" | "prescription_check_status" | undefined;
}) => Promise<{
    response: {
        order_list: {
            buyer_user_id: number;
            buyer_username: string;
            estimated_shipping_fee: number;
            recipient_address: {
                name: string;
                phone: string;
                town: string;
                district: string;
                city: string;
                state: string;
                region: string;
                zipcode: string;
                full_address: string;
            };
            actual_shipping_fee: null;
            goods_to_declare: boolean;
            note: string;
            note_update_time: number;
            item_list: {
                item_id: number;
                item_name: string;
                item_sku: string;
                model_id: number;
                model_name: string;
                model_sku: string;
                model_quantity_purchased: number;
                model_original_price: number;
                model_discounted_price: number;
                wholesale: boolean;
                weight: number;
                add_on_deal: boolean;
                main_item: boolean;
                add_on_deal_id: number;
                promotion_type: string;
                promotion_id: number;
                order_item_id: number;
                promotion_group_id: number;
                image_info: {
                    image_url: string;
                };
                product_location_id: string[];
            }[];
            pay_time: number;
            dropshipper: string;
            dropshipper_phone: string;
            split_up: boolean;
            buyer_cancel_reason: string;
            cancel_by: string;
            cancel_reason: string;
            actual_shipping_fee_confirmed: boolean;
            buyer_cpf_id: null;
            fulfillment_flag: string;
            pickup_done_time: number;
            package_list: {
                item_list: {
                    item_id: number;
                    model_id: number;
                    model_quantity: number;
                }[];
                shipping_carrier: string;
                package_number: string;
                logistics_status: string;
            }[];
            shipping_carrier: string;
            payment_method: string;
            total_amount: number;
            invoice_data: null;
            checkout_shipping_carrier: null;
            reverse_shipping_fee: null;
            cod: boolean;
            create_time: number;
            currency: string;
            days_to_ship: number;
            message_to_seller: string;
            order_sn: string;
            order_status: string;
            region: string;
            ship_by_date: number;
            update_time: number;
        }[];
    };
    request_id: string;
    error?: string | undefined;
    message?: string | undefined;
}>;
//# sourceMappingURL=v2-order-get-order-detail.d.ts.map