import{z}from"zod";import{buildMutation}from"./libs/index.js";import{API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT,V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,V2_LOGISTIC_SHIPPING_STATUSES}from"./v2-logistic.constant.js";export const logisticGetShippingDocumentResultRequestParameterSchema=z.object({orderList:z.array(z.object({orderSn:z.string(),packageNumber:z.string().optional(),shippingDocumentType:z.enum(V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES).optional()})).max(50)});export const logisticGetShippingDocumentResultResponseSchema=z.object({error:z.string().optional(),message:z.string().optional(),warning:z.object({orderSn:z.string(),packageNumber:z.number().optional()}).optional(),response:z.object({orderSn:z.string(),packageNumber:z.string(),status:z.enum(V2_LOGISTIC_SHIPPING_STATUSES),failError:z.string(),failMessage:z.string()}).optional(),requestId:z.string()});export const getShippingDocumentResult=buildMutation({path:API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT,requestParameterSchema:logisticGetShippingDocumentResultRequestParameterSchema,responseSchema:logisticGetShippingDocumentResultResponseSchema});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92Mi1sb2dpc3RpYy1nZXQtc2hpcHBpbmctZG9jdW1lbnQtcmVzdWx0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmltcG9ydCB7IGJ1aWxkTXV0YXRpb24gfSBmcm9tIFwiLi9saWJzL2luZGV4LmpzXCI7XG5pbXBvcnQge1xuICBBUElfVjJfTE9HSVNUSUNfR0VUX1NISVBQSU5HX0RPQ1VNRU5UX1JFU1VMVCxcbiAgVjJfTE9HSVNUSUNfU0hJUFBJTkdfRE9DVU1FTlRfVFlQRVMsXG4gIFYyX0xPR0lTVElDX1NISVBQSU5HX1NUQVRVU0VTLFxufSBmcm9tIFwiLi92Mi1sb2dpc3RpYy5jb25zdGFudC5qc1wiO1xuXG5leHBvcnQgY29uc3QgbG9naXN0aWNHZXRTaGlwcGluZ0RvY3VtZW50UmVzdWx0UmVxdWVzdFBhcmFtZXRlclNjaGVtYSA9IHoub2JqZWN0KFxuICB7XG4gICAgb3JkZXJMaXN0OiB6XG4gICAgICAuYXJyYXkoXG4gICAgICAgIHoub2JqZWN0KHtcbiAgICAgICAgICBvcmRlclNuOiB6LnN0cmluZygpLFxuICAgICAgICAgIHBhY2thZ2VOdW1iZXI6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICAgICAgICBzaGlwcGluZ0RvY3VtZW50VHlwZTogelxuICAgICAgICAgICAgLmVudW0oVjJfTE9HSVNUSUNfU0hJUFBJTkdfRE9DVU1FTlRfVFlQRVMpXG4gICAgICAgICAgICAub3B0aW9uYWwoKSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5tYXgoNTApLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgbG9naXN0aWNHZXRTaGlwcGluZ0RvY3VtZW50UmVzdWx0UmVzcG9uc2VTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGVycm9yOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIG1lc3NhZ2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgd2FybmluZzogelxuICAgIC5vYmplY3Qoe1xuICAgICAgb3JkZXJTbjogei5zdHJpbmcoKSxcbiAgICAgIHBhY2thZ2VOdW1iZXI6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbiAgICB9KVxuICAgIC5vcHRpb25hbCgpLFxuICByZXNwb25zZTogelxuICAgIC5vYmplY3Qoe1xuICAgICAgb3JkZXJTbjogei5zdHJpbmcoKSxcbiAgICAgIHBhY2thZ2VOdW1iZXI6IHouc3RyaW5nKCksXG4gICAgICBzdGF0dXM6IHouZW51bShWMl9MT0dJU1RJQ19TSElQUElOR19TVEFUVVNFUyksXG4gICAgICBmYWlsRXJyb3I6IHouc3RyaW5nKCksXG4gICAgICBmYWlsTWVzc2FnZTogei5zdHJpbmcoKSxcbiAgICB9KVxuICAgIC5vcHRpb25hbCgpLFxuICByZXF1ZXN0SWQ6IHouc3RyaW5nKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFNoaXBwaW5nRG9jdW1lbnRSZXN1bHQgPSBidWlsZE11dGF0aW9uKHtcbiAgcGF0aDogQVBJX1YyX0xPR0lTVElDX0dFVF9TSElQUElOR19ET0NVTUVOVF9SRVNVTFQsXG4gIHJlcXVlc3RQYXJhbWV0ZXJTY2hlbWE6XG4gICAgbG9naXN0aWNHZXRTaGlwcGluZ0RvY3VtZW50UmVzdWx0UmVxdWVzdFBhcmFtZXRlclNjaGVtYSxcbiAgcmVzcG9uc2VTY2hlbWE6IGxvZ2lzdGljR2V0U2hpcHBpbmdEb2N1bWVudFJlc3VsdFJlc3BvbnNlU2NoZW1hLFxufSk7XG4iXSwibmFtZXMiOlsieiIsImJ1aWxkTXV0YXRpb24iLCJBUElfVjJfTE9HSVNUSUNfR0VUX1NISVBQSU5HX0RPQ1VNRU5UX1JFU1VMVCIsIlYyX0xPR0lTVElDX1NISVBQSU5HX0RPQ1VNRU5UX1RZUEVTIiwiVjJfTE9HSVNUSUNfU0hJUFBJTkdfU1RBVFVTRVMiLCJsb2dpc3RpY0dldFNoaXBwaW5nRG9jdW1lbnRSZXN1bHRSZXF1ZXN0UGFyYW1ldGVyU2NoZW1hIiwib2JqZWN0Iiwib3JkZXJMaXN0IiwiYXJyYXkiLCJvcmRlclNuIiwic3RyaW5nIiwicGFja2FnZU51bWJlciIsIm9wdGlvbmFsIiwic2hpcHBpbmdEb2N1bWVudFR5cGUiLCJlbnVtIiwibWF4IiwibG9naXN0aWNHZXRTaGlwcGluZ0RvY3VtZW50UmVzdWx0UmVzcG9uc2VTY2hlbWEiLCJlcnJvciIsIm1lc3NhZ2UiLCJ3YXJuaW5nIiwibnVtYmVyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJmYWlsRXJyb3IiLCJmYWlsTWVzc2FnZSIsInJlcXVlc3RJZCIsImdldFNoaXBwaW5nRG9jdW1lbnRSZXN1bHQiLCJwYXRoIiwicmVxdWVzdFBhcmFtZXRlclNjaGVtYSIsInJlc3BvbnNlU2NoZW1hIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFTQSxDQUFDLEtBQVEsS0FBTSxBQUV4QixRQUFTQyxhQUFhLEtBQVEsaUJBQWtCLEFBQ2hELFFBQ0VDLDRDQUE0QyxDQUM1Q0MsbUNBQW1DLENBQ25DQyw2QkFBNkIsS0FDeEIsMkJBQTRCLEFBRW5DLFFBQU8sTUFBTUMsd0RBQTBETCxFQUFFTSxNQUFNLENBQzdFLENBQ0VDLFVBQVdQLEVBQ1JRLEtBQUssQ0FDSlIsRUFBRU0sTUFBTSxDQUFDLENBQ1BHLFFBQVNULEVBQUVVLE1BQU0sR0FDakJDLGNBQWVYLEVBQUVVLE1BQU0sR0FBR0UsUUFBUSxHQUNsQ0MscUJBQXNCYixFQUNuQmMsSUFBSSxDQUFDWCxxQ0FDTFMsUUFBUSxFQUNiLElBRURHLEdBQUcsQ0FBQyxHQUNULEVBQ0EsQUFFRixRQUFPLE1BQU1DLGdEQUFrRGhCLEVBQUVNLE1BQU0sQ0FBQyxDQUN0RVcsTUFBT2pCLEVBQUVVLE1BQU0sR0FBR0UsUUFBUSxHQUMxQk0sUUFBU2xCLEVBQUVVLE1BQU0sR0FBR0UsUUFBUSxHQUM1Qk8sUUFBU25CLEVBQ05NLE1BQU0sQ0FBQyxDQUNORyxRQUFTVCxFQUFFVSxNQUFNLEdBQ2pCQyxjQUFlWCxFQUFFb0IsTUFBTSxHQUFHUixRQUFRLEVBQ3BDLEdBQ0NBLFFBQVEsR0FDWFMsU0FBVXJCLEVBQ1BNLE1BQU0sQ0FBQyxDQUNORyxRQUFTVCxFQUFFVSxNQUFNLEdBQ2pCQyxjQUFlWCxFQUFFVSxNQUFNLEdBQ3ZCWSxPQUFRdEIsRUFBRWMsSUFBSSxDQUFDViwrQkFDZm1CLFVBQVd2QixFQUFFVSxNQUFNLEdBQ25CYyxZQUFheEIsRUFBRVUsTUFBTSxFQUN2QixHQUNDRSxRQUFRLEdBQ1hhLFVBQVd6QixFQUFFVSxNQUFNLEVBQ3JCLEVBQUcsQUFFSCxRQUFPLE1BQU1nQiwwQkFBNEJ6QixjQUFjLENBQ3JEMEIsS0FBTXpCLDZDQUNOMEIsdUJBQ0V2Qix3REFDRndCLGVBQWdCYiwrQ0FDbEIsRUFBRyJ9