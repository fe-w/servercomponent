## 프론트엔드 렌더링 방식 (Client component, Server component)

- [1] 서버 컴포넌트 도입 전 기존 방식
   1. page01 ~ page03은 모두 클라이언트 중심의 렌더링, CSR 방식으로, fetch를 클라이언트에서 수행하고 상태로 제어합니다.

- [2] 서버 컴포넌트 도입 후 달라진 방식
   1. page04는 use server를 통해 서버에서 fetch하지만 클라이언트에서 제어 및 이벤트 처리합니다.  
   2. page05, page06은 서버 컴포넌트 + Suspense 구조로, 서버에서 데이터를 미리 받아 클라이언트에 props로 넘기며 초기 렌더링을 최적화합니다.



## Hom to start

```
1.
nextjs 설치 npx create-next-app
디렉토리, 페이지, 서버 컴포넌트, 클라이언트 컴포넌트 생성, type 추론 글로벌 적용
메인 공통 레이아웃에 nav 추가
개발 서버 실행 pnpm dev

2.
서버 로그, 브라우저 쿼리, 브라우저 네트워크 응답/미리보기/페이로드/타이밍 동시 확인
```

