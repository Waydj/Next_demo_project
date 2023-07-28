export default function LayoutStructure({ children, background, title }) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center ${background} bg-cover bg-no-repeat p-5 text-base lg:p-10 lg:text-xl`}
    >
      <div className="title">{title}</div>
      <div>{children}</div>
    </div>
  );
}
