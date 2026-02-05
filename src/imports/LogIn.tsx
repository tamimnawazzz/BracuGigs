import svgPaths from "./svg-cf4ipz3c1h";
import imgSection from "figma:asset/47d3009d90227ec2a5d35a472a48d102aca67266.png";
import imgImage3 from "figma:asset/803102b5ec27b82dff768b2d109a888a1726f4d2.png";

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <path d="M20 6L9 17L4 12" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Check />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-white">Begin anywhere. Achieve everything.</p>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <path d="M20 6L9 17L4 12" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Check1 />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-white">Grow faster with guidance from experts.</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <path d="M20 6L9 17L4 12" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Check2 />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-white">Find your niche. Explore your potential.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Frame />
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[48px] top-[48px] w-[514px]">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[30px] text-white w-[min-content] whitespace-pre-wrap">A leap towards professional growth</p>
      <Frame2 />
    </div>
  );
}

function Section() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f5f5f5] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSection} />
      </div>
      <div className="absolute bg-gradient-to-b from-[#00011e] from-[15.385%] h-[472px] left-0 to-[rgba(0,0,0,0)] top-0 w-[800px]" />
      <Frame3 />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text and supporting text">
      <p className="font-['Inter:Semibold',sans-serif] leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">Log in</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">Welcome back! Please enter your details.</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Header">
      <TextAndSupportingText />
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px]">Email</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#717680] text-[16px] text-ellipsis whitespace-nowrap">Enter your email</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper />
      <Input />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[360px]" data-name="Input field">
      <InputWithLabel />
    </div>
  );
}

function LabelWrapper1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px]">Password</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#717680] text-[16px] text-ellipsis whitespace-nowrap">••••••••</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper1 />
      <Input1 />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[360px]" data-name="Input field">
      <InputWithLabel1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form">
      <InputField />
      <InputField1 />
    </div>
  );
}

function CheckboxBase() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="_Checkbox base">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <CheckboxBase />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] w-full whitespace-pre-wrap">Remember for 30 days</p>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="Checkbox">
      <Input2 />
      <TextAndSupportingText1 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons">
      <p className="font-['Inter:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2d39e3] text-[14px]">Forgot password</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <Checkbox />
      <Buttons />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Sign in</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#2d39e3] relative rounded-[8px] shrink-0 w-[360px]" data-name="Buttons">
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-full">
        <TextPadding />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1400)" id="Social icon">
          <path d={svgPaths.p7776880} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p2d84f580} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p380d1d80} fill="var(--fill-0, #FBBC04)" id="Vector_3" />
          <path d={svgPaths.p1ebd4080} fill="var(--fill-0, #EA4335)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_1400">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialButton() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Social button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <SocialIcon />
          <p className="font-['Inter:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px]">Sign in with Google</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function SocialButtonGroups() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Social button groups">
      <SocialButton />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Actions">
      <Buttons1 />
      <SocialButtonGroups />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <Form />
      <Row />
      <Actions />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons">
      <p className="font-['Inter:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2d39e3] text-[14px]">Sign up</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline justify-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px]">Don’t have an account?</p>
      <Buttons2 />
    </div>
  );
}

function HeaderAndForm() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Header and form">
      <Header />
      <Content1 />
      <Row1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[360px] relative shrink-0 w-full" data-name="Content">
      <div className="h-[35px] relative shrink-0 w-[125px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[408.28%] left-[-6.94%] max-w-none top-[-166.24%] w-[113.88%]" src={imgImage3} />
        </div>
      </div>
      <HeaderAndForm />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mail-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mail-01">
          <path d={svgPaths.p3b70d380} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconAndText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon and text">
      <Mail />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px]">help@bracugigs.com</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between p-[32px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px]">© bracugigs 2025</p>
          <IconAndText />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center max-w-[640px] min-h-px min-w-[480px] relative" data-name="Section">
      <Container />
      <Footer />
    </div>
  );
}

export default function LogIn() {
  return (
    <div className="bg-white content-stretch flex items-center relative size-full" data-name="Log in">
      <Section />
      <Section1 />
    </div>
  );
}