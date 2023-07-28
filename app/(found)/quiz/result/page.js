"use client";

import { Suspense } from "react";
import { notFound, useSearchParams } from "next/navigation";
import {
  CONCLUSION_PART_1,
  CONCLUSION_PART_2,
  CONCLUSION_PART_3,
  RESULT_MAP,
  getQuizResult,
} from "../data";
import Spinner from "@/components/spinner";

const Loading = () => {
  <div className="flex h-[352px] w-[326px] items-center justify-center rounded bg-slate-300 lg:w-[904px]">
    <Spinner />
  </div>;
};

export default function Page() {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const selections = queryString.split("&").map((item) => item.split("=")[1]);

  const selectionMap = {};

  selections.forEach((selection) => {
    selectionMap[selection] = selectionMap[selection]
      ? selectionMap[selection] + 1
      : 1;
  });

  const result = getQuizResult({ selectionMap });
  const resultData = RESULT_MAP[result];

  if (!resultData) notFound();

  return (
    <div>
      {CONCLUSION_PART_1}
      {resultData.blurb}
      {CONCLUSION_PART_2}
      <br />
      <div className="h-[352px] w-[326px] lg:w-[904px]">
        <Suspense fallback={<Loading />}>
          <resultData.Embed />
        </Suspense>
      </div>
      <br />
      <div className="text-center">
        <a href={resultData.playlistLink} target="_blank" className="link">
          Save playlist
        </a>
      </div>
      <br />
      {CONCLUSION_PART_3}
    </div>
  );
}
