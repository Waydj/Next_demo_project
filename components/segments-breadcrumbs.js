import Link from "next/link";

export default function SegmentBreadcrumbs({
  startingSegment,
  segments,
  segmentTitlesMap,
}) {
  return (
    <>
      {segments.map((segment, index) => {
        const href = `${startingSegment}/${segments
          .slice(0, index + 1)
          .join("/")}`;
        console.log("href", href);
        const isLastSegment = index === segments.length - 1;

        if (isLastSegment) {
          return <span key={href}>{segmentTitlesMap[segment]}</span>;
        }

        return (
          <div key={href}>
            <Link href={href} className="link">
              {segmentTitlesMap[segment]}
            </Link>
            <span>{" > "}</span>
          </div>
        );
      })}
    </>
  );
}
