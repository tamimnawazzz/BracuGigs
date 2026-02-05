import { useState } from 'react';
import imgImage3 from "figma:asset/803102b5ec27b82dff768b2d109a888a1726f4d2.png";

interface RoleSelectionPageProps {
  userName: string;
  onComplete: (role: 'buyer' | 'seller') => void;
}

export function RoleSelectionPage({ userName, onComplete }: RoleSelectionPageProps) {
  const [selectedRole, setSelectedRole] = useState<'buyer' | 'seller' | null>(null);

  const roles = [
    {
      id: 'buyer' as const,
      title: 'Buying Freelance Services',
      description: 'I am seeking professional support for a project.'
    },
    {
      id: 'seller' as const,
      title: 'Selling Freelance Services',
      description: 'I want to offer my skills and services to clients.'
    }
  ];

  const handleNext = () => {
    if (selectedRole) {
      onComplete(selectedRole);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header Navigation */}
      <div className="bg-white border-b border-[#e9eaeb] shrink-0 w-full">
        <div className="max-w-[1280px] mx-auto h-[72px] flex items-center justify-between px-[32px]">
          <div className="flex items-center gap-[16px]">
            <div className="h-[35px] w-[125px]">
              <div className="relative size-full overflow-hidden">
                <img alt="bracugigs" className="absolute h-[408.28%] left-[-6.94%] max-w-none top-[-166.24%] w-[113.88%]" src={imgImage3} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center py-[128px] px-[32px]">
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-[40px]">
          {/* Header */}
          <div className="flex flex-col items-center gap-[8px] text-center w-full">
            <p className="font-['Space_Grotesk'] font-medium text-[32px] text-[#040749] leading-normal">
              {userName}, your account has been created! Please select what brings you to Bracugigs
            </p>
          </div>

          {/* Role Selection */}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-end gap-[32px] w-full max-w-[700px]">
              <div className="flex gap-[32px] items-center w-full">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className="flex-1 bg-white rounded-[12px] border border-[#e9eaeb] p-[16px] text-left hover:border-[#2d39e3] transition-colors"
                  >
                    <div className="flex gap-[8px] items-start w-full">
                      <div className="flex items-center justify-center pt-[2px] shrink-0">
                        <div className={`relative rounded-[4px] size-[16px] border ${
                          selectedRole === role.id ? 'border-[#2d39e3] bg-[#2d39e3]' : 'border-[#d5d7da]'
                        }`}>
                          {selectedRole === role.id && (
                            <svg className="absolute inset-0" fill="none" viewBox="0 0 16 16">
                              <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-[8px]">
                        <p className="font-['Inter'] font-medium text-[14px] text-[#414651] leading-[20px]">
                          {role.title}
                        </p>
                        <p className="font-['Inter'] font-normal text-[14px] text-[#535862] leading-[20px]">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={!selectedRole}
                className={`px-[16px] py-[10px] rounded-[8px] font-['Inter'] font-semibold text-[16px] leading-[24px] transition-colors ${
                  selectedRole
                    ? 'bg-[#2d39e3] text-white hover:bg-[#232db5] cursor-pointer'
                    : 'bg-[#f5f5f5] text-[#717680] cursor-not-allowed'
                } border border-[#e9eaeb]`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
