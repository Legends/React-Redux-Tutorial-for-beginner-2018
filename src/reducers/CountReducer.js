export default function CountReducer(
  state = { count: 0, wish_value: 0 },
  action
) {
  const count = state.count;
  const wish_value = action.wish_value;

  switch (action.type) {
    case "increase":
      return {
        count: Number(count) + 1,
        wish_value: Number(count) + 1
      };
    case "update":
      const val = parseInt(wish_value);

      if (isNaN(val)) return { count: "No number",   wish_value: 0 };

      return {
        count: val,
        wish_value: val
      };
    default:
      return state;
  }
}
