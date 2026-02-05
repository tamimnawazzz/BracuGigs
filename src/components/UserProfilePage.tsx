import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { GigCard } from './GigCard';
import { Star, MapPin, Calendar, Award, ArrowLeft } from 'lucide-react';

interface UserProfilePageProps {
  userId: string;
  currentUser: any;
  onNavigateTo: (page: string, params?: any) => void;
  onLogout: () => void;
}

export function UserProfilePage({ userId, currentUser, onNavigateTo, onLogout }: UserProfilePageProps) {
  const [user, setUser] = useState<any>(null);
  const [userGigs, setUserGigs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'gigs' | 'about'>('gigs');

  useEffect(() => {
    const usersData = localStorage.getItem('users');
    const gigsData = localStorage.getItem('gigs');
    
    if (usersData) {
      const users = JSON.parse(usersData);
      const foundUser = users.find((u: any) => u.id === userId);
      setUser(foundUser);
    }

    if (gigsData) {
      const gigs = JSON.parse(gigsData);
      const filteredGigs = gigs.filter((g: any) => g.sellerId === userId);
      setUserGigs(filteredGigs);
    }
  }, [userId]);

  if (!user) {
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

        {/* Profile Header */}
        <div className="bg-white rounded-[12px] border border-[#d5d7da] p-[32px] mb-[32px]">
          <div className="flex flex-col md:flex-row gap-[32px]">
            {/* Avatar */}
            <div className="shrink-0">
              <img
                src={user.avatar}
                alt={user.name}
                className="size-[120px] rounded-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[16px] mb-[16px]">
                <div>
                  <h1 className="font-['Inter'] font-semibold text-[32px] text-[#181d27] mb-[8px]">
                    {user.name}
                  </h1>
                  {user.role === 'seller' && user.rating && (
                    <div className="flex items-center gap-[12px] mb-[12px]">
                      <div className="flex items-center gap-[4px]">
                        <Star className="size-[16px] fill-[#FFC107] text-[#FFC107]" />
                        <span className="font-['Inter'] font-medium text-[16px] text-[#181d27]">
                          {user.rating}
                        </span>
                        <span className="font-['Inter'] text-[14px] text-[#717680]">
                          ({user.reviewCount} reviews)
                        </span>
                      </div>
                      <span className="px-[12px] py-[4px] bg-[#2d39e3]/10 text-[#2d39e3] rounded-[4px] font-['Inter'] font-medium text-[14px]">
                        Top Rated Seller
                      </span>
                    </div>
                  )}
                </div>
                
                {currentUser.id !== userId && (
                  <button className="px-[20px] py-[10px] border-2 border-[#2d39e3] text-[#2d39e3] rounded-[8px] font-['Inter'] font-medium text-[16px] hover:bg-[#2d39e3] hover:text-white transition-colors">
                    Contact
                  </button>
                )}
              </div>

              {user.bio && (
                <p className="font-['Inter'] text-[16px] text-[#535862] mb-[20px] leading-[1.6]">
                  {user.bio}
                </p>
              )}

              {user.skills && user.skills.length > 0 && (
                <div className="flex flex-wrap gap-[8px]">
                  {user.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-[12px] py-[6px] bg-[#f5f5f5] rounded-[6px] font-['Inter'] text-[14px] text-[#414651]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          {user.role === 'seller' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] mt-[32px] pt-[32px] border-t border-[#d5d7da]">
              <div>
                <div className="flex items-center gap-[8px] mb-[4px]">
                  <Award className="size-[16px] text-[#717680]" />
                  <span className="font-['Inter'] text-[14px] text-[#717680]">Total orders</span>
                </div>
                <p className="font-['Inter'] font-semibold text-[24px] text-[#181d27]">
                  {userGigs.reduce((sum, gig) => sum + gig.orders, 0)}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-[8px] mb-[4px]">
                  <Star className="size-[16px] text-[#717680]" />
                  <span className="font-['Inter'] text-[14px] text-[#717680]">Rating</span>
                </div>
                <p className="font-['Inter'] font-semibold text-[24px] text-[#181d27]">
                  {user.rating}/5
                </p>
              </div>
              <div>
                <div className="flex items-center gap-[8px] mb-[4px]">
                  <Calendar className="size-[16px] text-[#717680]" />
                  <span className="font-['Inter'] text-[14px] text-[#717680]">Member since</span>
                </div>
                <p className="font-['Inter'] font-semibold text-[24px] text-[#181d27]">
                  2024
                </p>
              </div>
              <div>
                <div className="flex items-center gap-[8px] mb-[4px]">
                  <Award className="size-[16px] text-[#717680]" />
                  <span className="font-['Inter'] text-[14px] text-[#717680]">Active gigs</span>
                </div>
                <p className="font-['Inter'] font-semibold text-[24px] text-[#181d27]">
                  {userGigs.length}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        {user.role === 'seller' && (
          <>
            <div className="flex gap-[24px] border-b border-[#d5d7da] mb-[32px]">
              <button
                onClick={() => setActiveTab('gigs')}
                className={`pb-[16px] font-['Inter'] font-medium text-[16px] border-b-2 transition-colors ${
                  activeTab === 'gigs'
                    ? 'border-[#2d39e3] text-[#2d39e3]'
                    : 'border-transparent text-[#717680] hover:text-[#414651]'
                }`}
              >
                Gigs ({userGigs.length})
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`pb-[16px] font-['Inter'] font-medium text-[16px] border-b-2 transition-colors ${
                  activeTab === 'about'
                    ? 'border-[#2d39e3] text-[#2d39e3]'
                    : 'border-transparent text-[#717680] hover:text-[#414651]'
                }`}
              >
                About
              </button>
            </div>

            {/* Content */}
            {activeTab === 'gigs' ? (
              <div>
                {userGigs.length === 0 ? (
                  <div className="text-center py-[60px]">
                    <p className="font-['Inter'] text-[18px] text-[#717680]">
                      No gigs available yet.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                    {userGigs.map((gig) => (
                      <GigCard key={gig.id} gig={gig} onNavigateTo={onNavigateTo} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-[12px] border border-[#d5d7da] p-[32px]">
                <h2 className="font-['Inter'] font-semibold text-[24px] text-[#181d27] mb-[16px]">
                  About {user.name}
                </h2>
                <p className="font-['Inter'] text-[16px] text-[#535862] leading-[1.6] mb-[24px]">
                  {user.bio || 'No additional information available.'}
                </p>
                
                {user.skills && user.skills.length > 0 && (
                  <>
                    <h3 className="font-['Inter'] font-semibold text-[18px] text-[#181d27] mb-[12px]">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-[8px]">
                      {user.skills.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-[12px] py-[6px] bg-[#f5f5f5] rounded-[6px] font-['Inter'] text-[14px] text-[#414651]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
