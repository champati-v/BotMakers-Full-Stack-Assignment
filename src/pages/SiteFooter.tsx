import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

const quickLinksLeft = [
  "The Arena",
  "Episodes",
  "National Rankings",
  "Programs",
  "Rulebooks",
];

const quickLinksRight = [
  "Join the Team",
  "Sponsorships",
  "Help Center",
  "Contact Us",
  "Legal",
];

const socialIcons = [
  { icon: youtube, alt: "youtube" },
  { icon: instagram, alt: "instagram" },
  { icon: facebook, alt: "facebook" },
  { icon: twitter, alt: "twitter" },
]

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-primary">
      <div className="mx-auto max-w-360 px-6 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-12 lg:pt-10">
        
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row justify-between">
         
         <div className="">
            <h2 className="mt-8 font-body sm:text-[20px] lg:text-[25px]">
              Quick Links
            </h2>
            <div className="mt-4 flex gap-16">
              <div>
                {quickLinksLeft.map((link) => (
                  <a key={link} href="#" className="block mt-2 text-white/55">
                    {link}
                  </a>
                ))}
              </div>
              <div>
                {quickLinksRight.map((link) => (
                  <a key={link} href="#" className="block mt-2 text-white/55">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-center">
            <h2 className="mt-8 font-body sm:text-[20px] lg:text-[25px]">
              Social Media
            </h2>
            <div className="mt-4 flex gap-4">
              {socialIcons.map((social) => (
                <a key={social.alt} href="#" className="text-primary hover:text-accent">
                  <img src={social.icon} alt={social.alt} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
