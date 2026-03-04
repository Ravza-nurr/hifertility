import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProgressState {
  completedVideos: string[];
}

const initialState: ProgressState = {
  completedVideos: [],
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    toggleVideoCompleted: (state, action: PayloadAction<string>) => {
      const videoId = action.payload;
      if (state.completedVideos.includes(videoId)) {
        state.completedVideos = state.completedVideos.filter(id => id !== videoId);
      } else {
        state.completedVideos.push(videoId);
      }
      AsyncStorage.setItem('completedVideos', JSON.stringify(state.completedVideos));
    },
    loadProgress: (state, action: PayloadAction<string[]>) => {
      state.completedVideos = action.payload;
    },
  },
});

export const { toggleVideoCompleted, loadProgress } = progressSlice.actions;
export default progressSlice.reducer;
