import { z } from "zod";
export declare const getOrderDetailRequestParametersSchema: z.ZodObject<{
    orderSnList: z.ZodArray<z.ZodString, "many">;
    responseOptionalFields: z.ZodOptional<z.ZodArray<z.ZodEnum<["buyer_user_id", "buyer_username", "estimated_shipping_fee", "recipient_address", "actual_shipping_fee", "goods_to_declare", "note", "note_update_time", "item_list", "pay_time", "dropshipper", "dropshipper_phone", "split_up", "buyer_cancel_reason", "cancel_by", "cancel_reason", "actual_shipping_fee_confirmed", "buyer_cpf_id", "fulfillment_flag", "pickup_done_time", "package_list", "shipping_carrier", "payment_method", "total_amount", "buyer_username", "invoice_data", "checkout_shipping_carrier", "reverse_shipping_fee", "order_chargeable_weight_gram", "edt", "prescription_images", "prescription_check_status"]>, "many">>;
}, "strip", z.ZodTypeAny, {
    orderSnList: string[];
    responseOptionalFields?: ("buyer_user_id" | "buyer_username" | "estimated_shipping_fee" | "recipient_address" | "actual_shipping_fee" | "goods_to_declare" | "note" | "note_update_time" | "item_list" | "pay_time" | "dropshipper" | "dropshipper_phone" | "split_up" | "buyer_cancel_reason" | "cancel_by" | "cancel_reason" | "actual_shipping_fee_confirmed" | "buyer_cpf_id" | "fulfillment_flag" | "pickup_done_time" | "package_list" | "shipping_carrier" | "payment_method" | "total_amount" | "invoice_data" | "checkout_shipping_carrier" | "reverse_shipping_fee" | "order_chargeable_weight_gram" | "edt" | "prescription_images" | "prescription_check_status")[] | undefined;
}, {
    orderSnList: string[];
    responseOptionalFields?: ("buyer_user_id" | "buyer_username" | "estimated_shipping_fee" | "recipient_address" | "actual_shipping_fee" | "goods_to_declare" | "note" | "note_update_time" | "item_list" | "pay_time" | "dropshipper" | "dropshipper_phone" | "split_up" | "buyer_cancel_reason" | "cancel_by" | "cancel_reason" | "actual_shipping_fee_confirmed" | "buyer_cpf_id" | "fulfillment_flag" | "pickup_done_time" | "package_list" | "shipping_carrier" | "payment_method" | "total_amount" | "invoice_data" | "checkout_shipping_carrier" | "reverse_shipping_fee" | "order_chargeable_weight_gram" | "edt" | "prescription_images" | "prescription_check_status")[] | undefined;
}>;
export declare const getOrderDetailResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodObject<{
        orderList: z.ZodArray<z.ZodObject<{
            checkoutShippingCarrier: z.ZodNullable<z.ZodString>;
            reverseShippingFee: z.ZodNullable<z.ZodNumber>;
            actualShippingFee: z.ZodNullable<z.ZodNumber>;
            actualShippingFeeConfirmed: z.ZodBoolean;
            buyerCancelReason: z.ZodString;
            buyerCpfId: z.ZodNullable<z.ZodString>;
            buyerUserId: z.ZodNumber;
            buyerUsername: z.ZodString;
            cancelBy: z.ZodString;
            cancelReason: z.ZodString;
            cod: z.ZodBoolean;
            createTime: z.ZodNumber;
            currency: z.ZodString;
            daysToShip: z.ZodNumber;
            dropshipper: z.ZodNullable<z.ZodString>;
            dropshipperPhone: z.ZodNullable<z.ZodString>;
            estimatedShippingFee: z.ZodNumber;
            fulfillmentFlag: z.ZodString;
            goodsToDeclare: z.ZodBoolean;
            invoiceData: z.ZodNullable<z.ZodObject<{
                number: z.ZodString;
                seriesNumber: z.ZodString;
                accessKey: z.ZodString;
                issueDate: z.ZodNumber;
                totalValue: z.ZodNumber;
                productsTotalValue: z.ZodNumber;
                taxCode: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                number: string;
                seriesNumber: string;
                accessKey: string;
                issueDate: number;
                totalValue: number;
                productsTotalValue: number;
                taxCode: string;
            }, {
                number: string;
                seriesNumber: string;
                accessKey: string;
                issueDate: number;
                totalValue: number;
                productsTotalValue: number;
                taxCode: string;
            }>>;
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
                modelId: number;
                itemName: string;
                itemSku: string;
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
                modelId: number;
                itemName: string;
                itemSku: string;
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
            prescriptionImages: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
            prescriptionCheckStatus: z.ZodNullable<z.ZodNumber>;
            edtFrom: z.ZodOptional<z.ZodNumber>;
            edtTo: z.ZodOptional<z.ZodNumber>;
            orderChargeableWeightGram: z.ZodNumber;
            messageToSeller: z.ZodString;
            note: z.ZodString;
            noteUpdateTime: z.ZodNumber;
            orderSn: z.ZodString;
            orderStatus: z.ZodEnum<["UNPAID", "READY_TO_SHIP", "RETRY_SHIP", "IN_CANCEL", "CANCELLED", "PROCESSED", "SHIPPED", "TO_RETURN", "TO_CONFIRM_RECEIVE", "COMPLETED"]>;
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
                parcelChargeableWeightGram: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
                parcelChargeableWeightGram: number;
            }, {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
                parcelChargeableWeightGram: number;
            }>, "many">;
            payTime: z.ZodNullable<z.ZodNumber>;
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
            dropshipper: string | null;
            cancelReason: string;
            itemList: {
                itemId: number;
                modelId: number;
                itemName: string;
                itemSku: string;
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
            updateTime: number;
            checkoutShippingCarrier: string | null;
            reverseShippingFee: number | null;
            actualShippingFee: number | null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: string | null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string | null;
            estimatedShippingFee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: {
                number: string;
                seriesNumber: string;
                accessKey: string;
                issueDate: number;
                totalValue: number;
                productsTotalValue: number;
                taxCode: string;
            } | null;
            prescriptionImages: string[] | null;
            prescriptionCheckStatus: number | null;
            orderChargeableWeightGram: number;
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED";
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
                parcelChargeableWeightGram: number;
            }[];
            shippingCarrier: string;
            payTime: number | null;
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
            edtFrom?: number | undefined;
            edtTo?: number | undefined;
        }, {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string | null;
            cancelReason: string;
            itemList: {
                itemId: number;
                modelId: number;
                itemName: string;
                itemSku: string;
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
            updateTime: number;
            checkoutShippingCarrier: string | null;
            reverseShippingFee: number | null;
            actualShippingFee: number | null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: string | null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string | null;
            estimatedShippingFee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: {
                number: string;
                seriesNumber: string;
                accessKey: string;
                issueDate: number;
                totalValue: number;
                productsTotalValue: number;
                taxCode: string;
            } | null;
            prescriptionImages: string[] | null;
            prescriptionCheckStatus: number | null;
            orderChargeableWeightGram: number;
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED";
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
                parcelChargeableWeightGram: number;
            }[];
            shippingCarrier: string;
            payTime: number | null;
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
            edtFrom?: number | undefined;
            edtTo?: number | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        orderList: {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string | null;
            cancelReason: string;
            itemList: {
                itemId: number;
                modelId: number;
                itemName: string;
                itemSku: string;
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
            updateTime: number;
            checkoutShippingCarrier: string | null;
            reverseShippingFee: number | null;
            actualShippingFee: number | null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: string | null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string | null;
            estimatedShippingFee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: {
                number: string;
                seriesNumber: string;
                accessKey: string;
                issueDate: number;
                totalValue: number;
                productsTotalValue: number;
                taxCode: string;
            } | null;
            prescriptionImages: string[] | null;
            prescriptionCheckStatus: number | null;
            orderChargeableWeightGram: number;
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED";
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
                parcelChargeableWeightGram: number;
            }[];
            shippingCarrier: string;
            payTime: number | null;
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
            edtFrom?: number | undefined;
            edtTo?: number | undefined;
        }[];
    }, {
        orderList: {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string | null;
            cancelReason: string;
            itemList: {
                itemId: number;
                modelId: number;
                itemName: string;
                itemSku: string;
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
            updateTime: number;
            checkoutShippingCarrier: string | null;
            reverseShippingFee: number | null;
            actualShippingFee: number | null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: string | null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string | null;
            estimatedShippingFee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: {
                number: string;
                seriesNumber: string;
                accessKey: string;
                issueDate: number;
                totalValue: number;
                productsTotalValue: number;
                taxCode: string;
            } | null;
            prescriptionImages: string[] | null;
            prescriptionCheckStatus: number | null;
            orderChargeableWeightGram: number;
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED";
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
                parcelChargeableWeightGram: number;
            }[];
            shippingCarrier: string;
            payTime: number | null;
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
            edtFrom?: number | undefined;
            edtTo?: number | undefined;
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
            dropshipper: string | null;
            cancelReason: string;
            itemList: {
                itemId: number;
                modelId: number;
                itemName: string;
                itemSku: string;
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
            updateTime: number;
            checkoutShippingCarrier: string | null;
            reverseShippingFee: number | null;
            actualShippingFee: number | null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: string | null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string | null;
            estimatedShippingFee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: {
                number: string;
                seriesNumber: string;
                accessKey: string;
                issueDate: number;
                totalValue: number;
                productsTotalValue: number;
                taxCode: string;
            } | null;
            prescriptionImages: string[] | null;
            prescriptionCheckStatus: number | null;
            orderChargeableWeightGram: number;
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED";
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
                parcelChargeableWeightGram: number;
            }[];
            shippingCarrier: string;
            payTime: number | null;
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
            edtFrom?: number | undefined;
            edtTo?: number | undefined;
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
            dropshipper: string | null;
            cancelReason: string;
            itemList: {
                itemId: number;
                modelId: number;
                itemName: string;
                itemSku: string;
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
            updateTime: number;
            checkoutShippingCarrier: string | null;
            reverseShippingFee: number | null;
            actualShippingFee: number | null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: string | null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string | null;
            estimatedShippingFee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: {
                number: string;
                seriesNumber: string;
                accessKey: string;
                issueDate: number;
                totalValue: number;
                productsTotalValue: number;
                taxCode: string;
            } | null;
            prescriptionImages: string[] | null;
            prescriptionCheckStatus: number | null;
            orderChargeableWeightGram: number;
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED";
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
                parcelChargeableWeightGram: number;
            }[];
            shippingCarrier: string;
            payTime: number | null;
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
            edtFrom?: number | undefined;
            edtTo?: number | undefined;
        }[];
    } | undefined;
}>;
export declare const getOrderDetail: (requestParameters: {
    orderSnList: string[];
    responseOptionalFields?: ("buyer_user_id" | "buyer_username" | "estimated_shipping_fee" | "recipient_address" | "actual_shipping_fee" | "goods_to_declare" | "note" | "note_update_time" | "item_list" | "pay_time" | "dropshipper" | "dropshipper_phone" | "split_up" | "buyer_cancel_reason" | "cancel_by" | "cancel_reason" | "actual_shipping_fee_confirmed" | "buyer_cpf_id" | "fulfillment_flag" | "pickup_done_time" | "package_list" | "shipping_carrier" | "payment_method" | "total_amount" | "invoice_data" | "checkout_shipping_carrier" | "reverse_shipping_fee" | "order_chargeable_weight_gram" | "edt" | "prescription_images" | "prescription_check_status")[] | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        orderList: {
            orderSn: string;
            region: string;
            note: string;
            dropshipper: string | null;
            cancelReason: string;
            itemList: {
                itemId: number;
                modelId: number;
                itemName: string;
                itemSku: string;
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
            updateTime: number;
            checkoutShippingCarrier: string | null;
            reverseShippingFee: number | null;
            actualShippingFee: number | null;
            actualShippingFeeConfirmed: boolean;
            buyerCancelReason: string;
            buyerCpfId: string | null;
            buyerUserId: number;
            buyerUsername: string;
            cancelBy: string;
            cod: boolean;
            createTime: number;
            currency: string;
            daysToShip: number;
            dropshipperPhone: string | null;
            estimatedShippingFee: number;
            fulfillmentFlag: string;
            goodsToDeclare: boolean;
            invoiceData: {
                number: string;
                seriesNumber: string;
                accessKey: string;
                issueDate: number;
                totalValue: number;
                productsTotalValue: number;
                taxCode: string;
            } | null;
            prescriptionImages: string[] | null;
            prescriptionCheckStatus: number | null;
            orderChargeableWeightGram: number;
            messageToSeller: string;
            noteUpdateTime: number;
            orderStatus: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED";
            packageList: {
                packageNumber: string;
                itemList: {
                    itemId: number;
                    modelId: number;
                    modelQuantity: number;
                }[];
                logisticsStatus: string;
                shippingCarrier: string;
                parcelChargeableWeightGram: number;
            }[];
            shippingCarrier: string;
            payTime: number | null;
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
            edtFrom?: number | undefined;
            edtTo?: number | undefined;
        }[];
    } | undefined;
}>;
//# sourceMappingURL=v2-order-get-order-detail.d.ts.map