import{z}from"zod";import{buildQuery}from"./libs/index.js";import{API_V2_PRODUCT_GET_MODEL_LIST_PATH}from"./v2-product.constant.js";export const getModelListRequestParametersSchema=z.object({item_id:z.string()});export const getModelListResponseSchema=z.object({error:z.string(),message:z.string(),warning:z.string(),requestId:z.string(),response:z.object({tierVariation:z.array(z.object({name:z.string(),optionList:z.array(z.object({option:z.string()}))})),model:z.array(z.object({modelId:z.number(),modelStatus:z.string(),promotionId:z.number(),tierIndex:z.array(z.number()),priceInfo:z.array(z.object({currentPrice:z.number(),originalPrice:z.number(),inflatedPriceOfCurrentPrice:z.number(),inflatedPriceOfOriginalPrice:z.number()})),modelSku:z.string(),preOrder:z.object({isPreOrder:z.boolean(),daysToShip:z.number()}),stockInfoV2:z.object({summaryInfo:z.object({totalReservedStock:z.number(),totalAvailableStock:z.number()}),sellerStock:z.array(z.object({locationId:z.string(),stock:z.number()}))})}))})});export const getModelList=buildQuery({path:API_V2_PRODUCT_GET_MODEL_LIST_PATH,requestParameterSchema:getModelListRequestParametersSchema,responseSchema:getModelListResponseSchema});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92Mi1wcm9kdWN0LWdldC1tb2RlbC1saXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmltcG9ydCB7IGJ1aWxkUXVlcnkgfSBmcm9tIFwiLi9saWJzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBBUElfVjJfUFJPRFVDVF9HRVRfTU9ERUxfTElTVF9QQVRIIH0gZnJvbSBcIi4vdjItcHJvZHVjdC5jb25zdGFudC5qc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0TW9kZWxMaXN0UmVxdWVzdFBhcmFtZXRlcnNTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGl0ZW1faWQ6IHouc3RyaW5nKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vZGVsTGlzdFJlc3BvbnNlU2NoZW1hID0gei5vYmplY3Qoe1xuICBlcnJvcjogei5zdHJpbmcoKSxcbiAgbWVzc2FnZTogei5zdHJpbmcoKSxcbiAgd2FybmluZzogei5zdHJpbmcoKSxcbiAgcmVxdWVzdElkOiB6LnN0cmluZygpLCAvLyBjaGFuZ2VkIGZyb20gcmVxdWVzdF9pZFxuICByZXNwb25zZTogei5vYmplY3Qoe1xuICAgIHRpZXJWYXJpYXRpb246IHouYXJyYXkoXG4gICAgICAvLyBjaGFuZ2VkIGZyb20gdGllcl92YXJpYXRpb25cbiAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgbmFtZTogei5zdHJpbmcoKSxcbiAgICAgICAgb3B0aW9uTGlzdDogei5hcnJheShcbiAgICAgICAgICAvLyBjaGFuZ2VkIGZyb20gb3B0aW9uX2xpc3RcbiAgICAgICAgICB6Lm9iamVjdCh7XG4gICAgICAgICAgICBvcHRpb246IHouc3RyaW5nKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgIH0pXG4gICAgKSxcbiAgICBtb2RlbDogei5hcnJheShcbiAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgbW9kZWxJZDogei5udW1iZXIoKSwgLy8gY2hhbmdlZCBmcm9tIG1vZGVsX2lkXG4gICAgICAgIG1vZGVsU3RhdHVzOiB6LnN0cmluZygpLCAvLyBjaGFuZ2VkIGZyb20gbW9kZWxfc3RhdHVzXG4gICAgICAgIHByb21vdGlvbklkOiB6Lm51bWJlcigpLCAvLyBjaGFuZ2VkIGZyb20gcHJvbW90aW9uX2lkXG4gICAgICAgIHRpZXJJbmRleDogei5hcnJheSh6Lm51bWJlcigpKSwgLy8gY2hhbmdlZCBmcm9tIHRpZXJfaW5kZXhcbiAgICAgICAgcHJpY2VJbmZvOiB6LmFycmF5KFxuICAgICAgICAgIC8vIGNoYW5nZWQgZnJvbSBwcmljZV9pbmZvXG4gICAgICAgICAgei5vYmplY3Qoe1xuICAgICAgICAgICAgY3VycmVudFByaWNlOiB6Lm51bWJlcigpLCAvLyBjaGFuZ2VkIGZyb20gY3VycmVudF9wcmljZVxuICAgICAgICAgICAgb3JpZ2luYWxQcmljZTogei5udW1iZXIoKSwgLy8gY2hhbmdlZCBmcm9tIG9yaWdpbmFsX3ByaWNlXG4gICAgICAgICAgICBpbmZsYXRlZFByaWNlT2ZDdXJyZW50UHJpY2U6IHoubnVtYmVyKCksIC8vIGNoYW5nZWQgZnJvbSBpbmZsYXRlZF9wcmljZV9vZl9jdXJyZW50X3ByaWNlXG4gICAgICAgICAgICBpbmZsYXRlZFByaWNlT2ZPcmlnaW5hbFByaWNlOiB6Lm51bWJlcigpLCAvLyBjaGFuZ2VkIGZyb20gaW5mbGF0ZWRfcHJpY2Vfb2Zfb3JpZ2luYWxfcHJpY2VcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBtb2RlbFNrdTogei5zdHJpbmcoKSwgLy8gY2hhbmdlZCBmcm9tIG1vZGVsX3NrdVxuICAgICAgICBwcmVPcmRlcjogei5vYmplY3Qoe1xuICAgICAgICAgIC8vIGNoYW5nZWQgZnJvbSBwcmVfb3JkZXJcbiAgICAgICAgICBpc1ByZU9yZGVyOiB6LmJvb2xlYW4oKSwgLy8gY2hhbmdlZCBmcm9tIGlzX3ByZV9vcmRlclxuICAgICAgICAgIGRheXNUb1NoaXA6IHoubnVtYmVyKCksIC8vIGNoYW5nZWQgZnJvbSBkYXlzX3RvX3NoaXBcbiAgICAgICAgfSksXG4gICAgICAgIHN0b2NrSW5mb1YyOiB6Lm9iamVjdCh7XG4gICAgICAgICAgLy8gY2hhbmdlZCBmcm9tIHN0b2NrX2luZm9fdjJcbiAgICAgICAgICBzdW1tYXJ5SW5mbzogei5vYmplY3Qoe1xuICAgICAgICAgICAgLy8gY2hhbmdlZCBmcm9tIHN1bW1hcnlfaW5mb1xuICAgICAgICAgICAgdG90YWxSZXNlcnZlZFN0b2NrOiB6Lm51bWJlcigpLCAvLyBjaGFuZ2VkIGZyb20gdG90YWxfcmVzZXJ2ZWRfc3RvY2tcbiAgICAgICAgICAgIHRvdGFsQXZhaWxhYmxlU3RvY2s6IHoubnVtYmVyKCksIC8vIGNoYW5nZWQgZnJvbSB0b3RhbF9hdmFpbGFibGVfc3RvY2tcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZWxsZXJTdG9jazogei5hcnJheShcbiAgICAgICAgICAgIC8vIGNoYW5nZWQgZnJvbSBzZWxsZXJfc3RvY2tcbiAgICAgICAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgICAgICAgbG9jYXRpb25JZDogei5zdHJpbmcoKSwgLy8gY2hhbmdlZCBmcm9tIGxvY2F0aW9uX2lkXG4gICAgICAgICAgICAgIHN0b2NrOiB6Lm51bWJlcigpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vZGVsTGlzdCA9IGJ1aWxkUXVlcnkoe1xuICBwYXRoOiBBUElfVjJfUFJPRFVDVF9HRVRfTU9ERUxfTElTVF9QQVRILFxuICByZXF1ZXN0UGFyYW1ldGVyU2NoZW1hOiBnZXRNb2RlbExpc3RSZXF1ZXN0UGFyYW1ldGVyc1NjaGVtYSxcbiAgcmVzcG9uc2VTY2hlbWE6IGdldE1vZGVsTGlzdFJlc3BvbnNlU2NoZW1hLFxufSk7XG4iXSwibmFtZXMiOlsieiIsImJ1aWxkUXVlcnkiLCJBUElfVjJfUFJPRFVDVF9HRVRfTU9ERUxfTElTVF9QQVRIIiwiZ2V0TW9kZWxMaXN0UmVxdWVzdFBhcmFtZXRlcnNTY2hlbWEiLCJvYmplY3QiLCJpdGVtX2lkIiwic3RyaW5nIiwiZ2V0TW9kZWxMaXN0UmVzcG9uc2VTY2hlbWEiLCJlcnJvciIsIm1lc3NhZ2UiLCJ3YXJuaW5nIiwicmVxdWVzdElkIiwicmVzcG9uc2UiLCJ0aWVyVmFyaWF0aW9uIiwiYXJyYXkiLCJuYW1lIiwib3B0aW9uTGlzdCIsIm9wdGlvbiIsIm1vZGVsIiwibW9kZWxJZCIsIm51bWJlciIsIm1vZGVsU3RhdHVzIiwicHJvbW90aW9uSWQiLCJ0aWVySW5kZXgiLCJwcmljZUluZm8iLCJjdXJyZW50UHJpY2UiLCJvcmlnaW5hbFByaWNlIiwiaW5mbGF0ZWRQcmljZU9mQ3VycmVudFByaWNlIiwiaW5mbGF0ZWRQcmljZU9mT3JpZ2luYWxQcmljZSIsIm1vZGVsU2t1IiwicHJlT3JkZXIiLCJpc1ByZU9yZGVyIiwiYm9vbGVhbiIsImRheXNUb1NoaXAiLCJzdG9ja0luZm9WMiIsInN1bW1hcnlJbmZvIiwidG90YWxSZXNlcnZlZFN0b2NrIiwidG90YWxBdmFpbGFibGVTdG9jayIsInNlbGxlclN0b2NrIiwibG9jYXRpb25JZCIsInN0b2NrIiwiZ2V0TW9kZWxMaXN0IiwicGF0aCIsInJlcXVlc3RQYXJhbWV0ZXJTY2hlbWEiLCJyZXNwb25zZVNjaGVtYSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBU0EsQ0FBQyxLQUFRLEtBQU0sQUFFeEIsUUFBU0MsVUFBVSxLQUFRLGlCQUFrQixBQUM3QyxRQUFTQyxrQ0FBa0MsS0FBUSwwQkFBMkIsQUFFOUUsUUFBTyxNQUFNQyxvQ0FBc0NILEVBQUVJLE1BQU0sQ0FBQyxDQUMxREMsUUFBU0wsRUFBRU0sTUFBTSxFQUNuQixFQUFHLEFBRUgsUUFBTyxNQUFNQywyQkFBNkJQLEVBQUVJLE1BQU0sQ0FBQyxDQUNqREksTUFBT1IsRUFBRU0sTUFBTSxHQUNmRyxRQUFTVCxFQUFFTSxNQUFNLEdBQ2pCSSxRQUFTVixFQUFFTSxNQUFNLEdBQ2pCSyxVQUFXWCxFQUFFTSxNQUFNLEdBQ25CTSxTQUFVWixFQUFFSSxNQUFNLENBQUMsQ0FDakJTLGNBQWViLEVBQUVjLEtBQUssQ0FFcEJkLEVBQUVJLE1BQU0sQ0FBQyxDQUNQVyxLQUFNZixFQUFFTSxNQUFNLEdBQ2RVLFdBQVloQixFQUFFYyxLQUFLLENBRWpCZCxFQUFFSSxNQUFNLENBQUMsQ0FDUGEsT0FBUWpCLEVBQUVNLE1BQU0sRUFDbEIsR0FFSixJQUVGWSxNQUFPbEIsRUFBRWMsS0FBSyxDQUNaZCxFQUFFSSxNQUFNLENBQUMsQ0FDUGUsUUFBU25CLEVBQUVvQixNQUFNLEdBQ2pCQyxZQUFhckIsRUFBRU0sTUFBTSxHQUNyQmdCLFlBQWF0QixFQUFFb0IsTUFBTSxHQUNyQkcsVUFBV3ZCLEVBQUVjLEtBQUssQ0FBQ2QsRUFBRW9CLE1BQU0sSUFDM0JJLFVBQVd4QixFQUFFYyxLQUFLLENBRWhCZCxFQUFFSSxNQUFNLENBQUMsQ0FDUHFCLGFBQWN6QixFQUFFb0IsTUFBTSxHQUN0Qk0sY0FBZTFCLEVBQUVvQixNQUFNLEdBQ3ZCTyw0QkFBNkIzQixFQUFFb0IsTUFBTSxHQUNyQ1EsNkJBQThCNUIsRUFBRW9CLE1BQU0sRUFDeEMsSUFFRlMsU0FBVTdCLEVBQUVNLE1BQU0sR0FDbEJ3QixTQUFVOUIsRUFBRUksTUFBTSxDQUFDLENBRWpCMkIsV0FBWS9CLEVBQUVnQyxPQUFPLEdBQ3JCQyxXQUFZakMsRUFBRW9CLE1BQU0sRUFDdEIsR0FDQWMsWUFBYWxDLEVBQUVJLE1BQU0sQ0FBQyxDQUVwQitCLFlBQWFuQyxFQUFFSSxNQUFNLENBQUMsQ0FFcEJnQyxtQkFBb0JwQyxFQUFFb0IsTUFBTSxHQUM1QmlCLG9CQUFxQnJDLEVBQUVvQixNQUFNLEVBQy9CLEdBQ0FrQixZQUFhdEMsRUFBRWMsS0FBSyxDQUVsQmQsRUFBRUksTUFBTSxDQUFDLENBQ1BtQyxXQUFZdkMsRUFBRU0sTUFBTSxHQUNwQmtDLE1BQU94QyxFQUFFb0IsTUFBTSxFQUNqQixHQUVKLEVBQ0YsR0FFSixFQUNGLEVBQUcsQUFFSCxRQUFPLE1BQU1xQixhQUFleEMsV0FBVyxDQUNyQ3lDLEtBQU14QyxtQ0FDTnlDLHVCQUF3QnhDLG9DQUN4QnlDLGVBQWdCckMsMEJBQ2xCLEVBQUcifQ==