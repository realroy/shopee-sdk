import { z } from "zod";
export declare const getOrderDetailRequestParametersSchema: z.ZodObject<{
    orderSnList: z.ZodArray<z.ZodString, "many">;
    responseOptionalFields: z.ZodOptional<z.ZodEnum<["buyer_user_id", "buyer_username", "estimated_shipping_fee", "recipient_address", "actual_shipping_fee", "goods_to_declare", "note", "note_update_time", "item_list", "pay_time", "dropshipper", "dropshipper_phone", "split_up", "buyer_cancel_reason", "cancel_by", "cancel_reason", "actual_shipping_fee_confirmed", "buyer_cpf_id", "fulfillment_flag", "pickup_done_time", "package_list", "shipping_carrier", "payment_method", "total_amount", "buyer_username", "invoice_data", "checkout_shipping_carrier", "reverse_shipping_fee", "order_chargeable_weight_gram", "edt", "prescription_images", "prescription_check_status"]>>;
}, "strip", z.ZodTypeAny, {
    orderSnList: string[];
    responseOptionalFields?: "buyer_user_id" | "buyer_username" | "estimated_shipping_fee" | "recipient_address" | "actual_shipping_fee" | "goods_to_declare" | "note" | "note_update_time" | "item_list" | "pay_time" | "dropshipper" | "dropshipper_phone" | "split_up" | "buyer_cancel_reason" | "cancel_by" | "cancel_reason" | "actual_shipping_fee_confirmed" | "buyer_cpf_id" | "fulfillment_flag" | "pickup_done_time" | "package_list" | "shipping_carrier" | "payment_method" | "total_amount" | "invoice_data" | "checkout_shipping_carrier" | "reverse_shipping_fee" | "order_chargeable_weight_gram" | "edt" | "prescription_images" | "prescription_check_status" | undefined;
}, {
    orderSnList: string[];
    responseOptionalFields?: "buyer_user_id" | "buyer_username" | "estimated_shipping_fee" | "recipient_address" | "actual_shipping_fee" | "goods_to_declare" | "note" | "note_update_time" | "item_list" | "pay_time" | "dropshipper" | "dropshipper_phone" | "split_up" | "buyer_cancel_reason" | "cancel_by" | "cancel_reason" | "actual_shipping_fee_confirmed" | "buyer_cpf_id" | "fulfillment_flag" | "pickup_done_time" | "package_list" | "shipping_carrier" | "payment_method" | "total_amount" | "invoice_data" | "checkout_shipping_carrier" | "reverse_shipping_fee" | "order_chargeable_weight_gram" | "edt" | "prescription_images" | "prescription_check_status" | undefined;
}>;
export declare const getOrderDetailResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodObject<{
        orderList: z.ZodArray<z.ZodObject<{
            checkoutShippingCarrier: z.ZodNull;
            reverseShippingFee: z.ZodNull;
            actualShippingFee: z.ZodNull;
            actualShippingFeeConfirmed: z.ZodBoolean;
            buyerCancelReason: z.ZodString;
            buyerCpfId: z.ZodNull;
            buyerUserId: z.ZodNumber;
            buyerUsername: z.ZodString;
            cancelBy: z.ZodString;
            cancelReason: z.ZodString;
            cod: z.ZodBoolean;
            createTime: z.ZodNumber;
            currency: z.ZodString;
            daysToShip: z.ZodNumber;
            dropshipper: z.ZodString;
            dropshipperPhone: z.ZodString;
            estimatedShipping_fee: z.ZodNumber;
            fulfillmentFlag: z.ZodString;
            goodsToDeclare: z.ZodBoolean;
            invoiceData: z.ZodNull;
            itemList: z.ZodArray<z.ZodObject<{
                itemId: z.ZodNumber;
                itemName: z.ZodString;
                itemSku: z.ZodString;
                modelId: z.ZodNumber;
                modelName: z.ZodString;
                modelSku: z.ZodString;
                modelQuantityPurchased: z.ZodNumber;
                modelOriginalPrice: z.ZodNumber;
                modelDiscountedPrice: z.ZodNumber;
                wholesale: z.ZodBoolean;
                weight: z.ZodNumber;
                addOnDeal: z.ZodBoolean;
                mainItem: z.ZodBoolean;
                addOnDealId: z.ZodNumber;
                promotionType: z.ZodString;
                promotionId: z.ZodNumber;
                orderItemId: z.ZodNumber;
                promotionGroupId: z.ZodNumber;
                imageInfo: z.ZodObject<{
                    imageUrl: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    imageUrl: string;
                }, {
                    imageUrl: string;
                }>;
                productLocationId: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                itemId: number;
                itemName: string;
                itemSku: string;
                modelId: number;
                modelName: string;
                modelSku: string;
                modelQuantityPurchased: number;
                modelOriginalPrice: number;
                modelDiscountedPrice: number;
                wholesale: boolean;
                weight: number;
                addOnDeal: boolean;
                mainItem: boolean;
                addOnDealId: number;
                promotionType: string;
                promotionId: number;
                orderItemId: number;
                promotionGroupId: number;
                imageInfo: {
                    imageUrl: string;
                };
                productLocationId: string[];
            }, {
                itemId: number;
                itemName: string;
                itemSku: string;
                modelId: number;
                modelName: string;
                modelSku: string;
                modelQuantityPurchased: number;
                modelOriginalPrice: number;
                modelDiscountedPrice: number;
                wholesale: boolean;
                weight: number;
                addOnDeal: boolean;
                mainItem: boolean;
                addOnDealId: number;
                promotionType: string;
                promotionId: number;
                orderItemId: number;
                promotionGroupId: number;
                imageInfo: {
                    imageUrl: string;
                };
                productLocationId: string[];
            }>, "many">;
            messageToSeller: z.ZodString;
            note: z.ZodString;
            noteUpdateTime: z.ZodNumber;
            orderSn: z.ZodString;
            orderStatus: z.ZodString;
            packageList: z.ZodArray<z.ZodObject<{
                packageNumber: z.ZodString;
                logisticsStatus: z.ZodString;
                shippingCarrier: z.ZodString;
                itemList: z.ZodArray<z.ZodObject<{
                    itemId: z.ZodNumber;
                    modelId: z.ZodNumber;
                    modelQuantity: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }, {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
            }, {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
            }>, "many">;
            payTime: z.ZodNumber;
            paymentMethod: z.ZodString;
            pickupDoneTime: z.ZodNumber;
            recipientAddress: z.ZodObject<{
                name: z.ZodString;
                phone: z.ZodString;
                town: z.ZodString;
                district: z.ZodString;
                city: z.ZodString;
                state: z.ZodString;
                region: z.ZodString;
                zipcode: z.ZodString;
                fullAddress: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                region: string;
                state: string;
                city: string;
                zipcode: string;
                district: string;
                town: string;
                phone: string;
                fullAddress: string;
            }, {
                name: string;
                region: string;
                state: string;
                city: string;
                zipcode: string;
                district: string;
                town: string;
                phone: string;
                fullAddress: string;
            }>;
            region: z.ZodString;
            shipByDate: z.ZodNumber;
            shippingCarrier: z.ZodString;
            splitUp: z.ZodBoolean;
            totalAmount: z.ZodNumber;
            updateTime: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string;
            checkoutShippingCarrier: null;
            reverseShippingFee: null;
            actualShippingFee: null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cancelReason: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string;
            estimatedShipping_fee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: null;
            itemList: {
                itemId: number;
                itemName: string;
                itemSku: string;
                modelId: number;
                modelName: string;
                modelSku: string;
                modelQuantityPurchased: number;
                modelOriginalPrice: number;
                modelDiscountedPrice: number;
                wholesale: boolean;
                weight: number;
                addOnDeal: boolean;
                mainItem: boolean;
                addOnDealId: number;
                promotionType: string;
                promotionId: number;
                orderItemId: number;
                promotionGroupId: number;
                imageInfo: {
                    imageUrl: string;
                };
                productLocationId: string[];
            }[];
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: string;
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
            }[];
            shippingCarrier: string;
            payTime: number;
            paymentMethod: string;
            pickupDoneTime: number;
            recipientAddress: {
                name: string;
                region: string;
                state: string;
                city: string;
                zipcode: string;
                district: string;
                town: string;
                phone: string;
                fullAddress: string;
            };
            shipByDate: number;
            splitUp: boolean;
            totalAmount: number;
            updateTime: number;
        }, {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string;
            checkoutShippingCarrier: null;
            reverseShippingFee: null;
            actualShippingFee: null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cancelReason: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string;
            estimatedShipping_fee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: null;
            itemList: {
                itemId: number;
                itemName: string;
                itemSku: string;
                modelId: number;
                modelName: string;
                modelSku: string;
                modelQuantityPurchased: number;
                modelOriginalPrice: number;
                modelDiscountedPrice: number;
                wholesale: boolean;
                weight: number;
                addOnDeal: boolean;
                mainItem: boolean;
                addOnDealId: number;
                promotionType: string;
                promotionId: number;
                orderItemId: number;
                promotionGroupId: number;
                imageInfo: {
                    imageUrl: string;
                };
                productLocationId: string[];
            }[];
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: string;
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
            }[];
            shippingCarrier: string;
            payTime: number;
            paymentMethod: string;
            pickupDoneTime: number;
            recipientAddress: {
                name: string;
                region: string;
                state: string;
                city: string;
                zipcode: string;
                district: string;
                town: string;
                phone: string;
                fullAddress: string;
            };
            shipByDate: number;
            splitUp: boolean;
            totalAmount: number;
            updateTime: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        orderList: {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string;
            checkoutShippingCarrier: null;
            reverseShippingFee: null;
            actualShippingFee: null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cancelReason: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string;
            estimatedShipping_fee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: null;
            itemList: {
                itemId: number;
                itemName: string;
                itemSku: string;
                modelId: number;
                modelName: string;
                modelSku: string;
                modelQuantityPurchased: number;
                modelOriginalPrice: number;
                modelDiscountedPrice: number;
                wholesale: boolean;
                weight: number;
                addOnDeal: boolean;
                mainItem: boolean;
                addOnDealId: number;
                promotionType: string;
                promotionId: number;
                orderItemId: number;
                promotionGroupId: number;
                imageInfo: {
                    imageUrl: string;
                };
                productLocationId: string[];
            }[];
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: string;
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
            }[];
            shippingCarrier: string;
            payTime: number;
            paymentMethod: string;
            pickupDoneTime: number;
            recipientAddress: {
                name: string;
                region: string;
                state: string;
                city: string;
                zipcode: string;
                district: string;
                town: string;
                phone: string;
                fullAddress: string;
            };
            shipByDate: number;
            splitUp: boolean;
            totalAmount: number;
            updateTime: number;
        }[];
    }, {
        orderList: {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string;
            checkoutShippingCarrier: null;
            reverseShippingFee: null;
            actualShippingFee: null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cancelReason: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string;
            estimatedShipping_fee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: null;
            itemList: {
                itemId: number;
                itemName: string;
                itemSku: string;
                modelId: number;
                modelName: string;
                modelSku: string;
                modelQuantityPurchased: number;
                modelOriginalPrice: number;
                modelDiscountedPrice: number;
                wholesale: boolean;
                weight: number;
                addOnDeal: boolean;
                mainItem: boolean;
                addOnDealId: number;
                promotionType: string;
                promotionId: number;
                orderItemId: number;
                promotionGroupId: number;
                imageInfo: {
                    imageUrl: string;
                };
                productLocationId: string[];
            }[];
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: string;
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
            }[];
            shippingCarrier: string;
            payTime: number;
            paymentMethod: string;
            pickupDoneTime: number;
            recipientAddress: {
                name: string;
                region: string;
                state: string;
                city: string;
                zipcode: string;
                district: string;
                town: string;
                phone: string;
                fullAddress: string;
            };
            shipByDate: number;
            splitUp: boolean;
            totalAmount: number;
            updateTime: number;
        }[];
    }>>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        orderList: {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string;
            checkoutShippingCarrier: null;
            reverseShippingFee: null;
            actualShippingFee: null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cancelReason: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string;
            estimatedShipping_fee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: null;
            itemList: {
                itemId: number;
                itemName: string;
                itemSku: string;
                modelId: number;
                modelName: string;
                modelSku: string;
                modelQuantityPurchased: number;
                modelOriginalPrice: number;
                modelDiscountedPrice: number;
                wholesale: boolean;
                weight: number;
                addOnDeal: boolean;
                mainItem: boolean;
                addOnDealId: number;
                promotionType: string;
                promotionId: number;
                orderItemId: number;
                promotionGroupId: number;
                imageInfo: {
                    imageUrl: string;
                };
                productLocationId: string[];
            }[];
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: string;
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
            }[];
            shippingCarrier: string;
            payTime: number;
            paymentMethod: string;
            pickupDoneTime: number;
            recipientAddress: {
                name: string;
                region: string;
                state: string;
                city: string;
                zipcode: string;
                district: string;
                town: string;
                phone: string;
                fullAddress: string;
            };
            shipByDate: number;
            splitUp: boolean;
            totalAmount: number;
            updateTime: number;
        }[];
    } | undefined;
}, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        orderList: {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string;
            checkoutShippingCarrier: null;
            reverseShippingFee: null;
            actualShippingFee: null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cancelReason: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string;
            estimatedShipping_fee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: null;
            itemList: {
                itemId: number;
                itemName: string;
                itemSku: string;
                modelId: number;
                modelName: string;
                modelSku: string;
                modelQuantityPurchased: number;
                modelOriginalPrice: number;
                modelDiscountedPrice: number;
                wholesale: boolean;
                weight: number;
                addOnDeal: boolean;
                mainItem: boolean;
                addOnDealId: number;
                promotionType: string;
                promotionId: number;
                orderItemId: number;
                promotionGroupId: number;
                imageInfo: {
                    imageUrl: string;
                };
                productLocationId: string[];
            }[];
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: string;
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
            }[];
            shippingCarrier: string;
            payTime: number;
            paymentMethod: string;
            pickupDoneTime: number;
            recipientAddress: {
                name: string;
                region: string;
                state: string;
                city: string;
                zipcode: string;
                district: string;
                town: string;
                phone: string;
                fullAddress: string;
            };
            shipByDate: number;
            splitUp: boolean;
            totalAmount: number;
            updateTime: number;
        }[];
    } | undefined;
}>;
export declare const getOrderDetail: (requestParameters: {
    orderSnList: string[];
    responseOptionalFields?: "buyer_user_id" | "buyer_username" | "estimated_shipping_fee" | "recipient_address" | "actual_shipping_fee" | "goods_to_declare" | "note" | "note_update_time" | "item_list" | "pay_time" | "dropshipper" | "dropshipper_phone" | "split_up" | "buyer_cancel_reason" | "cancel_by" | "cancel_reason" | "actual_shipping_fee_confirmed" | "buyer_cpf_id" | "fulfillment_flag" | "pickup_done_time" | "package_list" | "shipping_carrier" | "payment_method" | "total_amount" | "invoice_data" | "checkout_shipping_carrier" | "reverse_shipping_fee" | "order_chargeable_weight_gram" | "edt" | "prescription_images" | "prescription_check_status" | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        orderList: {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string;
            checkoutShippingCarrier: null;
            reverseShippingFee: null;
            actualShippingFee: null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cancelReason: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string;
            estimatedShipping_fee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: null;
            itemList: {
                itemId: number;
                itemName: string;
                itemSku: string;
                modelId: number;
                modelName: string;
                modelSku: string;
                modelQuantityPurchased: number;
                modelOriginalPrice: number;
                modelDiscountedPrice: number;
                wholesale: boolean;
                weight: number;
                addOnDeal: boolean;
                mainItem: boolean;
                addOnDealId: number;
                promotionType: string;
                promotionId: number;
                orderItemId: number;
                promotionGroupId: number;
                imageInfo: {
                    imageUrl: string;
                };
                productLocationId: string[];
            }[];
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: string;
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
            }[];
            shippingCarrier: string;
            payTime: number;
            paymentMethod: string;
            pickupDoneTime: number;
            recipientAddress: {
                name: string;
                region: string;
                state: string;
                city: string;
                zipcode: string;
                district: string;
                town: string;
                phone: string;
                fullAddress: string;
            };
            shipByDate: number;
            splitUp: boolean;
            totalAmount: number;
            updateTime: number;
        }[];
    } | undefined;
}>;
//# sourceMappingURL=v2-order-get-order-detail.d.ts.map