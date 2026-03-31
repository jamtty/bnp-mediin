<?php
/**
 * HMAC-SHA256 기반 토큰 생성/검증
 * JWT 구조와 호환되는 간략 구현 (외부 라이브러리 불필요)
 */
class Token
{
    private static function secret(): string
    {
        return Env::get('JWT_SECRET', 'chamajungmul_secret_key_2025');
    }

    /**
     * 토큰 생성
     * @param array $payload  { sub, name, role }
     * @param int   $ttl      유효시간(초), 기본 24시간
     */
    public static function generate(array $payload, int $ttl = 86400): string
    {
        $payload['iat'] = time();
        $payload['exp'] = time() + $ttl;

        $header    = self::base64url(json_encode(['alg' => 'HS256', 'typ' => 'JWT']));
        $body      = self::base64url(json_encode($payload));
        $signature = self::base64url(hash_hmac('sha256', "$header.$body", self::secret(), true));

        return "$header.$body.$signature";
    }

    /**
     * 토큰 검증
     * @return array|null  유효하면 payload 배열, 아니면 null
     */
    public static function verify(string $token): ?array
    {
        $parts = explode('.', $token);
        if (count($parts) !== 3) return null;

        [$header, $body, $sig] = $parts;

        $expected = self::base64url(hash_hmac('sha256', "$header.$body", self::secret(), true));
        if (!hash_equals($expected, $sig)) return null;

        $payload = json_decode(self::base64urlDecode($body), true);
        if (!$payload || !isset($payload['exp'])) return null;
        if ($payload['exp'] < time()) return null;

        return $payload;
    }

    /**
     * Authorization: Bearer 헤더에서 토큰 추출 + 검증
     */
    public static function fromRequest(): ?array
    {
        $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
        if (!str_starts_with($auth, 'Bearer ')) return null;
        return self::verify(substr($auth, 7));
    }

    private static function base64url(string $data): string
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    private static function base64urlDecode(string $data): string
    {
        return base64_decode(strtr($data, '-_', '+/') . str_repeat('=', (4 - strlen($data) % 4) % 4));
    }
}
