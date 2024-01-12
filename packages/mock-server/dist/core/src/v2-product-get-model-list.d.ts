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
    requestId: z.ZodString;
    response: z.ZodObject<{
        tierVariation: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            optionList: z.ZodArray<z.ZodObject<{
                option: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                option: string;
            }, {
                option: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            name: string;
            optionList: {
                option: string;
            }[];
        }, {
            name: string;
            optionList: {
                option: string;
            }[];
        }>, "many">;
        model: z.ZodArray<z.ZodObject<{
            modelId: z.ZodNumber;
            modelStatus: z.ZodString;
            promotionId: z.ZodNumber;
            tierIndex: z.ZodArray<z.ZodNumber, "many">;
            priceInfo: z.ZodArray<z.ZodObject<{
                currentPrice: z.ZodNumber;
                originalPrice: z.ZodNumber;
                inflatedPriceOfCurrentPrice: z.ZodNumber;
                inflatedPriceOfOriginalPrice: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                originalPrice: number;
                currentPrice: number;
                inflatedPriceOfCurrentPrice: number;
                inflatedPriceOfOriginalPrice: number;
            }, {
                originalPrice: number;
                currentPrice: number;
                inflatedPriceOfCurrentPrice: number;
                inflatedPriceOfOriginalPrice: number;
            }>, "many">;
            modelSku: z.ZodString;
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
            stockInfoV2: z.ZodObject<{
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
                sellerStock: z.ZodArray<z.ZodObject<{
                    locationId: z.ZodString;
                    stock: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    locationId: string;
                    stock: number;
                }, {
                    locationId: string;
                    stock: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock: {
                    locationId: string;
                    stock: number;
                }[];
            }, {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock: {
                    locationId: string;
                    stock: number;
                }[];
            }>;
        }, "strip", z.ZodTypeAny, {
            modelId: number;
            modelSku: string;
            promotionId: number;
            priceInfo: {
                originalPrice: number;
                currentPrice: number;
                inflatedPriceOfCurrentPrice: number;
                inflatedPriceOfOriginalPrice: number;
            }[];
            stockInfoV2: {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock: {
                    locationId: string;
                    stock: number;
                }[];
            };
            preOrder: {
                daysToShip: number;
                isPreOrder: boolean;
            };
            modelStatus: string;
            tierIndex: number[];
        }, {
            modelId: number;
            modelSku: string;
            promotionId: number;
            priceInfo: {
                originalPrice: number;
                currentPrice: number;
                inflatedPriceOfCurrentPrice: number;
                inflatedPriceOfOriginalPrice: number;
            }[];
            stockInfoV2: {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock: {
                    locationId: string;
                    stock: number;
                }[];
            };
            preOrder: {
                daysToShip: number;
                isPreOrder: boolean;
            };
            modelStatus: string;
            tierIndex: number[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        tierVariation: {
            name: string;
            optionList: {
                option: string;
            }[];
        }[];
        model: {
            modelId: number;
            modelSku: string;
            promotionId: number;
            priceInfo: {
                originalPrice: number;
                currentPrice: number;
                inflatedPriceOfCurrentPrice: number;
                inflatedPriceOfOriginalPrice: number;
            }[];
            stockInfoV2: {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock: {
                    locationId: string;
                    stock: number;
                }[];
            };
            preOrder: {
                daysToShip: number;
                isPreOrder: boolean;
            };
            modelStatus: string;
            tierIndex: number[];
        }[];
    }, {
        tierVariation: {
            name: string;
            optionList: {
                option: string;
            }[];
        }[];
        model: {
            modelId: number;
            modelSku: string;
            promotionId: number;
            priceInfo: {
                originalPrice: number;
                currentPrice: number;
                inflatedPriceOfCurrentPrice: number;
                inflatedPriceOfOriginalPrice: number;
            }[];
            stockInfoV2: {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock: {
                    locationId: string;
                    stock: number;
                }[];
            };
            preOrder: {
                daysToShip: number;
                isPreOrder: boolean;
            };
            modelStatus: string;
            tierIndex: number[];
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    response: {
        tierVariation: {
            name: string;
            optionList: {
                option: string;
            }[];
        }[];
        model: {
            modelId: number;
            modelSku: string;
            promotionId: number;
            priceInfo: {
                originalPrice: number;
                currentPrice: number;
                inflatedPriceOfCurrentPrice: number;
                inflatedPriceOfOriginalPrice: number;
            }[];
            stockInfoV2: {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock: {
                    locationId: string;
                    stock: number;
                }[];
            };
            preOrder: {
                daysToShip: number;
                isPreOrder: boolean;
            };
            modelStatus: string;
            tierIndex: number[];
        }[];
    };
    requestId: string;
    error: string;
    warning: string;
}, {
    message: string;
    response: {
        tierVariation: {
            name: string;
            optionList: {
                option: string;
            }[];
        }[];
        model: {
            modelId: number;
            modelSku: string;
            promotionId: number;
            priceInfo: {
                originalPrice: number;
                currentPrice: number;
                inflatedPriceOfCurrentPrice: number;
                inflatedPriceOfOriginalPrice: number;
            }[];
            stockInfoV2: {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock: {
                    locationId: string;
                    stock: number;
                }[];
            };
            preOrder: {
                daysToShip: number;
                isPreOrder: boolean;
            };
            modelStatus: string;
            tierIndex: number[];
        }[];
    };
    requestId: string;
    error: string;
    warning: string;
}>;
export declare const getModelList: (requestParameters: {
    item_id: string;
}) => Promise<{
    message: string;
    response: {
        tierVariation: {
            name: string;
            optionList: {
                option: string;
            }[];
        }[];
        model: {
            modelId: number;
            modelSku: string;
            promotionId: number;
            priceInfo: {
                originalPrice: number;
                currentPrice: number;
                inflatedPriceOfCurrentPrice: number;
                inflatedPriceOfOriginalPrice: number;
            }[];
            stockInfoV2: {
                summaryInfo: {
                    totalReservedStock: number;
                    totalAvailableStock: number;
                };
                sellerStock: {
                    locationId: string;
                    stock: number;
                }[];
            };
            preOrder: {
                daysToShip: number;
                isPreOrder: boolean;
            };
            modelStatus: string;
            tierIndex: number[];
        }[];
    };
    requestId: string;
    error: string;
    warning: string;
}>;
//# sourceMappingURL=v2-product-get-model-list.d.ts.map