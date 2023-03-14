/**
 * Capitalizes the first character of a string and lowercases everything else.
 * @param string string
 * @returns string
 */
export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

/**
 * Capitalizes the first character of every word in a string and lowercases everything else.
 * @param string string
 * @returns string
 */
export function capitalizeEachWord(string: string): string {
  const eachWord = string.split(' ').map((word) => (
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ));

  return eachWord.join(' ');
};
