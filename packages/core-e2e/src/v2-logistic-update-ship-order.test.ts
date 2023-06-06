import { describe, expect, it } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/logistic/update-ship-order", async () => {
  const shopeeSdk = new ShopeeSdk({});
  const now = new Date();

  const getOrderListResponse = await shopeeSdk.v2.order.getOrderList({
    timeFrom: new Date(new Date().setDate(now.getDate() - 1)),
    timeTo: now,
    pageSize: 10,
    orderStatus: 'PROCESSED',
    timeRangeField: "create_time",
    responseOptionalFields: "order_status",
  });

  const orderList = getOrderListResponse.response?.orderList;
  const orderSn = orderList?.[0]?.orderSn as string;

  const getShippingParameter = await shopeeSdk.v2.logistic.getShippingParameter(
    { orderSn }
  );

  it("should receive successfully response", async () => {
    const orderList = getOrderListResponse.response?.orderList;
    const orderSn = orderList?.[0]?.orderSn as string;

    const selectedAddressIndex = 0;

    const addressId =
      getShippingParameter.response?.pickup.addressList[selectedAddressIndex]
        ?.addressId as number;

    const selectedPickupIndex = 0;
    const pickupTimeId =
      getShippingParameter.response?.pickup.timeSlotList[selectedPickupIndex]
        ?.pickupTimeId as string;

    const response = await shopeeSdk.v2.logistic.updateShipOrder({
      orderSn,
      pickup: { addressId, pickupTimeId },
    });

    expect(response.error).toHaveLength(0);
  });
});
