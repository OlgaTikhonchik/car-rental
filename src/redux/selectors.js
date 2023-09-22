export const selectOnFilter = state => state.filter.onFilter;
export const selectBrand = state => state.filter.brand;
export const selectPrice = state => state.filter.price;
export const selectMileageFrom = state => state.filter.mileageFrom;
export const selectMileageTo = state => state.filter.mileageTo;

export const selectFavorite = state => state.favorite.favoriteArray;

export const selectCars = state => state.cars.allCars;
export const selectCarsFilter = state => state.cars.allCarsForFilter;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectCurrentPage = state => state.cars.currentPage;
