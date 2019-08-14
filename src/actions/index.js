export const addFeature = payload => {
  console.log("addFeature was invoked");
  return { type: "ADD_FEATURE", payload: payload };
};
