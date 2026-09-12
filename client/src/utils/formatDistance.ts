export const formatDistance = (
  distanceInKm: number
): string => {
  if (
    typeof distanceInKm !== "number" ||
    Number.isNaN(distanceInKm) ||
    distanceInKm < 0
  ) {
    return "Unknown distance";
  }

  if (distanceInKm < 1) {
    const meters = Math.round(distanceInKm * 1000);

    return `${meters} m`;
  }

  return `${distanceInKm.toFixed(1)} km`;
};