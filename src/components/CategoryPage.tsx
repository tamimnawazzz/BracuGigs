import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { GigCard } from './GigCard';
import { categories } from '../data/mockData';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';

interface CategoryPageProps {
  category: string;
  currentUser: any;
  onNavigateTo: (page: string, params?: any) => void;
  onLogout: () => void;
}

export function CategoryPage({ category, currentUser, onNavigateTo, onLogout }: CategoryPageProps) {
  const [gigs, setGigs] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  useEffect(() => {
    const gigsData = localStorage.getItem('gigs');
    if (gigsData) {
      let filteredGigs = JSON.parse(gigsData).filter((g: any) => g.category === category);
      
      // Apply price filter
      if (priceRange === 'low') {
        filteredGigs = filteredGigs.filter((g: any) => g.price < 100);
      } else if (priceRange === 'medium') {
        filteredGigs = filteredGigs.filter((g: any) => g.price >= 100 && g.price < 300);
      } else if (priceRange === 'high') {
        filteredGigs = filteredGigs.filter((g: any) => g.price >= 300);
      }

      // Apply sorting
      if (sortBy === 'popular') {
        filteredGigs.sort((a: any, b: any) => b.orders - a.orders);
      } else if (sortBy === 'rating') {
        filteredGigs.sort((a: any, b: any) => b.rating - a.rating);
      } else if (sortBy === 'price-low') {
        filteredGigs.sort((a: any, b: any) => a.price - b.price);
      } else if (sortBy === 'price-high') {
        filteredGigs.sort((a: any, b: any) => b.price - a.price);
      }

      setGigs(filteredGigs);
    }
  }, [category, sortBy, priceRange]);

  const categoryInfo = categories.find(c => c.id === category);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navigation
        currentUser={currentUser}
        onLogout={onLogout}
        onNavigateTo={onNavigateTo}
      />

      <div className="max-w-[1440px] mx-auto px-[32px] py-[32px]">
        {/* Back Button */}
        <button
          onClick={() => onNavigateTo('home')}
          className="flex items-center gap-[8px] text-[#2d39e3] font-['Inter'] font-medium text-[16px] mb-[24px] hover:gap-[12px] transition-all"
        >
          <ArrowLeft className="size-[20px]" />
          Back to home
        </button>

        {/* Header */}
        <div className="mb-[32px]">
          <h1 className="font-['Inter'] font-semibold text-[36px] text-[#181d27] mb-[8px]">
            {categoryInfo?.name}
          </h1>
          <p className="font-['Inter'] text-[16px] text-[#717680]">
            {gigs.length} services available
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[32px]">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[12px] border border-[#d5d7da] p-[24px] sticky top-[100px]">
              <div className="flex items-center gap-[12px] mb-[24px]">
                <SlidersHorizontal className="size-[20px] text-[#414651]" />
                <h2 className="font-['Inter'] font-semibold text-[18px] text-[#181d27]">
                  Filters
                </h2>
              </div>

              {/* Price Range */}
              <div className="mb-[24px]">
                <h3 className="font-['Inter'] font-medium text-[16px] text-[#414651] mb-[12px]">
                  Price range
                </h3>
                <div className="space-y-[8px]">
                  <label className="flex items-center gap-[8px] cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === 'all'}
                      onChange={() => setPriceRange('all')}
                      className="size-[16px] accent-[#2d39e3]"
                    />
                    <span className="font-['Inter'] text-[14px] text-[#535862]">All</span>
                  </label>
                  <label className="flex items-center gap-[8px] cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === 'low'}
                      onChange={() => setPriceRange('low')}
                      className="size-[16px] accent-[#2d39e3]"
                    />
                    <span className="font-['Inter'] text-[14px] text-[#535862]">Under $100</span>
                  </label>
                  <label className="flex items-center gap-[8px] cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === 'medium'}
                      onChange={() => setPriceRange('medium')}
                      className="size-[16px] accent-[#2d39e3]"
                    />
                    <span className="font-['Inter'] text-[14px] text-[#535862]">$100 - $300</span>
                  </label>
                  <label className="flex items-center gap-[8px] cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === 'high'}
                      onChange={() => setPriceRange('high')}
                      className="size-[16px] accent-[#2d39e3]"
                    />
                    <span className="font-['Inter'] text-[14px] text-[#535862]">$300+</span>
                  </label>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="font-['Inter'] font-medium text-[16px] text-[#414651] mb-[12px]">
                  Sort by
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-[14px] py-[10px] border border-[#d5d7da] rounded-[8px] font-['Inter'] text-[14px] text-[#414651] outline-none focus:border-[#2d39e3]"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Best Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Gigs Grid */}
          <div className="lg:col-span-3">
            {gigs.length === 0 ? (
              <div className="text-center py-[60px]">
                <p className="font-['Inter'] text-[18px] text-[#717680]">
                  No services found in this category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {gigs.map((gig) => (
                  <GigCard key={gig.id} gig={gig} onNavigateTo={onNavigateTo} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
