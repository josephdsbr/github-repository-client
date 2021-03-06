import useSwr from 'swr'

export function useFetch<Data = any>(url: string): { data: Data; error: any } {
  const { data, error } = useSwr<Data>(url, async url => {
    const response = await fetch(url)
    return await response.json()
  })

  return { data, error }
}
