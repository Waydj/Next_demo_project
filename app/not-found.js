import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="font-ranga text-4xl">404 - page not found</div>
      <div className="font-roboto text-2xl">
        Try going to the <Link href={"/"} className="link">home page</Link>
      </div>
    </>
  );
}
