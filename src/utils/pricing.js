import { DURATION } from '../constants/pricing';

const filterPackages = (duration, data, typePackages) => {
  switch (duration) {
    case DURATION.MONTHLY:
      return data.filter(
        (pkg) =>
          pkg.active &&
          pkg.type === typePackages &&
          (pkg.expiresIn < 0 || pkg.expiresIn === 30),
      );
    case DURATION.YEARLY:
      return data.filter(
        (pkg) =>
          pkg.active &&
          pkg.type === typePackages &&
          (pkg.expiresIn < 0 || pkg.expiresIn === 365),
      );
    default:
      return [];
  }
};

export { filterPackages };
