"use client";

import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import LayoutStructure from "@/components/layout-structure";
import { RECORDS_MAP, findIdByPathname, SEGMENT_TITLES_MAP } from "./[id]/data";
import SegmentBreadcrumbs from "@/components/segments-breadcrumbs";

export default function Layout({ children }) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();

  console.log("pathname", pathname);
  console.log("segments", segments);

  const id = findIdByPathname(pathname);
  const { background } = RECORDS_MAP[id];

  return (
    <LayoutStructure
      background={background}
      title={
        <SegmentBreadcrumbs
          startingSegment="/record"
          segments={segments}
          segmentTitlesMap={SEGMENT_TITLES_MAP}
        />
      }
    >
      <div className="flex flex-col items-center">{children}</div>
    </LayoutStructure>
  );
}
