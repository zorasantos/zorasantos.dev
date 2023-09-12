import Link from "next/link";

type ReadMoreProps = {
  text: string;
  className?: string;
}

export default function ReadMore({ text, className }: ReadMoreProps) {
  return (
    <div data-testid="container-read-more" className={`flex items-center gap-2 ${className}`}>
      <svg
        role="img"
        aria-label="read more icon"
        className="fill-primary dark:fill-primary-dark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        height="24"
        width="24"
        viewBox="0 -960 960 960"
      >
        <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"/>
      </svg>
     {text}
    </div>
  )
}