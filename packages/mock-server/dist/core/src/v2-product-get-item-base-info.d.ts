import { z } from "zod";
export declare const getItemBaseInfoRequestParametersSchema: z.ZodObject<{
    itemIdList: z.ZodString;
    needTaxInfo: z.ZodOptional<z.ZodBoolean>;
    needComplaintPolicy: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    itemIdList: string;
    needTaxInfo?: boolean | undefined;
    needComplaintPolicy?: boolean | undefined;
}, {
    itemIdList: string;
    needTaxInfo?: boolean | undefined;
    needComplaintPolicy?: boolean | undefined;
}>;
export declare const getItemBaseInfoResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
    warning: z.ZodString;
    requestId: z.ZodString;
    response: z.ZodObject<{
        itemList: z.ZodOptional<z.ZodArray<z.ZodObject<{
            itemId: z.ZodNumber;
            categoryId: z.ZodNumber;
            itemName: z.ZodString;
            itemSku: z.ZodString;
            createTime: z.ZodNumber;
            updateTime: z.ZodNumber;
            attributeList: z.ZodOptional<z.ZodArray<z.ZodObject<{
                attributeId: z.ZodNumber;
                originalAttributeName: z.ZodString;
                isMandatory: z.ZodBoolean;
                attributeValueList: z.ZodArray<z.ZodObject<{
                    valueId: z.ZodNumber;
                    originalValueName: z.ZodString;
                    valueUnit: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    valueId: number;
                    originalValueName: string;
                    valueUnit: string;
                }, {
                    valueId: number;
                    originalValueName: string;
                    valueUnit: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                attributeId: number;
                originalAttributeName: string;
                isMandatory: boolean;
                attributeValueList: {
                    valueId: number;
                    originalValueName: string;
                    valueUnit: string;
                }[];
            }, {
                attributeId: number;
                originalAttributeName: string;
                isMandatory: boolean;
                attributeValueList: {
                    valueId: number;
                    originalValueName: string;
                    valueUnit: string;
                }[];
            }>, "many">>;
            priceInfo: z.ZodOptional<z.ZodArray<z.ZodObject<{
                currency: z.ZodString;
                originalPrice: z.ZodNumber;
                currentPrice: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                originalPrice: number;
                currentPrice: number;
            }, {
                currency: string;
                originalPrice: number;
                currentPrice: number;
            }>, "many">>;
            stockInfoV2: z.ZodOptional<z.ZodObject<{
                summaryInfo: z.ZodObject<{
                    totalReservedStock: z.ZodNumber;
                    totalAvailableStock: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                }, {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                }>;
                sellerStock: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    locationId: z.ZodString;
                    stock: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    locationId: string;
                    stock: number;
                }, {
                    locationId: string;
                    stock: number;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock?: {
                    locationId: string;
                    stock: number;
                }[] | undefined;
            }, {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock?: {
                    locationId: string;
                    stock: number;
                }[] | undefined;
            }>>;
            image: z.ZodObject<{
                imageUrlList: z.ZodArray<z.ZodString, "many">;
                imageIdList: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                imageUrlList: string[];
                imageIdList: string[];
            }, {
                imageUrlList: string[];
                imageIdList: string[];
            }>;
            weight: z.ZodString;
            dimension: z.ZodObject<{
                packageLength: z.ZodNumber;
                packageWidth: z.ZodNumber;
                packageHeight: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                packageLength: number;
                packageWidth: number;
                packageHeight: number;
            }, {
                packageLength: number;
                packageWidth: number;
                packageHeight: number;
            }>;
            logisticInfo: z.ZodOptional<z.ZodArray<z.ZodObject<{
                logisticId: z.ZodNumber;
                logisticName: z.ZodString;
                enabled: z.ZodBoolean;
                shippingFee: z.ZodOptional<z.ZodNumber>;
                isFree: z.ZodBoolean;
                estimatedShippingFee: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                logisticId: number;
                logisticName: string;
                enabled: boolean;
                isFree: boolean;
                shippingFee?: number | undefined;
                estimatedShippingFee?: number | undefined;
            }, {
                logisticId: number;
                logisticName: string;
                enabled: boolean;
                isFree: boolean;
                shippingFee?: number | undefined;
                estimatedShippingFee?: number | undefined;
            }>, "many">>;
            preOrder: z.ZodObject<{
                isPreOrder: z.ZodBoolean;
                daysToShip: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                daysToShip: number;
                isPreOrder: boolean;
            }, {
                daysToShip: number;
                isPreOrder: boolean;
            }>;
            condition: z.ZodString;
            sizeChart: z.ZodString;
            itemStatus: z.ZodString;
            hasModel: z.ZodBoolean;
            promotionId: z.ZodOptional<z.ZodNumber>;
            brand: z.ZodObject<{
                brandId: z.ZodNumber;
                originalBrandName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                brandId: number;
                originalBrandName: string;
            }, {
                brandId: number;
                originalBrandName: string;
            }>;
            taxInfo: z.ZodOptional<z.ZodObject<{
                ncm: z.ZodNumber;
                sameStateCfop: z.ZodNumber;
                diffStateCfop: z.ZodNumber;
                csosn: z.ZodNumber;
                origin: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                ncm: number;
                sameStateCfop: number;
                diffStateCfop: number;
                csosn: number;
                origin: number;
            }, {
                ncm: number;
                sameStateCfop: number;
                diffStateCfop: number;
                csosn: number;
                origin: number;
            }>>;
            descriptionType: z.ZodString;
            descriptionInfo: z.ZodOptional<z.ZodObject<{
                extendedDescription: z.ZodOptional<z.ZodObject<{
                    fieldList: z.ZodArray<z.ZodObject<{
                        fieldType: z.ZodString;
                        text: z.ZodOptional<z.ZodString>;
                        imageInfo: z.ZodOptional<z.ZodObject<{
                            imageId: z.ZodString;
                            imageUrl: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            imageUrl: string;
                            imageId: string;
                        }, {
                            imageUrl: string;
                            imageId: string;
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        fieldType: string;
                        text?: string | undefined;
                        imageInfo?: {
                            imageUrl: string;
                            imageId: string;
                        } | undefined;
                    }, {
                        fieldType: string;
                        text?: string | undefined;
                        imageInfo?: {
                            imageUrl: string;
                            imageId: string;
                        } | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    fieldList: {
                        fieldType: string;
                        text?: string | undefined;
                        imageInfo?: {
                            imageUrl: string;
                            imageId: string;
                        } | undefined;
                    }[];
                }, {
                    fieldList: {
                        fieldType: string;
                        text?: string | undefined;
                        imageInfo?: {
                            imageUrl: string;
                            imageId: string;
                        } | undefined;
                    }[];
                }>>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
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
    };
    requestId: string;
    error: string;
    warning: string;
}, {
    message: string;
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
    };
    requestId: string;
    error: string;
    warning: string;
}>;
export declare const getItemBaseInfo: (requestParameters: {
    itemIdList: string;
    needTaxInfo?: boolean | undefined;
    needComplaintPolicy?: boolean | undefined;
}) => Promise<{
    message: string;
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
    };
    requestId: string;
    error: string;
    warning: string;
}>;
//# sourceMappingURL=v2-product-get-item-base-info.d.ts.map