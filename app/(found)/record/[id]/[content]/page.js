import Link from "next/link";
import { RECORDS, CONTENT_PATHS, RECORDS_MAP } from "../data";
import Player from "../player";

export async function generateStaticParams() {
  const recordSegmentMaps = [];

  RECORDS.forEach((record) => {
    CONTENT_PATHS.forEach((contentPath) => {
      recordSegmentMaps.push({
        id: record.id,
        content: contentPath,
      });
    });
  });

  return recordSegmentMaps;
}

export default function Page({ params: { id, content } }) {
  const contentJsx = RECORDS_MAP[id][content];
  const { Embed } = RECORDS_MAP[id];

  return (
    <>
      <Player embed={<Embed />} />
      <br />
      {contentJsx}
    </>
  );
}
