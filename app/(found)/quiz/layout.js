import LayoutStructure from "@/components/layout-structure";

export const metadata = {
  title: "Quiz",
};

export default function Layout({ children }) {
  return (
    <LayoutStructure
      background="bg-gradient-to-b from-slate-100 to-purple-50"
      title="Quiz"
    >
      {children}
    </LayoutStructure>
  );
}
