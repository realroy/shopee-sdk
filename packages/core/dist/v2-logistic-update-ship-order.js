import{z}from"zod";import{buildMutation}from"./libs/index.js";import{API_V2_LOGISTIC_UPDATE_SHIP_ORDER}from"./v2-logistic.constant.js";export const logisticUpdateShipOrderRequestParameterSchema=z.object({orderSn:z.string(),packageNumber:z.string().optional().nullable().default(null),pickup:z.object({addressId:z.number(),pickupTimeId:z.string()})});export const logisticUpdateShipOrderResponseSchema=z.object({error:z.string().optional(),message:z.string().optional(),requestId:z.string()});export const updateShipOrder=buildMutation({path:API_V2_LOGISTIC_UPDATE_SHIP_ORDER,requestParameterSchema:logisticUpdateShipOrderRequestParameterSchema,responseSchema:logisticUpdateShipOrderResponseSchema});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92Mi1sb2dpc3RpYy11cGRhdGUtc2hpcC1vcmRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5pbXBvcnQgeyBidWlsZE11dGF0aW9uIH0gZnJvbSBcIi4vbGlicy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgQVBJX1YyX0xPR0lTVElDX1VQREFURV9TSElQX09SREVSIH0gZnJvbSBcIi4vdjItbG9naXN0aWMuY29uc3RhbnQuanNcIjtcblxuZXhwb3J0IGNvbnN0IGxvZ2lzdGljVXBkYXRlU2hpcE9yZGVyUmVxdWVzdFBhcmFtZXRlclNjaGVtYSA9IHoub2JqZWN0KHtcbiAgb3JkZXJTbjogei5zdHJpbmcoKSxcbiAgcGFja2FnZU51bWJlcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLm51bGxhYmxlKCkuZGVmYXVsdChudWxsKSxcbiAgcGlja3VwOiB6Lm9iamVjdCh7XG4gICAgYWRkcmVzc0lkOiB6Lm51bWJlcigpLFxuICAgIHBpY2t1cFRpbWVJZDogei5zdHJpbmcoKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2lzdGljVXBkYXRlU2hpcE9yZGVyUmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGVycm9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG1lc3NhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgcmVxdWVzdElkOiB6LnN0cmluZygpLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTaGlwT3JkZXIgPSBidWlsZE11dGF0aW9uKHtcbiAgcGF0aDogQVBJX1YyX0xPR0lTVElDX1VQREFURV9TSElQX09SREVSLFxuICByZXF1ZXN0UGFyYW1ldGVyU2NoZW1hOiBsb2dpc3RpY1VwZGF0ZVNoaXBPcmRlclJlcXVlc3RQYXJhbWV0ZXJTY2hlbWEsXG4gIHJlc3BvbnNlU2NoZW1hOiBsb2dpc3RpY1VwZGF0ZVNoaXBPcmRlclJlc3BvbnNlU2NoZW1hLFxufSk7XG4iXSwibmFtZXMiOlsieiIsImJ1aWxkTXV0YXRpb24iLCJBUElfVjJfTE9HSVNUSUNfVVBEQVRFX1NISVBfT1JERVIiLCJsb2dpc3RpY1VwZGF0ZVNoaXBPcmRlclJlcXVlc3RQYXJhbWV0ZXJTY2hlbWEiLCJvYmplY3QiLCJvcmRlclNuIiwic3RyaW5nIiwicGFja2FnZU51bWJlciIsIm9wdGlvbmFsIiwibnVsbGFibGUiLCJkZWZhdWx0IiwicGlja3VwIiwiYWRkcmVzc0lkIiwibnVtYmVyIiwicGlja3VwVGltZUlkIiwibG9naXN0aWNVcGRhdGVTaGlwT3JkZXJSZXNwb25zZVNjaGVtYSIsImVycm9yIiwibWVzc2FnZSIsInJlcXVlc3RJZCIsInVwZGF0ZVNoaXBPcmRlciIsInBhdGgiLCJyZXF1ZXN0UGFyYW1ldGVyU2NoZW1hIiwicmVzcG9uc2VTY2hlbWEiXSwibWFwcGluZ3MiOiJBQUFBLE9BQVNBLENBQUMsS0FBUSxLQUFNLEFBRXhCLFFBQVNDLGFBQWEsS0FBUSxpQkFBa0IsQUFDaEQsUUFBU0MsaUNBQWlDLEtBQVEsMkJBQTRCLEFBRTlFLFFBQU8sTUFBTUMsOENBQWdESCxFQUFFSSxNQUFNLENBQUMsQ0FDcEVDLFFBQVNMLEVBQUVNLE1BQU0sR0FDakJDLGNBQWVQLEVBQUVNLE1BQU0sR0FBR0UsUUFBUSxHQUFHQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxNQUN4REMsT0FBUVgsRUFBRUksTUFBTSxDQUFDLENBQ2ZRLFVBQVdaLEVBQUVhLE1BQU0sR0FDbkJDLGFBQWNkLEVBQUVNLE1BQU0sRUFDeEIsRUFDRixFQUFHLEFBRUgsUUFBTyxNQUFNUyxzQ0FBd0NmLEVBQUVJLE1BQU0sQ0FBQyxDQUM1RFksTUFBT2hCLEVBQUVNLE1BQU0sR0FBR0UsUUFBUSxHQUMxQlMsUUFBU2pCLEVBQUVNLE1BQU0sR0FBR0UsUUFBUSxHQUM1QlUsVUFBV2xCLEVBQUVNLE1BQU0sRUFDckIsRUFBRyxBQUVILFFBQU8sTUFBTWEsZ0JBQWtCbEIsY0FBYyxDQUMzQ21CLEtBQU1sQixrQ0FDTm1CLHVCQUF3QmxCLDhDQUN4Qm1CLGVBQWdCUCxxQ0FDbEIsRUFBRyJ9