import LayoutStructure from "@/components/layout-structure";

export const metadata = {
  title: "Connect with us",
};

export default function Layout({ children }) {
  return (
    <LayoutStructure
      background="bg-gradient-to-b from-slate-100 to-pink-100"
      title="Let's hang around"
    >
      {children}
    </LayoutStructure>
  );
}
