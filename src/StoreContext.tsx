import React from "react";
import { StoreProps } from "./redux/store";

const StoreContext = React.createContext<StoreProps | null>(null)

export default StoreContext