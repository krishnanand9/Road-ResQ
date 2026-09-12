/**
 * Calculates the distance between two geographical coordinates
 * using the Haversine formula.
 *
 * @param lat1 Latitude of first location
 * @param lon1 Longitude of first location
 * @param lat2 Latitude of second location
 * @param lon2 Longitude of second location
 * @returns Distance in kilometers
 */
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const earthRadius = 6371; // Earth's radius in kilometers

  const toRadians = (degree: number): number => {
    return (degree * Math.PI) / 180;
  };

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Number((earthRadius * c).toFixed(2));
};

export default calculateDistance;