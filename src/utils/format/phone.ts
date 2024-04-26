export const parsePhone = (phone?: string) =>
  phone && `+1${phone.replaceAll('-', '').replaceAll('+1', '')}`

export const unparsePhone = (phone?: string) => phone && `${phone.replace('+1', '')}`

export const formatPhoneMask = (value: string): string => {
  const phone = unparsePhone(value)?.replace(/\D/g, '')

  if (!phone) {
    return ''
  }

  return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`
}

export function formatCompletePhoneNumber(phoneNumber: string | undefined | null): string {
  if (!phoneNumber) return '-'
  const cleaned = phoneNumber.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/)

  if (match) {
    return `(${match[2]}) ${match[3]}-${match[4]}`
  }

  return '-'
}
