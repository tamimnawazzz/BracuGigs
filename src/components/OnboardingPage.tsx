import imgImage3 from "figma:asset/803102b5ec27b82dff768b2d109a888a1726f4d2.png";
import imgChecklist from "figma:asset/e4ac13d536cea6a0942b02266f86399cabddf824.png";

interface OnboardingPageProps {
  role: 'buyer' | 'seller';
  onComplete: () => void;
  onSkip: () => void;
}

export function OnboardingPage({ role, onComplete, onSkip }: OnboardingPageProps) {
  const sellerSteps = [
    'Complete your freelancer profile',
    'Create your first gig.',
    'Publish your gig and start selling!'
  ];

  const buyerSteps = [
    'Complete your profile',
    'Browse available services',
    'Place your first order!'
  ];

  const steps = role === 'seller' ? sellerSteps : buyerSteps;

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
      <div className="flex-1 flex flex-col items-center justify-center py-[96px] px-[32px]">
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-[40px]">
          {/* Icon */}
          <div className="size-[240px]">
            <img alt="" className="size-full object-contain" src={imgChecklist} />
          </div>

          {/* Header */}
          <div className="flex flex-col items-center w-full">
            <p className="font-['Space_Grotesk'] font-medium text-[32px] text-[#040749] leading-normal text-center">
              Great! You're almost there. Here's what's next:
            </p>
          </div>

          {/* Steps and Actions */}
          <div className="flex flex-col items-center gap-[40px] w-full max-w-[600px]">
            {/* Steps */}
            <div className="flex flex-col gap-[20px] items-start w-full text-[20px] leading-normal">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-[16px] items-center w-full">
                  <p className="font-['Space_Grotesk'] font-bold text-[#2d39e3]">
                    {index + 1}.
                  </p>
                  <p className="font-['Space_Grotesk'] font-normal text-[#040749]">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-[24px] items-center">
              <button
                onClick={onComplete}
                className="bg-[#2d39e3] px-[16px] py-[10px] rounded-[8px] font-['Inter'] font-semibold text-[16px] leading-[24px] text-white hover:bg-[#232db5] transition-colors border border-[rgba(255,255,255,0.12)]"
              >
                {role === 'seller' ? 'Complete your seller profile' : 'Complete your profile'}
              </button>
              <button
                onClick={onSkip}
                className="bg-[#f5f5f5] px-[16px] py-[10px] rounded-[8px] font-['Inter'] font-semibold text-[16px] leading-[24px] text-[#a4a7ae] hover:bg-[#e9eaeb] transition-colors border border-[#e9eaeb]"
              >
                Skip to explore the platform
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
