import type { Metadata } from "next";
import "@fontsource/geist-pixel/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jakub Cerovsky",
  description:
    "In case you are interested in my projects... Here they are!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full w-full antialiased"
    >
      <body className="h-full w-full flex flex-col">{children}</body>
    </html>
  );
}
