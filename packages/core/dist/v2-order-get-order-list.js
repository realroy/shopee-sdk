import{z}from"zod";import{buildQuery}from"./libs/index.js";import{API_V2_ORDER_GET_ORDER_LIST_PATH,V2_ORDER_STATUS}from"./v2-order.constant.js";export const getOrderListRequestParametersSchema=z.object({timeRangeField:z.enum(["create_time","update_time"]),timeFrom:z.date(),timeTo:z.date(),pageSize:z.number().min(1).max(100),cursor:z.string().optional(),orderStatus:z.enum(V2_ORDER_STATUS).optional(),responseOptionalFields:z.enum(["order_status"]).optional().default("order_status")});export const getOrderListResponseSchema=z.object({error:z.string().optional(),message:z.string().optional(),response:z.object({more:z.boolean(),nextCursor:z.string(),orderList:z.array(z.object({orderSn:z.string()}))}).optional(),requestId:z.string()});export const getOrderList=buildQuery({path:API_V2_ORDER_GET_ORDER_LIST_PATH,requestParameterSchema:getOrderListRequestParametersSchema,responseSchema:getOrderListResponseSchema});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92Mi1vcmRlci1nZXQtb3JkZXItbGlzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5pbXBvcnQgeyBidWlsZFF1ZXJ5IH0gZnJvbSBcIi4vbGlicy9pbmRleC5qc1wiO1xuaW1wb3J0IHtcbiAgQVBJX1YyX09SREVSX0dFVF9PUkRFUl9MSVNUX1BBVEgsXG4gIFYyX09SREVSX1NUQVRVUyxcbn0gZnJvbSBcIi4vdjItb3JkZXIuY29uc3RhbnQuanNcIjtcblxuZXhwb3J0IGNvbnN0IGdldE9yZGVyTGlzdFJlcXVlc3RQYXJhbWV0ZXJzU2NoZW1hID0gei5vYmplY3Qoe1xuICB0aW1lUmFuZ2VGaWVsZDogei5lbnVtKFtcImNyZWF0ZV90aW1lXCIsIFwidXBkYXRlX3RpbWVcIl0pLFxuICB0aW1lRnJvbTogei5kYXRlKCksXG4gIHRpbWVUbzogei5kYXRlKCksXG4gIHBhZ2VTaXplOiB6Lm51bWJlcigpLm1pbigxKS5tYXgoMTAwKSxcbiAgY3Vyc29yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG9yZGVyU3RhdHVzOiB6LmVudW0oVjJfT1JERVJfU1RBVFVTKS5vcHRpb25hbCgpLFxuICByZXNwb25zZU9wdGlvbmFsRmllbGRzOiB6XG4gICAgLmVudW0oW1wib3JkZXJfc3RhdHVzXCJdKVxuICAgIC5vcHRpb25hbCgpXG4gICAgLmRlZmF1bHQoXCJvcmRlcl9zdGF0dXNcIiksXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE9yZGVyTGlzdFJlc3BvbnNlU2NoZW1hID0gei5vYmplY3Qoe1xuICBlcnJvcjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBtZXNzYWdlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIHJlc3BvbnNlOiB6XG4gICAgLm9iamVjdCh7XG4gICAgICBtb3JlOiB6LmJvb2xlYW4oKSxcbiAgICAgIG5leHRDdXJzb3I6IHouc3RyaW5nKCksXG4gICAgICBvcmRlckxpc3Q6IHouYXJyYXkoXG4gICAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgICBvcmRlclNuOiB6LnN0cmluZygpLFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICB9KVxuICAgIC5vcHRpb25hbCgpLFxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE9yZGVyTGlzdCA9IGJ1aWxkUXVlcnkoe1xuICBwYXRoOiBBUElfVjJfT1JERVJfR0VUX09SREVSX0xJU1RfUEFUSCxcbiAgcmVxdWVzdFBhcmFtZXRlclNjaGVtYTogZ2V0T3JkZXJMaXN0UmVxdWVzdFBhcmFtZXRlcnNTY2hlbWEsXG4gIHJlc3BvbnNlU2NoZW1hOiBnZXRPcmRlckxpc3RSZXNwb25zZVNjaGVtYSxcbn0pO1xuIl0sIm5hbWVzIjpbInoiLCJidWlsZFF1ZXJ5IiwiQVBJX1YyX09SREVSX0dFVF9PUkRFUl9MSVNUX1BBVEgiLCJWMl9PUkRFUl9TVEFUVVMiLCJnZXRPcmRlckxpc3RSZXF1ZXN0UGFyYW1ldGVyc1NjaGVtYSIsIm9iamVjdCIsInRpbWVSYW5nZUZpZWxkIiwiZW51bSIsInRpbWVGcm9tIiwiZGF0ZSIsInRpbWVUbyIsInBhZ2VTaXplIiwibnVtYmVyIiwibWluIiwibWF4IiwiY3Vyc29yIiwic3RyaW5nIiwib3B0aW9uYWwiLCJvcmRlclN0YXR1cyIsInJlc3BvbnNlT3B0aW9uYWxGaWVsZHMiLCJkZWZhdWx0IiwiZ2V0T3JkZXJMaXN0UmVzcG9uc2VTY2hlbWEiLCJlcnJvciIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsIm1vcmUiLCJib29sZWFuIiwibmV4dEN1cnNvciIsIm9yZGVyTGlzdCIsImFycmF5Iiwib3JkZXJTbiIsInJlcXVlc3RJZCIsImdldE9yZGVyTGlzdCIsInBhdGgiLCJyZXF1ZXN0UGFyYW1ldGVyU2NoZW1hIiwicmVzcG9uc2VTY2hlbWEiXSwibWFwcGluZ3MiOiJBQUFBLE9BQVNBLENBQUMsS0FBUSxLQUFNLEFBRXhCLFFBQVNDLFVBQVUsS0FBUSxpQkFBa0IsQUFDN0MsUUFDRUMsZ0NBQWdDLENBQ2hDQyxlQUFlLEtBQ1Ysd0JBQXlCLEFBRWhDLFFBQU8sTUFBTUMsb0NBQXNDSixFQUFFSyxNQUFNLENBQUMsQ0FDMURDLGVBQWdCTixFQUFFTyxJQUFJLENBQUMsQ0FBQyxjQUFlLGNBQWMsRUFDckRDLFNBQVVSLEVBQUVTLElBQUksR0FDaEJDLE9BQVFWLEVBQUVTLElBQUksR0FDZEUsU0FBVVgsRUFBRVksTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBR0MsR0FBRyxDQUFDLEtBQ2hDQyxPQUFRZixFQUFFZ0IsTUFBTSxHQUFHQyxRQUFRLEdBQzNCQyxZQUFhbEIsRUFBRU8sSUFBSSxDQUFDSixpQkFBaUJjLFFBQVEsR0FDN0NFLHVCQUF3Qm5CLEVBQ3JCTyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQ3JCVSxRQUFRLEdBQ1JHLE9BQU8sQ0FBQyxlQUNiLEVBQUcsQUFFSCxRQUFPLE1BQU1DLDJCQUE2QnJCLEVBQUVLLE1BQU0sQ0FBQyxDQUNqRGlCLE1BQU90QixFQUFFZ0IsTUFBTSxHQUFHQyxRQUFRLEdBQzFCTSxRQUFTdkIsRUFBRWdCLE1BQU0sR0FBR0MsUUFBUSxHQUM1Qk8sU0FBVXhCLEVBQ1BLLE1BQU0sQ0FBQyxDQUNOb0IsS0FBTXpCLEVBQUUwQixPQUFPLEdBQ2ZDLFdBQVkzQixFQUFFZ0IsTUFBTSxHQUNwQlksVUFBVzVCLEVBQUU2QixLQUFLLENBQ2hCN0IsRUFBRUssTUFBTSxDQUFDLENBQ1B5QixRQUFTOUIsRUFBRWdCLE1BQU0sRUFDbkIsR0FFSixHQUNDQyxRQUFRLEdBQ1hjLFVBQVcvQixFQUFFZ0IsTUFBTSxFQUNyQixFQUFHLEFBRUgsUUFBTyxNQUFNZ0IsYUFBZS9CLFdBQVcsQ0FDckNnQyxLQUFNL0IsaUNBQ05nQyx1QkFBd0I5QixvQ0FDeEIrQixlQUFnQmQsMEJBQ2xCLEVBQUcifQ==