export const toBRL = (number) => {
  /* Transorma os valores para REAL */
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
}