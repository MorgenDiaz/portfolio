export default function OutlinedButtonPrimary({
  href,
  text,
  target,
  onClick = () => {},
  className,
}) {
  return (
    <a
      rel="noreferrer"
      href={href}
      target={target}
      onClick={onClick}
      className={`
        inline-block py-0.5 px-4 relative z-10
        text-lg font-bold text-purple-800
        border-2 border-purple-800 border-solid  
        after:block after:absolute after:w-0 after:h-full after:left-0 after:bottom-0 after:-z-10 
        transition-all after:transition-all ${className}`}
    >
      {text}
    </a>
  );
}
