import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import bbl from "./Courses/Assignments/reducer"
const store = configureStore({
  reducer: {
    modulesReducer,
    bbl,
  },
});
export default store;