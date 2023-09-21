import Link from "next/link";

export default function Footer() {
  const items = [
    { icon: { viewBox: "0 0 512 512", path: <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" /> }, altText: "Linkedin Icon", link: "https://www.linkedin.com/in/zoranildosantos/" },
    { icon: { viewBox: "0 0 48 48", path: <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z" /> }, altText: "Github Icon", link: "https://github.com/ZoraSantos" },
    { icon: { viewBox: "0 0 576 512", path: <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /> }, altText: "Youtube Icon", link: "https://www.youtube.com/@MrZoranildo" }
  ]

  return (
  <footer className="sticky top-[100vh] flex flex-col justify-center gap-2 sm:flex-row sm:justify-between sm:gap-0 border-t bottom-0 left-0 items-center w-full h-32 mt-10 px-10 md:px-24">
    <span>© {new Date().getFullYear()}, <span className="text-primary dark:text-primary-dark font-bold">Zoranildo Santos</span>. Todos os direitos reservados.</span>
    <div className="flex items-center space-x-6">
      {items?.map(item => (
        <Link key={item.altText} className="flex-shrink-0" target="_blank" href={item.link}>
          <svg
            role="img"
            aria-label={item.altText}
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary dark:fill-primary-dark h-8 w-8 hover:scale-125 transition-all ease duration-200"
            viewBox={item.icon.viewBox}
            fill="none"
          >
            {item.icon.path}
          </svg>
        </Link>
      ))}
      </div>
  </footer>
  )
}