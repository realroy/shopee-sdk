import { describe, expect, it } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/logistic/ship-order", async () => {
  const shopeeSdk = new ShopeeSdk({});
  const now = new Date();

  const getOrderListResponse = await shopeeSdk.v2.order.getOrderList({
    timeFrom: new Date(new Date().setDate(now.getDate() - 1)),
    timeTo: now,
    pageSize: 10,
    orderStatus: "PROCESSED",
    timeRangeField: "create_time",
    responseOptionalFields: "order_status",
  });

  const orderList = getOrderListResponse.response?.orderList;
  const orderSn = orderList?.[0]?.orderSn as string;

  const getShippingParameter = await shopeeSdk.v2.logistic.getShippingParameter(
    { orderSn }
  );

  it("should receive successfully dropoff response", async () => {
    const infoNeeded = getShippingParameter.response?.infoNeeded;
    const dropoff = getShippingParameter.response?.dropoff;

    let branchId;
    let senderRealName;
    let trackingNumber;

    if (infoNeeded?.dropoff.length === 1) {
      trackingNumber = infoNeeded.dropoff[0];
    }

    if (infoNeeded?.dropoff.length === 2) {
      branchId = infoNeeded.dropoff[0];
      senderRealName = infoNeeded.dropoff[1];
    }

    const response = await shopeeSdk.v2.logistic.shipOrder({
      orderSn,
      dropoff: {
        branchId: dropoff?.branchList[0]?.branch_id,
        senderRealName,
        trackingNumber,
        slug: dropoff?.slugList[0]?.slug,
      },
    });

    expect(response.error).toHaveLength(0);
  });

  it("should receive successfully pickup response", async () => {
    const infoNeeded = getShippingParameter.response?.infoNeeded;
    const pickup = getShippingParameter.response?.pickup;

    const response = await shopeeSdk.v2.logistic.shipOrder({
      orderSn,
      pickup: {
        addressId: pickup?.addressList[0]?.addressId,
        pickupTimeId: pickup?.timeSlotList[0]?.pickupTimeId,
        trackingNumber: infoNeeded?.pickup[0],
      },
    });

    expect(response.error).toHaveLength(0);
  });

  it("should receive successfully pickup response", async () => {
    const infoNeeded = getShippingParameter.response?.infoNeeded;
    const response = await shopeeSdk.v2.logistic.shipOrder({
      orderSn,
      nonIntegrated: {
        trackingNumber: infoNeeded?.nonIntegrated[0],
      }
    });

    expect(response.error).toHaveLength(0);
  });
});
