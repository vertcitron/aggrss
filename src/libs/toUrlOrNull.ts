export default function (url: string | undefined): URL | null {
  if (!url) return null
  try {
    return new URL(url)
  } catch (error) {
    console.error(`${url} is not a valid URL: ${error.message}`)
    return null
  }
}
