import LayoutStructure from "@/components/layout-structure";

export const metadata = {
  title: "Discography",
};

export default function Layout({ children }) {
  return (
    <LayoutStructure
      background="bg-gradient-to-b from-blue-100 to-pink-50"
      title="Discography"
    >
      {children}
    </LayoutStructure>
  );
}
