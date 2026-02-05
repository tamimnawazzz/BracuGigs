import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { GigCard } from './GigCard';
import { categories, initializeMockData } from '../data/mockData';
import { Palette, TrendingUp, FileText, Video, Music, Code, Briefcase, Heart, ChevronRight } from 'lucide-react';

interface HomePageProps {
  currentUser: any;
  onLogout: () => void;
  onNavigateTo: (page: string, params?: any) => void;
}

const iconMap: { [key: string]: any } = {
  Palette,
  TrendingUp,
  FileText,
  Video,
  Music,
  Code,
  Briefcase,
  Heart,
};

export function HomePage({ currentUser, onLogout, onNavigateTo }: HomePageProps) {
  const [gigs, setGigs] = useState<any[]>([]);
  const [filteredGigs, setFilteredGigs] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    initializeMockData();
    const storedGigs = localStorage.getItem('gigs');
    if (storedGigs) {
      const allGigs = JSON.parse(storedGigs);
      setGigs(allGigs);
      setFilteredGigs(allGigs);
    }
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredGigs(gigs);
      return;
    }

    const filtered = gigs.filter(gig =>
      gig.title.toLowerCase().includes(query.toLowerCase()) ||
      gig.description.toLowerCase().includes(query.toLowerCase()) ||
      gig.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredGigs(filtered);
  };

  const featuredGigs = filteredGigs.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navigation
        currentUser={currentUser}
        onLogout={onLogout}
        onNavigateTo={onNavigateTo}
        onSearch={handleSearch}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00011e] to-[#1a1b3d] py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[32px]">
          <div className="max-w-[800px]">
            <h1 className="font-['Space_Grotesk'] font-bold text-[48px] text-white mb-[24px] leading-[1.2]">
              Find the perfect freelance services for your business
            </h1>
            <p className="font-['Space_Grotesk'] text-[20px] text-white/80 mb-[32px]">
              Connect with talented professionals and grow your business
            </p>
            <div className="flex gap-[16px] flex-wrap">
              <div className="flex items-center gap-[12px] text-white">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="font-['Space_Grotesk'] text-[16px]">Trusted by thousands</span>
              </div>
              <div className="flex items-center gap-[12px] text-white">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="font-['Space_Grotesk'] text-[16px]">Secure payments</span>
              </div>
              <div className="flex items-center gap-[12px] text-white">
                <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="font-['Space_Grotesk'] text-[16px]">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1440px] mx-auto px-[32px] py-[60px]">
        <h2 className="font-['Inter'] font-semibold text-[32px] text-[#181d27] mb-[32px]">
          Browse by category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[16px]">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => onNavigateTo('category', { category: category.id })}
                className="flex flex-col items-center justify-center p-[24px] bg-white rounded-[12px] border border-[#d5d7da] hover:border-[#2d39e3] hover:shadow-lg transition-all group"
              >
                <div className="size-[48px] bg-[#2d39e3]/10 rounded-full flex items-center justify-center mb-[12px] group-hover:bg-[#2d39e3] transition-colors">
                  <Icon className="size-[24px] text-[#2d39e3] group-hover:text-white" />
                </div>
                <span className="font-['Inter'] font-medium text-[14px] text-[#181d27] text-center">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Popular Services */}
      <section className="max-w-[1440px] mx-auto px-[32px] py-[60px]">
        <div className="flex items-center justify-between mb-[32px]">
          <h2 className="font-['Inter'] font-semibold text-[32px] text-[#181d27]">
            {searchQuery ? `Search results for "${searchQuery}"` : 'Popular services'}
          </h2>
          {!searchQuery && (
            <button className="flex items-center gap-[8px] text-[#2d39e3] font-['Inter'] font-medium text-[16px] hover:gap-[12px] transition-all">
              View all
              <ChevronRight className="size-[20px]" />
            </button>
          )}
        </div>
        
        {filteredGigs.length === 0 ? (
          <div className="text-center py-[60px]">
            <p className="font-['Inter'] text-[18px] text-[#717680]">
              No services found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {featuredGigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} onNavigateTo={onNavigateTo} />
            ))}
          </div>
        )}
      </section>

      {/* How it works */}
      <section className="bg-white py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[32px]">
          <h2 className="font-['Inter'] font-semibold text-[32px] text-[#181d27] text-center mb-[60px]">
            How bracugigs works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            <div className="text-center">
              <div className="size-[80px] bg-[#2d39e3]/10 rounded-full flex items-center justify-center mx-auto mb-[24px]">
                <span className="font-['Inter'] font-bold text-[32px] text-[#2d39e3]">1</span>
              </div>
              <h3 className="font-['Inter'] font-semibold text-[20px] text-[#181d27] mb-[12px]">
                Find the right service
              </h3>
              <p className="font-['Inter'] text-[16px] text-[#717680]">
                Browse through our categories and find the perfect service for your needs
              </p>
            </div>
            <div className="text-center">
              <div className="size-[80px] bg-[#2d39e3]/10 rounded-full flex items-center justify-center mx-auto mb-[24px]">
                <span className="font-['Inter'] font-bold text-[32px] text-[#2d39e3]">2</span>
              </div>
              <h3 className="font-['Inter'] font-semibold text-[20px] text-[#181d27] mb-[12px]">
                Place your order
              </h3>
              <p className="font-['Inter'] text-[16px] text-[#717680]">
                Choose your package and provide project details to get started
              </p>
            </div>
            <div className="text-center">
              <div className="size-[80px] bg-[#2d39e3]/10 rounded-full flex items-center justify-center mx-auto mb-[24px]">
                <span className="font-['Inter'] font-bold text-[32px] text-[#2d39e3]">3</span>
              </div>
              <h3 className="font-['Inter'] font-semibold text-[20px] text-[#181d27] mb-[12px]">
                Get your delivery
              </h3>
              <p className="font-['Inter'] text-[16px] text-[#717680]">
                Receive high-quality work on time and request revisions if needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00011e] text-white py-[60px]">
        <div className="max-w-[1440px] mx-auto px-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px] mb-[40px]">
            <div>
              <h4 className="font-['Inter'] font-semibold text-[16px] mb-[16px]">Categories</h4>
              <ul className="space-y-[12px]">
                {categories.slice(0, 4).map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => onNavigateTo('category', { category: cat.id })}
                      className="font-['Inter'] text-[14px] text-white/60 hover:text-white transition-colors"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[16px] mb-[16px]">About</h4>
              <ul className="space-y-[12px]">
                <li className="font-['Inter'] text-[14px] text-white/60">About Us</li>
                <li className="font-['Inter'] text-[14px] text-white/60">Careers</li>
                <li className="font-['Inter'] text-[14px] text-white/60">Press</li>
                <li className="font-['Inter'] text-[14px] text-white/60">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[16px] mb-[16px]">Support</h4>
              <ul className="space-y-[12px]">
                <li className="font-['Inter'] text-[14px] text-white/60">Help Center</li>
                <li className="font-['Inter'] text-[14px] text-white/60">Safety</li>
                <li className="font-['Inter'] text-[14px] text-white/60">Terms</li>
                <li className="font-['Inter'] text-[14px] text-white/60">Privacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[16px] mb-[16px]">Community</h4>
              <ul className="space-y-[12px]">
                <li className="font-['Inter'] text-[14px] text-white/60">Events</li>
                <li className="font-['Inter'] text-[14px] text-white/60">Forum</li>
                <li className="font-['Inter'] text-[14px] text-white/60">Affiliates</li>
                <li className="font-['Inter'] text-[14px] text-white/60">Podcast</li>
              </ul>
            </div>
          </div>
          <div className="pt-[40px] border-t border-white/10 flex items-center justify-between">
            <p className="font-['Inter'] text-[14px] text-white/60">© bracugigs 2025</p>
            <p className="font-['Inter'] text-[14px] text-white/60">help@bracugigs.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
