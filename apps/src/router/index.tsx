import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
// 관리자
import AdminLayout from '@/layouts/AdminLayout'
import AdminLoginPage from '@/pages/admin/AdminLoginPage'
import AdminMainPage from '@/pages/admin/AdminMainPage'
import AdminMyPage from '@/pages/admin/AdminMyPage'
import AdminNewsPage from '@/pages/admin/AdminNewsPage'
import AdminNewsFormPage from '@/pages/admin/AdminNewsFormPage'
import AdminNoticePage from '@/pages/admin/AdminNoticePage'
import AdminNoticeFormPage from '@/pages/admin/AdminNoticeFormPage'
import AdminReportPage from '@/pages/admin/AdminReportPage'
import AdminReportFormPage from '@/pages/admin/AdminReportFormPage'
// 진료안내
import OutpatientPage from '@/pages/care/OutpatientPage'
import EmergencyPage from '@/pages/care/EmergencyPage'
import AdmissionPage from '@/pages/care/AdmissionPage'
import CertificatePage from '@/pages/care/CertificatePage'
import NonCoveredPage from '@/pages/care/NonCoveredPage'
// 진료과안내
import IntroDeptPage from '@/pages/department/IntroDeptPage'
import ClinicPage from '@/pages/department/ClinicPage'
import ClinicDetailPage from '@/pages/department/ClinicDetailPage'
import SpecialCenterPage from '@/pages/department/SpecialCenterPage'
import SpecialCenterDetailPage from '@/pages/department/SpecialCenterDetailPage'
import IntroDeptDetailPage from '@/pages/department/IntroDeptDetailPage'
// 병원소개
import GreetingPage from '@/pages/about/GreetingPage'
import MissionPage from '@/pages/about/MissionPage'
import HistoryPage from '@/pages/about/HistoryPage'
import LogoPage from '@/pages/about/LogoPage'
import OrganizationPage from '@/pages/about/OrganizationPage'
import FloormapPage from '@/pages/about/FloormapPage'
import LocationPage from '@/pages/about/LocationPage'
// 병원소식
import NoticePage from '@/pages/news/NoticePage'
import PressPage from '@/pages/news/PressPage'
import RecruitPage from '@/pages/news/RecruitPage'
// 건강증진센터
import ProgramPage from '@/pages/health/ProgramPage'
import PreparationPage from '@/pages/health/PreparationPage'
import ExamsPage from '@/pages/health/ExamsPage'
import HealthAboutPage from '@/pages/health/HealthAboutPage'
// 진료협력센터
import CooperationPage from '@/pages/cooperation/CooperationPage'
// 장례식장
import FuneralStatusPage from '@/pages/funeral/FuneralStatusPage'
import FuneralGuidePage from '@/pages/funeral/FuneralGuidePage'
import FuneralFacilitiesPage from '@/pages/funeral/FuneralFacilitiesPage'
import FuneralOtherPage from '@/pages/funeral/FuneralOtherPage'
import FuneralLocationPage from '@/pages/funeral/FuneralLocationPage'
// 고객마당
import HealthInfoPage from '@/pages/community/HealthInfoPage'
import ConsultationPage from '@/pages/community/ConsultationPage'
import VoicePage from '@/pages/community/VoicePage'

export const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        // 진료안내
        { path: '/care/outpatient', element: <OutpatientPage /> },
        { path: '/care/emergency', element: <EmergencyPage /> },
        { path: '/care/admission', element: <AdmissionPage /> },
        { path: '/care/certificate', element: <CertificatePage /> },
        { path: '/care/non-covered', element: <NonCoveredPage /> },
        // 진료과안내
        { path: '/department/intro', element: <IntroDeptPage /> },
        { path: '/department/intro/:code', element: <IntroDeptDetailPage /> },
        { path: '/department/clinic', element: <ClinicPage /> },
        { path: '/department/clinic/:code', element: <ClinicDetailPage /> },
        { path: '/department/special', element: <SpecialCenterPage /> },
        { path: '/department/special/:code', element: <SpecialCenterDetailPage /> },
        // 병원소개
        { path: '/about/greeting', element: <GreetingPage /> },
        { path: '/about/mission', element: <MissionPage /> },
        { path: '/about/history', element: <HistoryPage /> },
        { path: '/about/logo', element: <LogoPage /> },
        { path: '/about/organization', element: <OrganizationPage /> },
        { path: '/about/floormap', element: <FloormapPage /> },
        { path: '/about/location', element: <LocationPage /> },
        // 병원소식
        { path: '/news/notice', element: <NoticePage /> },
        { path: '/news/press', element: <PressPage /> },
        { path: '/news/recruit', element: <RecruitPage /> },
        // 건강증진센터
        { path: '/health/program', element: <ProgramPage /> },
        { path: '/health/preparation', element: <PreparationPage /> },
        { path: '/health/exams', element: <ExamsPage /> },
        { path: '/health/about', element: <HealthAboutPage /> },
        // 진료협력센터
        { path: '/cooperation', element: <CooperationPage /> },
        // 장례식장
        { path: '/funeral/status', element: <FuneralStatusPage /> },
        { path: '/funeral/guide', element: <FuneralGuidePage /> },
        { path: '/funeral/facilities', element: <FuneralFacilitiesPage /> },
        { path: '/funeral/other', element: <FuneralOtherPage /> },
        { path: '/funeral/location', element: <FuneralLocationPage /> },
        // 고객마당
        { path: '/community/health-info', element: <HealthInfoPage /> },
        { path: '/community/consultation', element: <ConsultationPage /> },
        { path: '/community/voice', element: <VoicePage /> },
      ],
    },
    // 관리자
    { path: '/admin/login', element: <AdminLoginPage /> },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { index: true, element: <AdminMainPage /> },
        { path: 'my', element: <AdminMyPage /> },
        { path: 'news', element: <AdminNewsPage /> },
        { path: 'news/new', element: <AdminNewsFormPage /> },
        { path: 'news/:id/edit', element: <AdminNewsFormPage /> },
        { path: 'notice', element: <AdminNoticePage /> },
        { path: 'notice/new', element: <AdminNoticeFormPage /> },
        { path: 'notice/:id/edit', element: <AdminNoticeFormPage /> },
        { path: 'report', element: <AdminReportPage /> },
        { path: 'report/new', element: <AdminReportFormPage /> },
        { path: 'report/:id/edit', element: <AdminReportFormPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
)
