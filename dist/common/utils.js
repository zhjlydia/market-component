function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isNumber(value) {
  return /^\d+$/.test(value);
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export { isObj, isDef, isNumber, range };
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi91dGlscy50cyJdLCJuYW1lcyI6WyJpc0RlZiIsInZhbHVlIiwidW5kZWZpbmVkIiwiaXNPYmoiLCJ4IiwidHlwZSIsImlzTnVtYmVyIiwidGVzdCIsInJhbmdlIiwibnVtIiwibWluIiwibWF4IiwiTWF0aCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXlCO0FBQ3ZCLFNBQU9BLEtBQUssS0FBS0MsU0FBVixJQUF1QkQsS0FBSyxLQUFLLElBQXhDO0FBQ0Q7O0FBRUQsU0FBU0UsS0FBVCxDQUFlQyxDQUFmLEVBQXFCO0FBQ25CLFFBQU1DLElBQUksR0FBRyxPQUFPRCxDQUFwQjtBQUNBLFNBQU9BLENBQUMsS0FBSyxJQUFOLEtBQWVDLElBQUksS0FBSyxRQUFULElBQXFCQSxJQUFJLEtBQUssVUFBN0MsQ0FBUDtBQUNEOztBQUVELFNBQVNDLFFBQVQsQ0FBa0JMLEtBQWxCLEVBQXVCO0FBQ3JCLFNBQU8sUUFBUU0sSUFBUixDQUFhTixLQUFiLENBQVA7QUFDRDs7QUFFRCxTQUFTTyxLQUFULENBQWVDLEdBQWYsRUFBNEJDLEdBQTVCLEVBQXlDQyxHQUF6QyxFQUFvRDtBQUNsRCxTQUFPQyxJQUFJLENBQUNGLEdBQUwsQ0FBU0UsSUFBSSxDQUFDRCxHQUFMLENBQVNGLEdBQVQsRUFBY0MsR0FBZCxDQUFULEVBQTZCQyxHQUE3QixDQUFQO0FBQ0Q7O0FBRUQsU0FDRVIsS0FERixFQUVFSCxLQUZGLEVBR0VNLFFBSEYsRUFJRUUsS0FKRiIsImZpbGUiOiJjb21tb24vdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpc0RlZih2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqKHg6IGFueSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgeDtcclxuICByZXR1cm4geCAhPT0gbnVsbCAmJiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5nZShudW06IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBpc09iaixcclxuICBpc0RlZixcclxuICBpc051bWJlcixcclxuICByYW5nZVxyXG59O1xyXG4iXX0=