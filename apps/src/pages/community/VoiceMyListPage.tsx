import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type VoiceStatus = '처리중' | '처리완료'

type VoiceItem = {
  id: number
  num: number
  category: string
  title: string
  date: string
  status: VoiceStatus
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockItems: VoiceItem[] = [
  { id: 10, num: 10, category: '칭찬 및 감사', title: '친절한 간호사 선생님께 감사드립니다.', date: '2026-03-20', status: '처리완료' },
  { id: 9,  num: 9,  category: '불편',         title: '주차 공간이 너무 부족합니다.',           date: '2026-02-15', status: '처리완료' },
  { id: 8,  num: 8,  category: '제안 및 건의', title: '원무과 대기 시간 개선을 건의드립니다.', date: '2026-01-10', status: '처리중'   },
]

const TOTAL_COUNT = 3
const TOTAL_PAGES = 1
const PAGE_GROUP_SIZE = 10

export default function VoiceMyListPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { name } = (location.state as { name: string } | null) ?? { name: '' }

  const [currentPage, setCurrentPage] = useState(1)
  const [searchField, setSearchField] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const searchFieldLabel =
    searchField === 'title' ? '제목' :
    searchField === 'content' ? '내용' :
    searchField === 'name' ? '이름' : '전체'

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API 연동
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // TODO: API 연동
  }

  const pageGroupStart = Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1
  const pageGroupEnd = Math.min(pageGroupStart + PAGE_GROUP_SIZE - 1, TOTAL_PAGES)

  return (
    <SubPageLayout
      visualClass="vs8"
      visualTitle="고객마당"
      contentsClass="sub08"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">고객의 소리</h3>
      <div className="con_area">
        <div className="bbs_cont">
          {name && <p className="bbs_disc">{name}님의 접수 내역입니다.</p>}
          {/* s: 검색폼 */}
          <form name="frm" id="frm" onSubmit={handleSearch}>
            <div className="bbs_search_area">
              <div className={`select_area${dropdownOpen ? ' open' : ''}`} ref={selectRef}>
                <button
                  type="button"
                  className="btn_slc_active"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {searchFieldLabel}
                </button>
                <div className="slc_list">
                    <ul>
                      <li><button type="button" onClick={() => { setSearchField(''); setDropdownOpen(false) }}>전체</button></li>
                      <li><button type="button" onClick={() => { setSearchField('title'); setDropdownOpen(false) }}>제목</button></li>
                      <li><button type="button" onClick={() => { setSearchField('content'); setDropdownOpen(false) }}>내용</button></li>
                      <li><button type="button" onClick={() => { setSearchField('name'); setDropdownOpen(false) }}>이름</button></li>
                    </ul>
                  </div>
              </div>
              <input
                type="text"
                className="sh_ip"
                name="sv"
                id="sv"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                title="고객의 소리 검색어"
                placeholder="검색어를 입력하세요"
              />
              <button type="submit" className="btn_sh" id="btnRightSearch">
                <span>검색</span>
                <i className="ico_sh"></i>
              </button>
            </div>
          </form>
          {/* e: 검색폼 */}
          <br />
          <div className="bbs_list_area">
            <p className="bbs_count">총 {TOTAL_COUNT}건이 검색되었습니다.</p>
            <div className="bbs_list">
              <table>
                <caption>고객의 소리 리스트표</caption>
                <colgroup>
                  <col style={{ width: '70px' }} className="m_hide" />
                  <col style={{ width: '150px' }} />
                  <col />
                  <col style={{ width: '150px' }} className="m_hide" />
                  <col style={{ width: '100px' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" className="m_hide">번호</th>
                    <th scope="col">분류</th>
                    <th scope="col">제목</th>
                    <th scope="col" className="m_hide">등록일</th>
                    <th scope="col">처리상태</th>
                  </tr>
                </thead>
                <tbody>
                  {mockItems.map((item) => (
                    <tr key={item.id}>
                      <td className="m_hide">{item.num}</td>
                      <td>{item.category}</td>
                      <td>
                        <Link to={`/community/voice/${item.id}`}>{item.title}</Link>
                      </td>
                      <td className="m_hide">{item.date}</td>
                      <td>
                        {item.status === '처리완료'
                          ? <span className="t_blue">처리완료</span>
                          : <span className="t_red">처리중</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bbs_btm">
            <div className="pagination" role="navigation">
              <button
                type="button"
                className="btn_arrow btn_first"
                onClick={() => handlePageChange(1)}
                title="첫 페이지"
              >처음페이지로</button>
              <button
                type="button"
                className="btn_arrow btn_prev"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                title="이전 페이지"
              >이전페이지로</button>
              <div className="page_num_list">
                {Array.from({ length: pageGroupEnd - pageGroupStart + 1 }, (_, i) => pageGroupStart + i).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`btn_num${currentPage === page ? ' active_num' : ''}`}
                    title={currentPage === page ? '현재 페이지' : `${page} 페이지`}
                  >{page}</button>
                ))}
              </div>
              <button
                type="button"
                className="btn_arrow btn_next"
                onClick={() => handlePageChange(Math.min(TOTAL_PAGES, currentPage + 1))}
                title="다음 페이지"
              >다음페이지로</button>
              <button
                type="button"
                className="btn_arrow btn_last"
                onClick={() => handlePageChange(TOTAL_PAGES)}
                title="마지막 페이지"
              >마지막페이지로</button>
            </div>
            <div className="btn_area">
              <button
                type="button"
                className="btn_default"
                onClick={() => navigate('/community/voice/check')}
              >다시 조회</button>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
