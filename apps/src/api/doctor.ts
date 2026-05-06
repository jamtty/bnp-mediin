import apiClient from './axios'

export const DEPT_CODE_MAP: Record<string, string> = {
  hpcenter:        '건강증진센터',
  internal:        '내과',
  cardiology:      '심장내과',
  respiratory:     '호흡기내과',
  gastroenterology:'소화기내과',
  nephrology:      '신장내과',
  rheumatology:    '류마티스내과',
  neurology:       '신경과',
  surgery:         '외과',
  obstetrics:      '산부인과',
  orthopedics:     '정형외과',
  urology:         '비뇨의학과',
  painclinic:      '신경통증클리닉',
  anesthesiology:  '마취통증의학과',
  labmedicine:     '진단검사의학과',
  radiology:       '영상의학과',
  emergency:       '응급의학과',
  criticalcare:    '중환자의학과',
}

export type ScheduleRow = {
  mon: string; tue: string; wed: string; thu: string; fri: string
  sat1: string; sat2: string; sat3: string; sat4: string; sat5: string
}

export interface ScheduleJson {
  am: ScheduleRow
  pm: ScheduleRow
}

export interface DoctorItem {
  id: number
  dept_code: string
  doc_name: string
  doc_title: string | null
  doc_major: string | null
  doc_specialty: string | null
  doc_career: string | null
  career_label: string | null
  schedule_json: string | null   // JSON 문자열
  use_yn: string
  sort_order: number
  img_ori_name?: string
  img_save_name?: string
  img_url?: string
  created_by?: string
  created_at?: string
  updated_by?: string
  updated_at?: string
}

export interface DoctorListResponse {
  items: DoctorItem[]
  total: number
  total_pages: number
  page: number
  size: number
}

// 관리자용 목록
export const fetchDoctorList = async (params: {
  page?: number
  size?: number
  dept_code?: string
  keyword?: string
  use_yn?: string
}): Promise<DoctorListResponse> => {
  const { data } = await apiClient.get('/api/doctor', { params })
  if (!data.success) throw new Error(data.message || '목록을 불러오지 못했습니다.')
  return data.data
}

// 진료과별 공개 목록 (일반 사용자용)
export const fetchDoctorsByDept = async (deptCode: string): Promise<DoctorItem[]> => {
  const { data } = await apiClient.get(`/api/doctor/by-dept/${deptCode}`)
  if (!data.success) throw new Error(data.message || '의료진 정보를 불러오지 못했습니다.')
  return data.data
}

export const fetchDoctorDetail = async (id: number): Promise<DoctorItem> => {
  const { data } = await apiClient.get(`/api/doctor/${id}`)
  if (!data.success) throw new Error(data.message || '데이터를 불러오지 못했습니다.')
  return data.data
}

export const createDoctor = async (formData: FormData): Promise<{ id: number }> => {
  const { data } = await apiClient.post('/api/doctor', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  if (!data.success) throw new Error(data.message || '등록에 실패했습니다.')
  return data.data
}

export const updateDoctor = async (id: number, formData: FormData): Promise<void> => {
  const { data } = await apiClient.post(`/api/doctor/${id}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  if (!data.success) throw new Error(data.message || '수정에 실패했습니다.')
}

export const updateDoctorUseYn = async (id: number, useYn: 'Y' | 'N'): Promise<void> => {
  const formData = new FormData()
  formData.append('use_yn', useYn)
  const { data } = await apiClient.post(`/api/doctor/${id}/use`, formData)
  if (!data.success) throw new Error(data.message || '변경에 실패했습니다.')
}

export const updateDoctorSortOrder = async (id: number, sortOrder: number): Promise<void> => {
  const formData = new FormData()
  formData.append('sort_order', String(sortOrder))
  const { data } = await apiClient.post(`/api/doctor/${id}/sort`, formData)
  if (!data.success) throw new Error(data.message || '순서 변경에 실패했습니다.')
}

export const deleteDoctor = async (id: number): Promise<void> => {
  const { data } = await apiClient.post(`/api/doctor/${id}/delete`)
  if (!data.success) throw new Error(data.message || '삭제에 실패했습니다.')
}

// 공개 의료진 전체 목록 (일반 사용자용, 활성 상태만)
export const fetchPublicDoctors = async (deptCode?: string): Promise<DoctorItem[]> => {
  const params: Record<string, string | number> = { use_yn: 'Y', size: 500 }
  if (deptCode) params.dept_code = deptCode
  const { data } = await apiClient.get('/api/doctor', { params })
  if (!data.success) throw new Error(data.message || '의료진 정보를 불러오지 못했습니다.')
  return (data.data as DoctorListResponse).items
}

// schedule_json 파싱 헬퍼
export const parseSchedule = (json: string | null | undefined): ScheduleJson | null => {
  if (!json) return null
  try {
    const parsed = JSON.parse(json) as Record<string, Record<string, string>>
    // 구버전(sat13, sat24) → 신버전(sat1~sat4) 마이그레이션
    const migrate = (row: Record<string, string>): ScheduleRow => ({
      mon:  row.mon  ?? '',
      tue:  row.tue  ?? '',
      wed:  row.wed  ?? '',
      thu:  row.thu  ?? '',
      fri:  row.fri  ?? '',
      sat1: row.sat1 ?? row.sat13 ?? '',
      sat2: row.sat2 ?? row.sat24 ?? '',
      sat3: row.sat3 ?? row.sat13 ?? '',
      sat4: row.sat4 ?? row.sat24 ?? '',
      sat5: row.sat5 ?? '',
    })
    return { am: migrate(parsed.am ?? {}), pm: migrate(parsed.pm ?? {}) }
  }
  catch { return null }
}

export const emptySchedule = (): ScheduleJson => ({
  am: { mon: '', tue: '', wed: '', thu: '', fri: '', sat1: '', sat2: '', sat3: '', sat4: '', sat5: '' },
  pm: { mon: '', tue: '', wed: '', thu: '', fri: '', sat1: '', sat2: '', sat3: '', sat4: '', sat5: '' },
})
