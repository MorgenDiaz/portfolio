export default function LinkPrimary({ href, text, target, className }) {
  return (
    <a
      rel="noreferrer"
      href={href}
      target={target}
      className={`
          inline-block py-0.5 px-4 pl-0 relative z-10
          text-lg font-bold text-purple-800 
          after:block after:absolute after:w-0 after:h-full after:left-0 after:bottom-0 after:-z-10 
          transition-all after:transition-all ${className}`}
    >
      {text}
    </a>
  );
}
