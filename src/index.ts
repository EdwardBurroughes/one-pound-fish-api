export const hello = (name: string): string[] => {
  const upperCaseItems: string[] = [];
  [...name].forEach((c) => {
    upperCaseItems.push(c.toUpperCase());
  });
  return upperCaseItems;
};
