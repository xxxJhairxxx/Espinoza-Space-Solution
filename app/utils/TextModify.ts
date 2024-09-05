export const limitText = (text: string, numberWords: number): string => {
  const palabras = text.split(" ");

  if (palabras.length <= numberWords) {
    return text;
  }

  const textoLimitado = palabras.slice(0, numberWords).join(" ");
  return textoLimitado;
};

export const FormatDate = (date: string): string => {
  const fecha = new Date(date);
  fecha.setDate(fecha.getDate() + 1);
  const fechaFormateada = fecha.toLocaleDateString("EN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return fechaFormateada;
};
