export const getYouTubeVideoId = (url: string | null | undefined): string | null => {
  if (!url) return null

  try {
    const parsed = new URL(url)

    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1) || null
    }

    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname === '/watch') {
        return parsed.searchParams.get('v')
      }

      const match = parsed.pathname.match(/^\/(embed|shorts)\/([^/?#]+)/)
      if (match) return match[2]
    }
  } catch {
    return null
  }

  return null
}

export const getYouTubeThumbnailUrl = (url: string | null | undefined): string | null => {
  const videoId = getYouTubeVideoId(url)
  if (!videoId) return null
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}