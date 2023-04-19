import { UIState } from "./UIProvider";

type UIActiontype = { type: "[UI] - ToggleMenu" };

export const uiReducer = (state: UIState, action: UIActiontype): UIState => {
  switch (action.type) {
    case "[UI] - ToggleMenu":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    default:
      return state;
  }
};
