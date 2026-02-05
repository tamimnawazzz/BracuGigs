import { useState } from 'react';
import svgPaths from "../imports/svg-efrun0cyl6";
import imgSection from "figma:asset/47d3009d90227ec2a5d35a472a48d102aca67266.png";
import imgImage3 from "figma:asset/803102b5ec27b82dff768b2d109a888a1726f4d2.png";

interface LoginPageProps {
  onLogin: (user: any) => void;
  onNavigateToSignup: () => void;
}

export function LoginPage({ onLogin, onNavigateToSignup }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Get users from localStorage
    const usersData = localStorage.getItem('users');
    const users = usersData ? JSON.parse(usersData) : [];

    // Find user
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      onLogin(user);
    } else {
      setError('Invalid email or password');
    }
  };

  const handleGoogleSignIn = () => {
    // Mock Google sign in
    const mockUser = {
      id: 'google-' + Date.now(),
      email: 'user@gmail.com',
      name: 'Google User',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      role: 'buyer'
    };
    onLogin(mockUser);
  };

  return (
    <div className="bg-white content-stretch flex h-screen items-center relative w-full">
      {/* Left Section */}
      <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#f5f5f5] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgSection} />
        </div>
        <div className="absolute bg-gradient-to-b from-[#00011e] from-[15.385%] h-[472px] left-0 to-[rgba(0,0,0,0)] top-0 w-[800px]" />
        <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[48px] top-[48px] w-[514px]">
          <p className="font-['Space_Grotesk'] font-bold leading-[normal] min-w-full relative shrink-0 text-[30px] text-white w-[min-content] whitespace-pre-wrap">A leap towards professional growth</p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M20 6L9 17L4 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="font-['Space_Grotesk'] font-normal leading-[normal] relative shrink-0 text-[20px] text-white">Begin anywhere. Achieve everything.</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M20 6L9 17L4 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="font-['Space_Grotesk'] font-normal leading-[normal] relative shrink-0 text-[20px] text-white">Grow faster with guidance from experts.</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d="M20 6L9 17L4 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="font-['Space_Grotesk'] font-normal leading-[normal] relative shrink-0 text-[20px] text-white">Find your niche. Explore your potential.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center max-w-[640px] min-h-px min-w-[480px] relative">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full">
              <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[360px] relative shrink-0 w-full">
                <div className="h-[35px] relative shrink-0 w-[125px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[408.28%] left-[-6.94%] max-w-none top-[-166.24%] w-[113.88%]" src={imgImage3} />
                  </div>
                </div>

                <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                  {/* Header */}
                  <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
                    <p className="font-['Inter'] leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full font-semibold">Log in</p>
                    <p className="font-['Inter'] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">Welcome back! Please enter your details.</p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleLogin} className="content-stretch flex flex-col gap-[24px] items-center relative rounded-[12px] shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                      {/* Email */}
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px]">Email</p>
                        <div className="bg-white relative rounded-[8px] shrink-0 w-full border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-[14px] py-[10px] font-['Inter'] font-normal leading-[24px] text-[16px] text-[#181d27] placeholder:text-[#717680] outline-none rounded-[8px]"
                            required
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                        <p className="font-['Inter'] font-medium leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px]">Password</p>
                        <div className="bg-white relative rounded-[8px] shrink-0 w-full border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-[14px] py-[10px] font-['Inter'] font-normal leading-[24px] text-[16px] text-[#181d27] placeholder:text-[#717680] outline-none rounded-[8px]"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-500 text-[14px] font-['Inter']">{error}</p>
                    )}

                    {/* Remember & Forgot */}
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-center">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="rounded-[4px] border border-[#d5d7da] size-[16px]"
                        />
                        <p className="font-['Inter'] font-medium leading-[20px] not-italic text-[#414651] text-[14px]">Remember for 30 days</p>
                      </div>
                      <button type="button" className="font-['Inter'] leading-[20px] text-[#2d39e3] text-[14px] font-semibold">
                        Forgot password
                      </button>
                    </div>

                    {/* Actions */}
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <button
                        type="submit"
                        className="bg-[#2d39e3] relative rounded-[8px] shrink-0 w-full px-[16px] py-[10px] font-['Inter'] leading-[24px] text-[16px] text-white font-semibold shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border-2 border-[rgba(255,255,255,0.12)]"
                      >
                        Sign in
                      </button>

                      <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="bg-white relative rounded-[8px] shrink-0 w-full px-[16px] py-[10px] flex items-center justify-center gap-[12px] border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
                      >
                        <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p7776880} fill="#4285F4" />
                          <path d={svgPaths.p2d84f580} fill="#34A853" />
                          <path d={svgPaths.p380d1d80} fill="#FBBC04" />
                          <path d={svgPaths.p1ebd4080} fill="#EA4335" />
                        </svg>
                        <span className="font-['Inter'] leading-[24px] text-[#414651] text-[16px] font-semibold">Sign in with Google</span>
                      </button>
                    </div>
                  </form>

                  {/* Sign up link */}
                  <div className="content-stretch flex gap-[4px] items-baseline justify-center relative shrink-0 w-full">
                    <p className="font-['Inter'] font-normal leading-[20px] not-italic text-[#535862] text-[14px]">Don't have an account?</p>
                    <button
                      onClick={onNavigateToSignup}
                      className="font-['Inter'] leading-[20px] text-[#2d39e3] text-[14px] font-semibold"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="h-[96px] relative shrink-0 w-full">
          <div className="flex flex-row items-end size-full">
            <div className="content-stretch flex items-end justify-between p-[32px] relative size-full">
              <p className="font-['Inter'] font-normal leading-[20px] not-italic text-[#535862] text-[14px]">© bracugigs 2025</p>
              <div className="content-stretch flex gap-[8px] items-center">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p3b70d380} stroke="#A4A7AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <p className="font-['Inter'] font-normal leading-[20px] not-italic text-[#535862] text-[14px]">help@bracugigs.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
