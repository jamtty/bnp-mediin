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
