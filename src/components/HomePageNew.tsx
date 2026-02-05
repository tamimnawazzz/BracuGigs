import { Search, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgImage3 from "figma:asset/803102b5ec27b82dff768b2d109a888a1726f4d2.png";
import imgContainer from "figma:asset/b83ade1dd8d9952afdd16e57b3657217a4bb8c85.png";
import imgBackground from "figma:asset/c9cf8a225363fe9d4ff46df8f36b3d905a0f6aee.png";
import imgWebsiteDevelopment from "figma:asset/18dff369031c49f7150fe4ad1cf86e14ce82fa12.png";
import imgLogoDesign from "figma:asset/de09826ec5c4ab7efdb9fcf8e4026519630afcf3.png";
import imgAiDevelopment from "figma:asset/a8f3ee0ae17ffe35d408dc55d75baf37a5ad598b.png";
import imgSoftwareDevelopment from "figma:asset/62be02c69182cee42b1c1abc757adc73920642d3.png";
import imgArchitectureInteriorDesign from "figma:asset/db170d95fd080905d9fd96941ac3a36f743fc35c.png";
import imgBookPublishing from "figma:asset/df2c45177afbaa7cb68692d1a1162e495b9a122d.png";
import imgVideoEditing from "figma:asset/73246a691cde72ff9412671f50f8e95b2dab4033.png";
import imgVoiceOver from "figma:asset/9f5e891c15ca2604fd56b4d066f4a1eeee5dad2c.png";
import imgSocialMediaMarketing from "figma:asset/f7360106da200a4a52d790194433d8158edf4d02.png";
import imgFiverrLogoMaker from "figma:asset/0ec7defd1c65f6ce1af153feac35da21976663c0.png";

interface HomePageNewProps {
  currentUser: any;
  onLogout: () => void;
  onNavigateTo: (page: string, params?: any) => void;
}

export function HomePageNew({ currentUser, onLogout, onNavigateTo }: HomePageNewProps) {
  const popularServices = [
    { id: 1, title: 'Website Development', color: '#0070e0', image: imgWebsiteDevelopment },
    { id: 2, title: 'Logo Design', color: '#ff6b00', image: imgLogoDesign },
    { id: 3, title: 'SEO', color: '#00ab41', image: imgWebsiteDevelopment },
    { id: 4, title: 'Architecture & Interior Design', color: '#ae1c4a', image: imgArchitectureInteriorDesign },
    { id: 5, title: 'Social Media Marketing', color: '#00a3e0', image: imgSocialMediaMarketing },
    { id: 6, title: 'Voice Over', color: '#4a1aae', image: imgVoiceOver }
  ];

  const categories = [
    { icon: '💼', name: 'Programming & Tech' },
    { icon: '🎨', name: 'Graphics & Design' },
    { icon: '📱', name: 'Digital Marketing' },
    { icon: '✍️', name: 'Writing & Translation' },
    { icon: '🎥', name: 'Video & Animation' },
    { icon: '🎵', name: 'Music & Audio' },
    { icon: '💡', name: 'Business' },
    { icon: '🏃', name: 'Lifestyle' }
  ];

  const trustedBy = [
    'FACEBOOK', 'GOOGLE', 'NETFLIX', 'P&G', 'PayPal'
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1545181824-24c265f8fd48?w=400',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    'https://images.unsplash.com/photo-1693159682618-074078ed271e?w=400',
    'https://images.unsplash.com/photo-1759390304277-df4f95509186?w=400',
    'https://images.unsplash.com/photo-1545181824-24c265f8fd48?w=400',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    'https://images.unsplash.com/photo-1693159682618-074078ed271e?w=400',
    'https://images.unsplash.com/photo-1759390304277-df4f95509186?w=400',
    'https://images.unsplash.com/photo-1545181824-24c265f8fd48?w=400',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    'https://images.unsplash.com/photo-1693159682618-074078ed271e?w=400',
    'https://images.unsplash.com/photo-1759390304277-df4f95509186?w=400'
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-[#e9eaeb]">
        <div className="max-w-[1400px] mx-auto px-[32px] h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-[48px]">
            <button onClick={() => onNavigateTo('home')} className="h-[35px] w-[125px]">
              <div className="relative size-full overflow-hidden">
                <img alt="bracugigs" className="absolute h-[408.28%] left-[-6.94%] max-w-none top-[-166.24%] w-[113.88%]" src={imgImage3} />
              </div>
            </button>
            
            <nav className="flex items-center gap-[32px]">
              <button className="font-['Inter'] text-[16px] text-[#404145] hover:text-[#222325] transition-colors">
                Gig Services
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-[24px]">
            <button className="font-['Inter'] text-[16px] text-[#404145] hover:text-[#222325]">
              Become a Seller
            </button>
            <div className="relative group">
              <button className="flex items-center gap-[8px]">
                <img src={currentUser.avatar} alt={currentUser.name} className="size-[32px] rounded-full object-cover" />
                <span className="font-['Inter'] text-[16px] text-[#404145]">{currentUser.name}</span>
              </button>
              <div className="absolute right-0 top-full mt-[8px] w-[200px] bg-white border border-[#e9eaeb] rounded-[8px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button onClick={onLogout} className="w-full px-[16px] py-[12px] text-left font-['Inter'] text-[14px] text-[#404145] hover:bg-[#f5f5f5]">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[680px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgBackground} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-[32px] h-full flex flex-col justify-center">
          <div className="max-w-[650px]">
            <h1 className="font-['Inter'] font-light text-[72px] leading-[86.4px] text-white tracking-[-4.32px] mb-[32px]">
              Our freelancers<br />will take it from here
            </h1>
            
            <div className="relative h-[60px] mb-[24px]">
              <input
                type="text"
                placeholder="Search for any service..."
                className="w-full h-full px-[17px] rounded-[12px] border border-[#c5c6c9] font-['Inter'] text-[16px] text-[#95979d] pr-[70px]"
              />
              <button className="absolute right-[6px] top-[6px] size-[48px] bg-[#222325] rounded-[8px] flex items-center justify-center">
                <Search className="size-[18px] text-white" />
              </button>
            </div>

            <div className="flex items-center gap-[12px] text-white">
              <span className="font-['Inter'] text-[16px]">Popular:</span>
              <div className="flex gap-[12px]">
                <button className="px-[16px] py-[6px] rounded-[24px] border border-white/30 hover:bg-white/10 transition-colors font-['Inter'] text-[16px]">
                  Website Development
                </button>
                <button className="px-[16px] py-[6px] rounded-[24px] border border-white/30 hover:bg-white/10 transition-colors font-['Inter'] text-[16px]">
                  Logo Design
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-[#e9eaeb]">
          <div className="max-w-[1400px] mx-auto px-[32px] py-[24px]">
            <div className="flex items-center gap-[48px]">
              <span className="font-['Inter'] text-[16px] text-[#b5b6ba]">Trusted by:</span>
              <div className="flex items-center gap-[48px]">
                {trustedBy.map((brand, i) => (
                  <span key={i} className="font-['Inter'] font-semibold text-[20px] text-[#b5b6ba]">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="max-w-[1400px] mx-auto px-[32px] py-[64px]">
        <h2 className="font-['Inter'] font-semibold text-[32px] text-[#404145] mb-[32px]">
          Popular services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[16px]">
          {popularServices.map((service) => (
            <div
              key={service.id}
              className="relative rounded-[8px] overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              style={{ backgroundColor: service.color }}
            >
              <div className="aspect-[1/1.2] relative">
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <p className="absolute bottom-[16px] left-[16px] right-[16px] font-['Inter'] font-medium text-[18px] text-white">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet gigs with Vibe */}
      <section className="bg-[#d77695] py-[64px]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-['Inter'] font-semibold text-[48px] text-white mb-[16px]">
                Meet gigs with Vibe
              </h2>
              <button className="bg-white text-[#d77695] px-[24px] py-[12px] rounded-[8px] font-['Inter'] font-semibold text-[16px] hover:bg-[#f5f5f5] transition-colors">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* High Quality Work */}
      <section className="bg-[#b4d3e0] py-[64px]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="max-w-[600px]">
            <p className="font-['Inter'] text-[16px] text-[#5c6f77] mb-[16px]">
              bracugigs
            </p>
            <h2 className="font-['Inter'] font-semibold text-[48px] text-[#233d45] mb-[16px]">
              High-quality work done quickly. Find the{' '}
              <span className="italic">right freelancer</span> to begin working on your project within minutes.
            </h2>
            <button className="bg-[#233d45] text-white px-[24px] py-[12px] rounded-[8px] font-['Inter'] font-semibold text-[16px] hover:bg-[#1a2d33] transition-colors">
              Join now
            </button>
          </div>
        </div>
      </section>

      {/* Genuine Rated Services */}
      <section className="max-w-[1400px] mx-auto px-[32px] py-[64px]">
        <h2 className="font-['Inter'] font-semibold text-[32px] text-[#404145] mb-[48px]">
          Genuine rated services
        </h2>
        <div className="grid grid-cols-4 gap-[32px]">
          {[
            { icon: '💼', title: 'Over 700 categories', desc: 'Get results from skilled freelancers from all over the world, for every task, at any price point.' },
            { icon: '✋', title: 'Clear, transparent pricing', desc: 'Pay per project or by the hour (Pro). Payments only get released when you approve.' },
            { icon: '⚡', title: 'Quality work done faster', desc: 'Filter to find the right freelancers quickly and get great work delivered in no time, every time.' },
            { icon: '🛡️', title: '24/7 award-winning support', desc: "Chat with our team to get your questions answered or resolve any issues with your orders." }
          ].map((item, i) => (
            <div key={i}>
              <div className="text-[48px] mb-[16px]">{item.icon}</div>
              <h3 className="font-['Inter'] font-semibold text-[20px] text-[#404145] mb-[8px]">
                {item.title}
              </h3>
              <p className="font-['Inter'] text-[16px] text-[#62646a] leading-[24px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Make it all happen */}
      <section className="bg-[#f1f2f3] py-[64px]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <h2 className="font-['Inter'] font-semibold text-[32px] text-[#404145] mb-[16px]">
            Make it all happen with freelancers
          </h2>
          <p className="font-['Inter'] text-[18px] text-[#62646a] mb-[48px]">
            Access a global pool of skilled professionals for every task.
          </p>
          
          <div className="grid grid-cols-4 gap-[24px]">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="bg-white p-[24px] rounded-[8px] text-left hover:shadow-lg transition-shadow"
              >
                <div className="text-[32px] mb-[12px]">{cat.icon}</div>
                <p className="font-['Inter'] font-medium text-[16px] text-[#404145]">
                  {cat.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Maker Promo */}
      <section className="bg-[#f5f0eb] py-[64px]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="flex items-center justify-between">
            <div className="max-w-[500px]">
              <p className="font-['Inter'] text-[16px] text-[#6e5a4a] mb-[16px]">
                bracugigs
              </p>
              <h2 className="font-['Inter'] font-semibold text-[48px] text-[#2f2519] mb-[16px]">
                Make an incredible logo <span className="italic">in seconds</span>
              </h2>
              <p className="font-['Inter'] text-[18px] text-[#6e5a4a] mb-[24px]">
                Pre-designed by top talent. Just add your touch.
              </p>
              <button className="bg-[#2f2519] text-white px-[24px] py-[12px] rounded-[8px] font-['Inter'] font-semibold text-[16px] hover:bg-[#1f170f] transition-colors">
                Try Bracugigs Logo Maker
              </button>
            </div>
            <div>
              <img src={imgFiverrLogoMaker} alt="Logo Maker" className="h-[300px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Made by the logos Gallery */}
      <section className="max-w-[1400px] mx-auto px-[32px] py-[64px]">
        <div className="flex items-center justify-between mb-[32px]">
          <h2 className="font-['Inter'] font-semibold text-[32px] text-[#404145]">
            Made by the logos
          </h2>
          <button className="flex items-center gap-[8px] text-[#404145] hover:text-[#222325]">
            <span className="font-['Inter'] font-medium text-[16px]">Get inspired</span>
            <ChevronRight className="size-[20px]" />
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-[16px]">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-square rounded-[8px] overflow-hidden">
              <ImageWithFallback
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="bg-[#f1f2f3] py-[64px]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="flex items-center justify-between mb-[32px]">
            <h2 className="font-['Inter'] font-semibold text-[32px] text-[#404145]">
              Guides to help you grow
            </h2>
            <button className="flex items-center gap-[8px] text-[#404145] hover:text-[#222325]">
              <span className="font-['Inter'] font-medium text-[16px]">See more guides</span>
              <ChevronRight className="size-[20px]" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-[24px]">
            {[
              { title: 'Start a side business', img: 'https://images.unsplash.com/photo-1693159682618-074078ed271e?w=400' },
              { title: 'Ecommerce business Ideas', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400' },
              { title: 'Start an online business and work from home', img: 'https://images.unsplash.com/photo-1545181824-24c265f8fd48?w=400' }
            ].map((guide, i) => (
              <div key={i} className="bg-white rounded-[8px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <ImageWithFallback src={guide.img} alt={guide.title} className="w-full aspect-[16/9] object-cover" />
                <div className="p-[24px]">
                  <h3 className="font-['Inter'] font-semibold text-[18px] text-[#404145]">
                    {guide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#2f1a2e] py-[48px]">
        <div className="max-w-[1400px] mx-auto px-[32px] text-center">
          <h2 className="font-['Inter'] font-semibold text-[40px] text-white mb-[24px]">
            Freelance services at your <span className="italic">fingertips</span>
          </h2>
          <button className="bg-white text-[#2f1a2e] px-[32px] py-[14px] rounded-[8px] font-['Inter'] font-semibold text-[18px] hover:bg-[#f5f5f5] transition-colors">
            Join Bracugigs
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e9eaeb] py-[48px]">
        <div className="max-w-[1400px] mx-auto px-[32px]">
          <div className="grid grid-cols-5 gap-[48px] mb-[48px]">
            <div>
              <h4 className="font-['Inter'] font-semibold text-[16px] text-[#404145] mb-[16px]">Categories</h4>
              <ul className="space-y-[12px]">
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Graphics & Design</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Digital Marketing</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Writing & Translation</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Video & Animation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[16px] text-[#404145] mb-[16px]">About</h4>
              <ul className="space-y-[12px]">
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Careers</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Press & News</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Partnerships</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[16px] text-[#404145] mb-[16px]">Support</h4>
              <ul className="space-y-[12px]">
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Help & Support</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Trust & Safety</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Selling on Bracugigs</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Buying on Bracugigs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[16px] text-[#404145] mb-[16px]">Community</h4>
              <ul className="space-y-[12px]">
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Events</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Blog</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Forum</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Community Standards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[16px] text-[#404145] mb-[16px]">More From Bracugigs</h4>
              <ul className="space-y-[12px]">
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Bracugigs Business</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Bracugigs Pro</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Bracugigs Studios</li>
                <li className="font-['Inter'] text-[14px] text-[#62646a] hover:underline cursor-pointer">Bracugigs Logo Maker</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-[24px] border-t border-[#e9eaeb] flex items-center justify-between">
            <div className="flex items-center gap-[16px]">
              <div className="h-[35px] w-[125px]">
                <div className="relative size-full overflow-hidden">
                  <img alt="bracugigs" className="absolute h-[408.28%] left-[-6.94%] max-w-none top-[-166.24%] w-[113.88%]" src={imgImage3} />
                </div>
              </div>
              <span className="font-['Inter'] text-[14px] text-[#95979d]">© Bracugigs International Ltd. 2025</span>
            </div>
            
            <div className="flex items-center gap-[24px]">
              <button className="font-['Inter'] text-[14px] text-[#95979d] hover:text-[#404145]">English</button>
              <button className="font-['Inter'] text-[14px] text-[#95979d] hover:text-[#404145]">USD</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
