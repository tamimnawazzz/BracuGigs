import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import imgImage3 from "figma:asset/803102b5ec27b82dff768b2d109a888a1726f4d2.png";

interface NavigationProps {
  currentUser: any;
  onLogout: () => void;
  onNavigateTo: (page: string, params?: any) => void;
  onSearch?: (query: string) => void;
}

export function Navigation({ currentUser, onLogout, onNavigateTo, onSearch }: NavigationProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <nav className="bg-white border-b border-[#d5d7da] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-[32px] py-[16px]">
        <div className="flex items-center justify-between gap-[24px]">
          {/* Logo */}
          <button
            onClick={() => onNavigateTo('home')}
            className="h-[35px] w-[125px] shrink-0"
          >
            <div className="relative size-full overflow-hidden">
              <img alt="bracugigs" className="absolute h-[408.28%] left-[-6.94%] max-w-none top-[-166.24%] w-[113.88%]" src={imgImage3} />
            </div>
          </button>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-[600px]">
            <div className="relative">
              <Search className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#717680] size-[20px]" />
              <input
                type="text"
                name="search"
                placeholder="Search for services..."
                className="w-full pl-[44px] pr-[14px] py-[10px] border border-[#d5d7da] rounded-[8px] font-['Inter'] text-[16px] text-[#181d27] placeholder:text-[#717680] outline-none focus:border-[#2d39e3] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
              />
            </div>
          </form>

          {/* User Menu */}
          <div className="flex items-center gap-[16px]">
            {currentUser.role === 'seller' && (
              <button
                onClick={() => onNavigateTo('profile', { userId: currentUser.id })}
                className="px-[16px] py-[8px] font-['Inter'] font-medium text-[14px] text-[#414651] hover:text-[#2d39e3] transition-colors"
              >
                My Gigs
              </button>
            )}
            
            <div className="relative group">
              <button className="flex items-center gap-[8px] px-[12px] py-[8px] rounded-[8px] hover:bg-[#f5f5f5] transition-colors">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="size-[32px] rounded-full object-cover"
                />
                <span className="font-['Inter'] font-medium text-[14px] text-[#414651]">
                  {currentUser.name}
                </span>
              </button>
              
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-[8px] w-[200px] bg-white border border-[#d5d7da] rounded-[8px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button
                  onClick={() => onNavigateTo('profile', { userId: currentUser.id })}
                  className="w-full px-[16px] py-[12px] text-left font-['Inter'] text-[14px] text-[#414651] hover:bg-[#f5f5f5] transition-colors"
                >
                  Profile
                </button>
                <button
                  onClick={onLogout}
                  className="w-full px-[16px] py-[12px] text-left font-['Inter'] text-[14px] text-[#414651] hover:bg-[#f5f5f5] transition-colors border-t border-[#d5d7da]"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
