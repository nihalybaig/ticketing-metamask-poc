import HeroBanner from "./HeroBanner";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WhatsOn from "./WhatsOn";
import WhatsHot from "./WhatsHot";
import TrendsArtist from "./TrendsArtist";
import ReachingOut from "./ReachingOut";
import BrowseCategories from "./BrowseCategories";

export default function HomePage() {

  return (
    <>
      <NavBar />
      <HeroBanner />

      <div className="px-4 md:px-0">
        <WhatsOn />
        <WhatsHot />
        <TrendsArtist />

        <ReachingOut />
        <BrowseCategories />
      </div>
      <Footer />
    </>
  );
}
