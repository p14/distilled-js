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
