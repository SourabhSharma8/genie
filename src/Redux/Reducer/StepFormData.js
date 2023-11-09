const initalState = {
  data: [],
};

const StepFormData = (state = initalState, action) => {
  switch (action.type) {
    case "SAVE_FORM_DATA":
      return {
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

export default StepFormData;
