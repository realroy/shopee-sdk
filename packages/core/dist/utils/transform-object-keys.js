export function transformObjectKeys(obj,transformFunction){if(typeof obj!=="object"||obj===null||obj instanceof Date){return obj}if(Array.isArray(obj)){const result=obj.map((_,i)=>transformObjectKeys(obj[i],transformFunction));return result}const result={};for(const[k,v]of Object.entries(obj)){if(k===undefined){continue}result[transformFunction(k)]=transformObjectKeys(v,transformFunction)}return result}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy90cmFuc2Zvcm0tb2JqZWN0LWtleXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBUcmFuc2Zvcm1GdW5jdGlvbjxUS2V5LCBUUmVzdWx0PiA9IChrZXk6IFRLZXkpID0+IFRSZXN1bHQ7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1PYmplY3RLZXlzPFxuICBUIGV4dGVuZHMgb2JqZWN0LFxuICBUVHJhbnNmb3JtZWRLZXkgZXh0ZW5kcyBzdHJpbmdcbj4oXG4gIG9iajogVCxcbiAgdHJhbnNmb3JtRnVuY3Rpb246IFRyYW5zZm9ybUZ1bmN0aW9uPFQsIFRUcmFuc2Zvcm1lZEtleT5cbik6IFJlY29yZDxUVHJhbnNmb3JtZWRLZXksIFRba2V5b2YgVF0+IHtcbiAgdHlwZSBUT2JqS2V5ID0ga2V5b2YgVDtcblxuICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwgfHwgb2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IG9iai5tYXAoKF8sIGkpID0+XG4gICAgICB0cmFuc2Zvcm1PYmplY3RLZXlzKG9ialtpXSwgdHJhbnNmb3JtRnVuY3Rpb24pXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQgYXMgdW5rbm93biBhcyBSZWNvcmQ8VFRyYW5zZm9ybWVkS2V5LCBUW1RPYmpLZXldPjtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IHt9IGFzIFJlY29yZDxUVHJhbnNmb3JtZWRLZXksIFRbVE9iaktleV0+O1xuXG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICBpZiAoayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmVzdWx0W3RyYW5zZm9ybUZ1bmN0aW9uKGspXSA9IHRyYW5zZm9ybU9iamVjdEtleXModiwgdHJhbnNmb3JtRnVuY3Rpb24pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJuYW1lcyI6WyJ0cmFuc2Zvcm1PYmplY3RLZXlzIiwib2JqIiwidHJhbnNmb3JtRnVuY3Rpb24iLCJEYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzdWx0IiwibWFwIiwiXyIsImkiLCJrIiwidiIsIk9iamVjdCIsImVudHJpZXMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sU0FBU0Esb0JBSWRDLEdBQU0sQ0FDTkMsaUJBQXdELEVBSXhELEdBQUksT0FBT0QsTUFBUSxVQUFZQSxNQUFRLE1BQVFBLGVBQWVFLEtBQU0sQ0FFbEUsT0FBT0YsR0FDVCxDQUVBLEdBQUlHLE1BQU1DLE9BQU8sQ0FBQ0osS0FBTSxDQUN0QixNQUFNSyxPQUFTTCxJQUFJTSxHQUFHLENBQUMsQ0FBQ0MsRUFBR0MsSUFDekJULG9CQUFvQkMsR0FBRyxDQUFDUSxFQUFFLENBQUVQLG9CQUc5QixPQUFPSSxNQUNULENBRUEsTUFBTUEsT0FBUyxDQUFDLEVBRWhCLElBQUssS0FBTSxDQUFDSSxFQUFHQyxFQUFFLEdBQUlDLE9BQU9DLE9BQU8sQ0FBQ1osS0FBTSxDQUN4QyxHQUFJUyxJQUFNSSxVQUFXLENBQ25CLFFBQ0YsQ0FHQVIsTUFBTSxDQUFDSixrQkFBa0JRLEdBQUcsQ0FBR1Ysb0JBQW9CVyxFQUFHVCxrQkFDeEQsQ0FFQSxPQUFPSSxNQUNUIn0=