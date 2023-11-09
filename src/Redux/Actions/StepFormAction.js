import Actions from "./Actions";

export const SaveFormData = (payload) => {
  return {
    type: Actions.SAVE_FORM_DATA,
    payload,
  };
};
