import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";

export default function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <Navbar showAnnouncementOffset />
      <AnnouncementBar />
    </div>
  );
}
