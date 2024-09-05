export function MenuList(array: string[]): string[] {
  const newarray = array.filter((item, index) => {
    if (index + 1 < array.length) {
      return item;
    }
  });

  return newarray;
}

export function MenuBoton(array: string[]): string[] {
  const newarray = array.filter((item, index) => {
    if (index + 1 == array.length) {
      return item;
    }
  });

  return newarray;
}
