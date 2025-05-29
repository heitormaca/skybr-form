/**
 * Calcula o valor bitwise de disponibilidade de jogo com base em um array de dias.
 * Cada valor de dia é uma string representando um índice de 0 (domingo) a 6 (sábado).
 * Retorna um número entre 0 e 127, onde cada bit corresponde a um dia da semana.
 *
 * @param days - Array de strings correspondendo aos índices dos dias selecionados.
 * @returns Máscara bitwise de disponibilidade.
 */
export function calculateAvailabilityMask(days: string[]): number {
  return days
    .map((v) => Number(v))
    .reduce((mask, dayIndex) => mask | (1 << dayIndex), 0)
}
