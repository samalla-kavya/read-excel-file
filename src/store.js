import { createStore } from "redux";
import { excelReducer } from "./reducer";

 const store = createStore(excelReducer);
 export default store;

