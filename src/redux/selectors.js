import { createSelector } from '@reduxjs/toolkit';

// export const selectOnFilter = state => state.filter.onFilter;
export const selectBrand = state => state.filter.brand;

export const selectPrice = state => state.filter.price;
export const selectMileageFrom = state => state.filter.mileageFrom;
export const selectMileageTo = state => state.filter.mileageTo;

export const selectFavorite = state => state.favorite.favoriteArray;

export const selectCars = state => state.cars.items;
// export const selectCarsFilter = state => state.cars.allCarsForFilter;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
// export const selectCurrentPage = state => state.cars.currentPage;

export const selectFiltredCars = createSelector(
  [selectCars, selectBrand, selectPrice, selectMileageFrom, selectMileageTo],
  (cars, brand, price, mileageFrom, mileageTo) => {
    if (brand !== 'without') {
      const normalizeFilterBrand = brand.toLowerCase();

      const selectCarsByBrand = cars.filter(car =>
        car.make.toLowerCase().includes(normalizeFilterBrand)
      );
      return selectCarsByBrand;
    }
    if (price !== 'without') {
      const selectCarsByPrice = cars.filter(car => car.rentalPrice <= price);
      return selectCarsByPrice;
    }
    if (mileageFrom !== '' && mileageTo !== '') {
      const selectCarsByMileage = cars.filter(
        car => car.mileage <= mileageTo && car.mileage >= mileageFrom
      );

      return selectCarsByMileage;
    }
  }
);
