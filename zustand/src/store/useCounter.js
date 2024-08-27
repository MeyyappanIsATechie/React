import { create } from "zustand";

const useCounter = create((set) => {
  return {
    count: 0,
    products: [],
    actions: {
      handleIncrement: () => set((state) => ({ count: state.count + 1 })),
      fetchList: async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        set({ products: data?.products });
      },
    },
  };
});

// export const useCounterContext = create((set, get) => ({
//   state: get(),
//   actions: get().actions
// }));

export const useActions = () => useCounter((state) => state.actions);

export default useCounter;
