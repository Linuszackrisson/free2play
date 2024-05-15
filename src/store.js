// store.js
import  { create } from 'zustand';
import fetchData from './api'; 

const useGlobalState = create((set) => ({
  games: [],
  loading: true,
  error: null,
  fetchGames: async () => {
    const data = await fetchData();
    if (data) {
      set({ games: data, loading: false, error: null });
    } else {
      set({ loading: false, error: 'Failed to fetch data' });
    }
  }
}));

export default useGlobalState;
