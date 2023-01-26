import { push } from "firebase/database";
import { useRouter } from "next/router";
import React from "react";
import { useAuthContext } from "./components/context/AuthContext";

function ProtectedRoute({ children, requireAdmin }) {
  //   로그인한 사용자가 있는지?
  //  그 사용자가 어드민권한이 있는지 ?
  // requireAdmin이 true라면 로그인도 되어있어야하고 admin도 true여야함
  // 조건에 맞지않으면 상위경로로 이동
  //   조건에 맞는경우에만 전달된 children을 보여줌
  const router = useRouter();
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return router.replace("/");
  }
  return children;
}

export default ProtectedRoute;
