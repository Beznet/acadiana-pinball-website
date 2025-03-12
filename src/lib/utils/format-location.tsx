export const formatLocation = (city?: string, state?: string): string => {
  const cleanCity = city?.trim() || '';
  const cleanState = state?.trim() || '';

  if (cleanCity && cleanState) {
    return `${cleanCity}, ${cleanState}`;
  }

  if (!cleanCity && cleanState) {
    return cleanState;
  }

  if (cleanCity && !cleanState) {
    return cleanCity;
  }

  return '??';
};
