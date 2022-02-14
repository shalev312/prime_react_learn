/**
 * Build classNames based on PrimeFlex V3.0.0
 * @param spaces { key: value } key => The option margin and padding of spacing. value => the values of the spacing 0-8 or auto
 */
export const buildSpacing = <T extends object>(spaces: T) => {
  const spaceKeys = Object.keys(spaces);
  return spaceKeys.reduce((prevSpace, currentSpace) => {
    if (
      !(spaces[currentSpace as keyof T] ?? true) ||
      spaces[currentSpace as keyof T]
    ) {
      return `${prevSpace} ${currentSpace}-${spaces[currentSpace as keyof T]}`;
    }
    return prevSpace;
  }, "");
};
