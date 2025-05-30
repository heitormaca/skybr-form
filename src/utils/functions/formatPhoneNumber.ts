/**
 * Formata um número de celular removendo caracteres não-numéricos
 * e descartando o código de país +55, caso presente.
 *
 * @param raw - String de entrada, ex: "+55 (11) 94849-4848"
 * @returns Apenas os dígitos do número local, ex: "11948494848"
 */
export function formatPhoneNumber(raw: string): string {
  const digits = raw.replace(/\D/g, '')

  if (digits.startsWith('55') && digits.length > 11) {
    return digits.slice(2)
  }

  return digits
}
