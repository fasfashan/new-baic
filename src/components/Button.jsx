export default function Button({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  variant = "dark",
  // eslint-disable-next-line react/prop-types
  href,
  // eslint-disable-next-line react/prop-types
  onClick,
  // eslint-disable-next-line react/prop-types
  className = "",
  // eslint-disable-next-line react/prop-types
  icon: Icon,
  // eslint-disable-next-line react/prop-types
  target,
  // eslint-disable-next-line react/prop-types
  rel,
  ...props
}) {
  const baseClasses =
    "py-3 px-6 text-sm font-medium rounded-xl transition-all whitespace-nowrap inline-flex items-center justify-center gap-2 text-capitalize";

  const variantClasses = {
    dark: "border border-black text-black hover:bg-black hover:text-white",
    light: "border border-white text-white hover:bg-white hover:text-black",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        {...props}
      >
        {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
      {children}
    </button>
  );
}
