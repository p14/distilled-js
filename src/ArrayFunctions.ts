/**
 * Randomizes the order of items in an array.
 * @param array any[]
 * @returns any[]
 */
export function shuffle(array: any[]): any[] {
  let currentIndex: number = array.length;
  let temporaryValue: any, randomIndex: number;

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

/**
 * Filters out duplicate items in an array.
 * @param array any[]
 * @returns any[]
 */
export function unique(array: any[]): any[] {
  return array.filter((v, i, a) => a.indexOf(v) === i);
};

/**
 * Filters objects out of an array based on duplication of the provided property value.
 * If a duplicate is found, only the first instance is returned.
 * @param array any[]
 * @param property string
 * @returns any[]
 */
export function uniqueObjectsByProperty(array: any[], property: string): any[] {
  return array.filter((obj, i) => array.findIndex((a) => a[property] === obj[property]) === i);
};
