import { Suspense } from "react";
import Page06ServerComponent from "./Page06ServerComponent";

export default function Page({ searchParams }: any) {
  return (
    <>
      <section>
        <h2>Page 06</h2>
        <ul className="page-info server-component">
          <li><span>1. 구성</span> : Server + Suspense + Client + 쿼리</li>
          <li><span>2. 특징</span> : 쿼리스트링으로 postId 받아서 서버에서 fetch, 클라이언트에 전달</li>
          <li><span>3. 데이터 fetch 위치</span> : 서버 컴포넌트</li>
          <li><span>4. 이벤트 처리</span> : 클라이언트에서 쿼리 업데이트로 이벤트 처리</li>
          <li><span>5. 응답 형태</span> : Object</li>
          <li><span>6. 페이로드</span> : postId, _rsc</li>
        </ul>
        <div className="component-container">
          <Suspense fallback={<div>서버 데이터 로딩중...</div>}>
            <Page06ServerComponent searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
