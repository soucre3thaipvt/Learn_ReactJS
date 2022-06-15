import { useContext } from "react";
import Context from "./Context";

export const useStore = () => {
  // Consumer
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
