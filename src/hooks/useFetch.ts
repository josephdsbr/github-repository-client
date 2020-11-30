import useSwr from 'swr'

export function useFetch<Data = any>(
  url: string
): { data: Data; error: any; status: any } {
  let status
  const { data, error } = useSwr<Data>(url, async url => {
    const response = await fetch(url)
    status = response?.status
    console.log(response)
    return await response.json()
  })

  return { data, error, status }
}
