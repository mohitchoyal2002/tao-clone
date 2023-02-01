import { configureStore } from '@reduxjs/toolkit';
import ComponentsSlice from '../features/Platform Components/ComponentsSlice';
import SolutionSlice from '../features/Platform Solutions/SolutionSlice';


export const store = configureStore({
  reducer: {
    components: ComponentsSlice,
    solutions: SolutionSlice,
  },
});
