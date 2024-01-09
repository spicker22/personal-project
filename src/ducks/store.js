import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer.js';

// ConfigureStore function creates store and we pass our root reducer to it
export default configureStore({
  reducer: reducer,
});
