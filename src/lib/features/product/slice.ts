import type { PayloadAction } from "@reduxjs/toolkit";
import {
  asyncThunkCreator,
  buildCreateSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { Product } from "../../product";

interface ProductWithAmount extends Product {
  amount: number;
}

export interface ProductSliceState {
  selectedIds: number[];
  products: ProductWithAmount[];
}

const initialState: ProductSliceState = {
  selectedIds: [],
  products: [],
};

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const productSlice = createAppSlice({
  name: "product",
  initialState,
  reducers: (create) => ({
    addToShoppingCart: create.reducer(
      (state, action: PayloadAction<Product>) => {
        const current = state.products.find(
          (product) => product.id === action.payload.id,
        );
        if (current) {
          current.amount++;
        } else {
          state.products.push({
            ...action.payload,
            amount: 1,
          });
        }
      },
    ),
    removeFromShoppingCart: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.products = state.products.filter(
          ({ id }) => id !== action.payload,
        );
        state.selectedIds = state.selectedIds.filter(
          (id) => id !== action.payload,
        );
      },
    ),
    changeAmount: create.reducer(
      (
        state,
        action: PayloadAction<{
          id: number;
          amount: number;
        }>,
      ) => {
        const { id, amount } = action.payload;
        const current = state.products.find((product) => product.id === id);
        if (current) {
          current.amount = amount;
        } else {
          throw new Error("product not found:" + id);
        }
      },
    ),
    changeSelected: create.reducer(
      (
        state,
        action: PayloadAction<{
          id: number;
          selected: boolean;
        }>,
      ) => {
        const { id, selected } = action.payload;
        if (selected) {
          state.selectedIds.push(id);
        } else {
          state.selectedIds = state.selectedIds.filter((data) => data !== id);
        }
      },
    ),
    changeAllSelected: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        const selected = action.payload;
        if (selected) {
          state.selectedIds = state.products.map(({ id }) => id);
        } else {
          state.selectedIds = [];
        }
      },
    ),
  }),
  selectors: {
    selectProducts: (state) => state.products,
    selectIds: (state) => state.selectedIds,
    selectCount: (state) => state.selectedIds.length,
    selectTotalPrice: (state) =>
      state.selectedIds
        .map((id) => {
          const data = state.products.find((product) => product.id === id);
          if (!data) {
            return 0;
          }
          return data.price * data.amount;
        })
        .reduce((prev, cuur) => prev + cuur, 0),
  },
});

export const {
  addToShoppingCart,
  removeFromShoppingCart,
  changeAmount,
  changeSelected,
  changeAllSelected,
} = productSlice.actions;

export const { selectProducts, selectIds, selectCount, selectTotalPrice } =
  productSlice.selectors;

export const selectProductsWithSelected = createSelector(
  [selectProducts, selectIds],
  (products, ids) => {
    return products.map((product) => ({
      ...product,
      selected: !!ids.find((id) => id === product.id),
    }));
  },
);
