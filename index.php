<?php
// public/index.php

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

switch ($uri) {
    case '/':
        require __DIR__ . '/views/home.php';
        break;
    case '/login':
        require __DIR__ . '/views/login.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/login.php';
        break;
}