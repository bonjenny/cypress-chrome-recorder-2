import { build } from 'esbuild';

build({
  entryPoints: ['./src/CypressStringifyExtension.ts'], // 엔트리 파일 경로
  bundle: true,                                       // 모든 의존성 번들링
  outfile: './dist/CypressStringifyExtension.js',     // 출력 파일
  platform: 'browser',                                // 브라우저 환경
  format: 'esm',                                      // ES Module 형식
  sourcemap: true,                                    // 디버깅용 소스맵 생성
  target: ['chrome96'],                               // 크롬 확장 지원 버전
  external: ['puppeteer', 'lighthouse'],              // 제외할 라이브러리
}).then(() => console.log('✅ Build succeeded!'))
  .catch(() => process.exit(1));
