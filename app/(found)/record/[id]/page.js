import Link from "next/link";
import { RECORDS, RECORDS_MAP } from "./data";
import Player from "./player";

export async function generateStaticParams() {
  return RECORDS.map((record) => ({
    id: record.id,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  return {
    title: `${title} - David Kando`,
  };
}

export default function Page({ params }) {
  const { id } = params;
  const { date, blurb, Embed } = RECORDS_MAP[id];

  return (
    <>
      <div className="text-justify">{blurb}</div>
      <div className="text-sm text-slate-600">Release date: {date}</div>
      <div className="m-2 flex w-[144px] justify-between font-ranga text-2xl">
        <Link className="link" href={`/record/${id}/lyrics`}>
          Lyrics
        </Link>
        <Link className="link" href={`/record/${id}/gear`}>
          Gear used
        </Link>
      </div>
      <Player embed={<Embed />} />
    </>
  );
}
