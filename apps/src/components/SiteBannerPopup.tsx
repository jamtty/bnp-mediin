import { useEffect, useState } from 'react'
import { fetchPopupBannerList, type PopupBannerItem } from '@/api/popupBanner'

interface Props {
  site?: string
}

const STORAGE_KEY_PREFIX = 'popup_dismiss_'

function isDismissedToday(id: number): boolean {
  const stored = localStorage.getItem(STORAGE_KEY_PREFIX + id)
  if (!stored) return false
  return stored === new Date().toISOString().slice(0, 10)
}

function dismissToday(id: number) {
  localStorage.setItem(STORAGE_KEY_PREFIX + id, new Date().toISOString().slice(0, 10))
}

export default function SiteBannerPopup({ site = 'MAIN' }: Props) {
  const [popups, setPopups] = useState<PopupBannerItem[]>([])
  const [closed, setClosed] = useState<Set<number>>(new Set())

  useEffect(() => {
    fetchPopupBannerList({ site, page: 1, size: 10 })
      .then((res) => {
        const today = new Date().toISOString().slice(0, 10)
        const active = res.items.filter((p) => {
          if (p.use_yn !== 'Y') return false
          if (isDismissedToday(p.id)) return false
          if (p.period_start && p.period_start > today) return false
          if (p.period_end && p.period_end < today) return false
          return true
        })
        setPopups(active)
      })
      .catch(() => {/* 조용히 실패 */})
  }, [site])

  const handleClose = (id: number) => setClosed((prev) => new Set(prev).add(id))
  const handleDismissToday = (id: number) => {
    dismissToday(id)
    setClosed((prev) => new Set(prev).add(id))
  }

  const visible = popups.filter((p) => !closed.has(p.id))
  if (visible.length === 0) return null

  return (
    <>
      {visible.map((popup) => {
        const width = popup.img_width > 0 ? popup.img_width : 320
        const left  = popup.img_pos_left > 0 ? popup.img_pos_left : 50
        const top   = popup.img_pos_top  > 0 ? popup.img_pos_top  : 50
        const content = (
          <img
            src={popup.img_url}
            alt={popup.admin_title}
            style={{ width: '100%', display: 'block' }}
          />
        )

        return (
          <div
            key={popup.id}
            className="site_popup_card"
            style={{ width: `${width}px`, left: `${left}%`, top: `${top}%` }}
          >
            <div className="site_popup_img">
              {popup.url ? (
                <a href={popup.url} target={popup.link_target || '_self'} rel="noopener noreferrer">
                  {content}
                </a>
              ) : content}
            </div>
            <div className="site_popup_footer">
              <button type="button" className="site_popup_btn" onClick={() => handleDismissToday(popup.id)}>
                오늘 하루 보지않기
              </button>
              <button type="button" className="site_popup_btn" onClick={() => handleClose(popup.id)}>
                닫기
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}
