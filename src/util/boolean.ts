export const parseBoolean = (potentialBool: any): boolean => {
  if (typeof potentialBool === 'boolean') {
    return potentialBool;
  }

  if (typeof potentialBool === 'string') {
    return ([
      '1',
      'true',
      'yes'
    ]).includes(potentialBool.trim().toLowerCase());
  }

  if (typeof potentialBool === 'number') {
    return potentialBool > 0;
  }

  // Final attempt - return truthiness of value
  return potentialBool;
}