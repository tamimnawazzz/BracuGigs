import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { Star, Check, Clock, RefreshCw, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GigDetailPageProps {
  gigId: string;
  currentUser: any;
  onNavigateTo: (page: string, params?: any) => void;
  onLogout: () => void;
}

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

export function GigDetailPage({ gigId, currentUser, onNavigateTo, onLogout }: GigDetailPageProps) {
  const [gig, setGig] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [requirements, setRequirements] = useState('');
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    const gigsData = localStorage.getItem('gigs');
    const reviewsData = localStorage.getItem('reviews');
    
    if (gigsData) {
      const gigs = JSON.parse(gigsData);
      const foundGig = gigs.find((g: any) => g.id === gigId);
      setGig(foundGig);
    }

    if (reviewsData) {
      const allReviews = JSON.parse(reviewsData);
      const gigReviews = allReviews.filter((r: any) => r.gigId === gigId);
      setReviews(gigReviews);
    }
  }, [gigId]);

  const handleOrder = () => {
    if (!requirements.trim()) {
      alert('Please provide project requirements');
      return;
    }

    const ordersData = localStorage.getItem('orders');
    const orders = ordersData ? JSON.parse(ordersData) : [];

    const newOrder = {
      id: 'order-' + Date.now(),
      gigId: gig.id,
      gigTitle: gig.title,
      sellerId: gig.sellerId,
      sellerName: gig.sellerName,
      buyerId: currentUser.id,
      buyerName: currentUser.name,
      price: gig.price,
      requirements,
      status: 'pending',
      createdAt: new Date().toISOString(),
      deliveryDate: new Date(Date.now() + gig.deliveryDays * 24 * 60 * 60 * 1000).toISOString()
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    setShowOrderModal(false);
    alert('Order placed successfully!');
    onNavigateTo('home');
  };

  if (!gig) {
    return (
      <div className="min-h-screen bg-[#f9fafb]">
        <Navigation
          currentUser={currentUser}
          onLogout={onLogout}
          onNavigateTo={onNavigateTo}
        />
        <div className="flex items-center justify-center h-[400px]">
          <p className="font-['Inter'] text-[18px] text-[#717680]">Loading...</p>
        </div>
      </div>
    );
  }

  const imageUrl = imageMap[gig.image] || imageMap['logo design branding'];

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-[32px]">
            {/* Title */}
            <div>
              <h1 className="font-['Inter'] font-semibold text-[32px] text-[#181d27] mb-[16px]">
                {gig.title}
              </h1>
              <div className="flex items-center gap-[16px]">
                <button
                  onClick={() => onNavigateTo('profile', { userId: gig.sellerId })}
                  className="flex items-center gap-[12px] hover:opacity-80 transition-opacity"
                >
                  <img
                    src={gig.sellerAvatar}
                    alt={gig.sellerName}
                    className="size-[48px] rounded-full object-cover"
                  />
                  <div>
                    <p className="font-['Inter'] font-medium text-[16px] text-[#181d27]">
                      {gig.sellerName}
                    </p>
                    <p className="font-['Inter'] text-[14px] text-[#717680]">
                      {gig.sellerLevel}
                    </p>
                  </div>
                </button>
                <div className="flex items-center gap-[8px]">
                  <Star className="size-[16px] fill-[#FFC107] text-[#FFC107]" />
                  <span className="font-['Inter'] font-medium text-[16px] text-[#181d27]">
                    {gig.rating}
                  </span>
                  <span className="font-['Inter'] text-[14px] text-[#717680]">
                    ({gig.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-[12px] overflow-hidden">
              <ImageWithFallback
                src={imageUrl}
                alt={gig.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            {/* About */}
            <div className="bg-white rounded-[12px] border border-[#d5d7da] p-[24px]">
              <h2 className="font-['Inter'] font-semibold text-[24px] text-[#181d27] mb-[16px]">
                About this gig
              </h2>
              <p className="font-['Inter'] text-[16px] text-[#535862] leading-[1.6]">
                {gig.description}
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-[12px] border border-[#d5d7da] p-[24px]">
              <h2 className="font-['Inter'] font-semibold text-[24px] text-[#181d27] mb-[16px]">
                What's included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                {gig.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-[12px]">
                    <Check className="size-[20px] text-[#2d39e3]" />
                    <span className="font-['Inter'] text-[16px] text-[#535862]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-[12px] border border-[#d5d7da] p-[24px]">
              <h2 className="font-['Inter'] font-semibold text-[24px] text-[#181d27] mb-[24px]">
                Reviews ({reviews.length})
              </h2>
              <div className="space-y-[24px]">
                {reviews.length === 0 ? (
                  <p className="font-['Inter'] text-[16px] text-[#717680]">
                    No reviews yet
                  </p>
                ) : (
                  reviews.map((review) => (
                    <div key={review.id} className="pb-[24px] border-b border-[#d5d7da] last:border-0">
                      <div className="flex items-start gap-[12px] mb-[12px]">
                        <img
                          src={review.userAvatar}
                          alt={review.userName}
                          className="size-[40px] rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-['Inter'] font-medium text-[16px] text-[#181d27]">
                            {review.userName}
                          </p>
                          <div className="flex items-center gap-[8px]">
                            <div className="flex gap-[2px]">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`size-[14px] ${
                                    i < review.rating
                                      ? 'fill-[#FFC107] text-[#FFC107]'
                                      : 'text-[#d5d7da]'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="font-['Inter'] text-[12px] text-[#717680]">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter'] text-[14px] text-[#535862] leading-[1.6]">
                        {review.comment}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[12px] border border-[#d5d7da] p-[24px] sticky top-[100px]">
              <div className="mb-[24px]">
                <div className="flex items-baseline gap-[8px] mb-[16px]">
                  <span className="font-['Inter'] font-semibold text-[32px] text-[#181d27]">
                    ${gig.price}
                  </span>
                </div>
                
                <div className="space-y-[12px] mb-[24px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                      <Clock className="size-[16px] text-[#717680]" />
                      <span className="font-['Inter'] text-[14px] text-[#535862]">
                        Delivery time
                      </span>
                    </div>
                    <span className="font-['Inter'] font-medium text-[14px] text-[#181d27]">
                      {gig.deliveryDays} days
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                      <RefreshCw className="size-[16px] text-[#717680]" />
                      <span className="font-['Inter'] text-[14px] text-[#535862]">
                        Revisions
                      </span>
                    </div>
                    <span className="font-['Inter'] font-medium text-[14px] text-[#181d27]">
                      Unlimited
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setShowOrderModal(true)}
                  className="w-full bg-[#2d39e3] text-white px-[16px] py-[12px] rounded-[8px] font-['Inter'] font-semibold text-[16px] hover:bg-[#232db5] transition-colors shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border-2 border-[rgba(255,255,255,0.12)]"
                >
                  Continue (${gig.price})
                </button>
              </div>

              <div className="pt-[24px] border-t border-[#d5d7da]">
                <p className="font-['Inter'] text-[14px] text-[#717680] text-center">
                  {gig.orders}+ orders in queue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[32px]">
          <div className="bg-white rounded-[12px] max-w-[600px] w-full p-[32px]">
            <h2 className="font-['Inter'] font-semibold text-[24px] text-[#181d27] mb-[24px]">
              Order details
            </h2>
            
            <div className="mb-[24px]">
              <label className="block font-['Inter'] font-medium text-[14px] text-[#414651] mb-[8px]">
                Project requirements
              </label>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Describe your project requirements in detail..."
                className="w-full min-h-[120px] px-[14px] py-[10px] border border-[#d5d7da] rounded-[8px] font-['Inter'] text-[16px] text-[#181d27] placeholder:text-[#717680] outline-none focus:border-[#2d39e3] resize-none"
              />
            </div>

            <div className="flex gap-[12px]">
              <button
                onClick={() => setShowOrderModal(false)}
                className="flex-1 px-[16px] py-[12px] border border-[#d5d7da] rounded-[8px] font-['Inter'] font-medium text-[16px] text-[#414651] hover:bg-[#f5f5f5] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleOrder}
                className="flex-1 bg-[#2d39e3] text-white px-[16px] py-[12px] rounded-[8px] font-['Inter'] font-semibold text-[16px] hover:bg-[#232db5] transition-colors"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
