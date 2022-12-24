export default function OutlinedButtonSecondary({ href, text, className }) {
  return (
    <a
      rel="noreferrer"
      href={href}
      className={`
        inline-block py-0.5 px-4 relative z-10
        text-lg font-bold text-white  
        border-2 border-white border-solid
        after:block after:absolute after:w-0 after:h-full after:left-0 after:bottom-0 after:-z-10
        transition-all after:transition-all ${className}`}
    >
      {text}
    </a>
  );
}
