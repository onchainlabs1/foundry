interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Circle with A */}
      <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M6.25 15.625L5 12.5L8.75 2.5H11.25L15 12.5L13.75 15.625H6.25ZM7.5 13.75H12.5L10 6.25L7.5 13.75Z"
            fill="currentColor"
          />
          <path
            d="M7.5 11.25H12.5V12.5H7.5V11.25Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="text-navy font-bold text-lg leading-tight">
            AIMS
          </div>
          <div className="text-navy font-medium text-sm leading-tight">
            Studio
          </div>
        </div>
      )}
    </div>
  );
}
