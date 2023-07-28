import Link from "next/link";
import { GRID_DATA_ITEMS } from "../data";

export default function Layout({ children }) {
  return (
    <div className="flex w-full flex-col items-center pb-4 pt-4">
      <div className="flex w-[350px] flex-col items-center bg-slate-100 pb-10 pt-10 lg:w-[1000px]">
        <div className="title">David Kando Music</div>
        <div className="grid grid-cols-2 gap-1 lg:grid-cols-4">
          {GRID_DATA_ITEMS.map((gridDataItem) => {
            const { id, attributes } = gridDataItem;
            return (
              <Link href={attributes.href} key={id}>
                <div
                  className={`${attributes.background} flex h-36 w-36 items-end border-2 border-black lg:h-52 lg:w-52`}
                >
                  <div className="mb-2 w-full bg-slate-200/75 text-center font-ranga text-sm  hover:bg-slate-700 hover:text-white lg:h-[30px] lg:text-xl">
                    {attributes.text}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <br />
      {children}
    </div>
  );
}
