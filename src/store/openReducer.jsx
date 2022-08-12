const initialValue = {
  visible: false,
};
function OpenCardReducer(state = initialValue, action) {
  switch (action.type) {
    case "OPEN_CARD":
      console.log("opennnnnnnnnn")
      return {
        ...state,
        visible: true,
      };
    case "CLOSE_CARD":
      return {
        ...state,
        visible: false,
      };
  }
  return state;
}
export default OpenCardReducer;
