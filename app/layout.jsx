import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Factor",
  description:
    "Factor is a premier publishing platform for thinkers and industry experts. We bridge the gap between complex ideas and clear insights, providing a space where high-quality content becomes a factor for change.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
