import { Star, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GigCardProps {
  gig: any;
  onNavigateTo: (page: string, params?: any) => void;
}

export function GigCard({ gig, onNavigateTo }: GigCardProps) {
  // Map gig image query to actual image URLs from Unsplash
  const imageMap: { [key: string]: string } = {
    'logo design branding': 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzcwMTQ2NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'social media marketing': 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NzAxNTU3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'writing blog article': 'https://images.unsplash.com/photo-1565489030990-e211075fe11c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwYmxvZyUyMGFydGljbGV8ZW58MXx8fHwxNzcwMjA5MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'video production product': 'https://images.unsplash.com/photo-1548944588-bd022d6b3a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBwcm9kdWN0fGVufDF8fHx8MTc3MDIwOTM4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    'microphone recording studio': 'https://images.unsplash.com/photo-1613412207572-5bf376466f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Bob25lJTIwcmVjb3JkaW5nJTIwc3R1ZGlvfGVufDF8fHx8MTc3MDE0NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    'coding programming laptop': 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzAyMDkzODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'business plan strategy': 'https://images.unsplash.com/photo-1765438863789-1396d28db24b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYW4lMjBzdHJhdGVneXxlbnwxfHx8fDE3NzAyMDE1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'fitness training exercise': 'https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjBleGVyY2lzZXxlbnwxfHx8fDE3NzAyMDkzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'social media graphics design': 'https://images.unsplash.com/photo-1611162618758-2a29a995354b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGdyYXBoaWNzJTIwZGVzaWdufGVufDF8fHx8MTc3MDE2NDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'google ads marketing': 'https://images.unsplash.com/photo-1631270315847-f418bde47ca6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBhZHMlMjBtYXJrZXRpbmd8ZW58MXx8fHwxNzcwMjA5MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'translation languages documents': 'https://images.unsplash.com/photo-1673515335152-f2589ba8bb7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2xhdGlvbiUyMGxhbmd1YWdlcyUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NzAyMDkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    '2d animation explainer': 'https://images.unsplash.com/photo-1694796419043-ff8abcaf13c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyZCUyMGFuaW1hdGlvbiUyMGV4cGxhaW5lcnxlbnwxfHx8fDE3NzAyMDkzODN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  };

  const imageUrl = imageMap[gig.image] || imageMap['logo design branding'];

  return (
    <div
      onClick={() => onNavigateTo('gig-detail', { gigId: gig.id })}
      className="bg-white rounded-[12px] border border-[#d5d7da] overflow-hidden cursor-pointer hover:shadow-lg transition-all group"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={gig.title}
          className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            // Handle favorite
          }}
          className="absolute top-[12px] right-[12px] size-[32px] bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart className="size-[16px] text-[#414651]" />
        </button>
      </div>

      {/* Content */}
      <div className="p-[16px]">
        {/* Seller */}
        <div className="flex items-center gap-[8px] mb-[12px]">
          <img
            src={gig.sellerAvatar}
            alt={gig.sellerName}
            className="size-[24px] rounded-full object-cover"
          />
          <span className="font-['Inter'] font-medium text-[14px] text-[#414651]">
            {gig.sellerName}
          </span>
          <span className="ml-auto px-[8px] py-[2px] bg-[#f5f5f5] rounded-[4px] font-['Inter'] text-[12px] text-[#535862]">
            {gig.sellerLevel}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-['Inter'] font-medium text-[16px] text-[#181d27] mb-[12px] line-clamp-2 min-h-[48px]">
          {gig.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-[4px] mb-[12px]">
          <Star className="size-[14px] fill-[#FFC107] text-[#FFC107]" />
          <span className="font-['Inter'] font-medium text-[14px] text-[#181d27]">
            {gig.rating}
          </span>
          <span className="font-['Inter'] text-[14px] text-[#717680]">
            ({gig.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-[12px] border-t border-[#d5d7da]">
          <span className="font-['Inter'] text-[14px] text-[#717680]">
            Starting at
          </span>
          <span className="font-['Inter'] font-semibold text-[18px] text-[#181d27]">
            ${gig.price}
          </span>
        </div>
      </div>
    </div>
  );
}
