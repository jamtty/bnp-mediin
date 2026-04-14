<?php
/**
 * 라우트 정의
 * POST /api/auth/login    → AuthController::login
 * GET  /api/auth/me       → AuthController::me
 * GET /api/news           → NewsController::index
 * GET /api/news/{id}      → NewsController::show
 * GET /api/report         → ReportController::index
 * GET /api/report/{id}    → ReportController::show
 * GET /api/notice         → NoticeController::index
 * GET /api/notice/{id}    → NoticeController::show
 */

$router->post('/upload/image',   [UploadController::class, 'uploadImage']);

$router->post('/auth/login',     [AuthController::class,   'login']);
$router->get('/auth/me',         [AuthController::class,   'me']);
$router->patch('/auth/password', [AuthController::class,   'changePassword']);

$router->get('/news',                [NewsController::class,   'index']);
$router->post('/news',               [NewsController::class,   'store']);
$router->get('/news/{id}',           [NewsController::class,   'show']);
$router->post('/news/{id}',                     [NewsController::class,   'update']);
$router->post('/news/{id}/delete',              [NewsController::class,   'destroy']);
$router->post('/news/file/{fileId}/delete',     [NewsController::class,   'destroyFile']);

$router->get('/report',                         [ReportController::class, 'index']);
$router->post('/report',                        [ReportController::class, 'store']);
$router->get('/report/{id}',                    [ReportController::class, 'show']);
$router->post('/report/{id}',                   [ReportController::class, 'update']);
$router->post('/report/{id}/delete',            [ReportController::class, 'destroy']);
$router->post('/report/file/{fileId}/delete',   [ReportController::class, 'destroyFile']);

$router->get('/notice',                         [NoticeController::class, 'index']);
$router->post('/notice',                        [NoticeController::class, 'store']);
$router->get('/notice/{id}',                    [NoticeController::class, 'show']);
$router->post('/notice/{id}',                   [NoticeController::class, 'update']);
$router->post('/notice/{id}/delete',            [NoticeController::class, 'destroy']);
$router->post('/notice/file/{fileId}/delete',   [NoticeController::class, 'destroyFile']);

// 보도자료 (BMT_IDX = 2)
$router->get('/press',              [PressController::class, 'index']);
$router->post('/press',             [PressController::class, 'store']);
$router->get('/press/{id}',         [PressController::class, 'show']);
$router->put('/press/{id}',         [PressController::class, 'update']);
$router->delete('/press/{id}',      [PressController::class, 'destroy']);

// 채용정보 (BMT_IDX = 5)
$router->get('/recruit',            [RecruitController::class, 'index']);
$router->post('/recruit',           [RecruitController::class, 'store']);
$router->get('/recruit/{id}',       [RecruitController::class, 'show']);
$router->put('/recruit/{id}',       [RecruitController::class, 'update']);
$router->delete('/recruit/{id}',    [RecruitController::class, 'destroy']);

// 건강정보 (BMT_IDX = 6)
$router->get('/health-info',        [HealthInfoController::class, 'index']);
$router->post('/health-info',       [HealthInfoController::class, 'store']);
$router->get('/health-info/{id}',   [HealthInfoController::class, 'show']);
$router->put('/health-info/{id}',   [HealthInfoController::class, 'update']);
$router->delete('/health-info/{id}',[HealthInfoController::class, 'destroy']);

// 건강상담
$router->get('/consultation',                             [ConsultationController::class, 'index']);
$router->post('/consultation',                            [ConsultationController::class, 'store']);
$router->get('/consultation/{id}',                        [ConsultationController::class, 'show']);
$router->post('/consultation/{id}/verify',                [ConsultationController::class, 'verifyPassword']);
$router->post('/consultation/{id}/delete',                [ConsultationController::class, 'destroy']);
$router->post('/consultation/{id}/reply',                 [ConsultationController::class, 'reply']);
$router->post('/consultation/file/{fileId}/delete',       [ConsultationController::class, 'destroyFile']);

// 고객의소리
$router->get('/voice',                             [VoiceController::class, 'index']);
$router->post('/voice',                            [VoiceController::class, 'store']);
$router->post('/voice/my-list',                    [VoiceController::class, 'myList']);
$router->get('/voice/{id}',                        [VoiceController::class, 'show']);
$router->post('/voice/{id}/update',                [VoiceController::class, 'update']);
$router->post('/voice/{id}/user-delete',           [VoiceController::class, 'userDelete']);
$router->post('/voice/{id}/delete',                [VoiceController::class, 'destroy']);
$router->post('/voice/{id}/reply',                 [VoiceController::class, 'reply']);
$router->post('/voice/file/{fileId}/delete',       [VoiceController::class, 'destroyFile']);
