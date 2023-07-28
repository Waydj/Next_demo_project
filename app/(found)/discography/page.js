"use client";

import Link from "next/link";
import Image from "next/image";
import { RECORDS } from "../record/[id]/data";
import { memo, useDeferredValue, useEffect, useState } from "react";

const PlayRow = ({ title, href, iconImage }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-row items-center justify-center border-t-[2px] border-slate-200 p-3 hover:bg-sky-100"
    >
      <span className="mr-1">Play on</span>
      <span className="relative h-[24px] w-[80px]">
        <Image src={iconImage} fill sizes="80px" alt={title} />
      </span>
    </a>
  );
};

const Records = memo(function Records({ records }) {
  if (records.length > 0) {
    return records.map(
      ({
        id,
        title,
        date,
        blurb,
        albumImage,
        recordHalfImage,
        spotifyLink,
        appleMusicLink,
        youtubeMusicLink,
      }) => (
        <div key={id}>
          <div className="discography-panel text-left">
            <Link
              href={`/record/${id}`}
              className="flex flex-row justify-center"
            >
              <div className="relative h-[180px] w-[180px] lg:h-[256px] lg:w-[256px]">
                <Image
                  src={albumImage}
                  fill
                  sizes="(max-width: 1024px) 180px, 256px"
                  priority
                  alt=""
                />
              </div>
              <div className="relative h-[180px] w-[90px] lg:h-[256px] lg:w-[128px]">
                <Image
                  src={recordHalfImage}
                  fill
                  sizes="(max-width: 1024px) 90px, 128px"
                  alt=""
                />
              </div>
            </Link>
            {title}
            <div className="text-justify text-base lg:text-lg">{blurb}</div>
            <div className="text-base text-slate-600">Release date: {date}</div>
            <br />
            <PlayRow
              title="Spotify"
              href={spotifyLink}
              iconImage="/spotify_icon_500.png"
            />
            <PlayRow
              title="Apple Music"
              href={appleMusicLink}
              iconImage="/apple_music_icon_500.png"
            />
            <PlayRow
              title="Youtube Music"
              href={youtubeMusicLink}
              iconImage="/youtube_music_icon_500.png"
            />
          </div>
          <br />
        </div>
      ),
    );
  }

  return <div className="discography-panel text-center">No match</div>;
});

export default function Page() {
  const [text, setText] = useState("");
  const [records, setRecords] = useState(RECORDS);
  const deferredText = useDeferredValue(text);


  useEffect(() => {
    const filteredRecords = RECORDS.filter((records) =>
      records.title.toLowerCase().includes(deferredText.toLowerCase()),
    );

    setRecords(filteredRecords);
  }, [deferredText]);

  return (
    <div className="min-h-screen">
      <div className="discography-panel text-center">
        <div className="mb-2">Search for a record</div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="w-full border-[2px] border-slate-200"
        />
      </div>
      <br />
      <Records records={records} />
    </div>
  );
}
