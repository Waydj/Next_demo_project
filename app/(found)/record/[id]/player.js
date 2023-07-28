import { Suspense } from "react";
import Spinner from "@/components/spinner";

function Loading() {
  return (
    <dir className="flex h-[352px] w-[300px] items-center justify-center rounded bg-slate-300">
      <Spinner />
    </dir>
  );
}

export default function Player({ embed }) {
  return (
    <div className="h-[352px] w-[300px]">
      <Suspense fallback={<Loading />}>{embed}</Suspense>
    </div>
  );
}
