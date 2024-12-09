'use client'

import { VerifyEmail } from "@/components/accounts/verifyEmail";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  return <VerifyEmail token={token}/>;
}

const SuspenseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page />
  </Suspense>
);

export default SuspenseWrapper;