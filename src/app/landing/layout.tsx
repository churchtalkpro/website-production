import type { Metadata } from "next";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "ChurchTalk - Your Church App, Live in One Week",
  description: "Stop renting mega-church software. Launch a custom app, track discipleship, and grow giving — for less than a family's weekly coffee run.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-churchtalk-charcoal">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}