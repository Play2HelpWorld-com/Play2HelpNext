'use client'

import ResetPassword from "@/components/accounts/resetPassword";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  return <ResetPassword token={token}/>;
};

const SuspenseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page />
  </Suspense>
);
export default SuspenseWrapper;
