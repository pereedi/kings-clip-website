/**
 * Material Symbols icon.
 * `size` maps to the Tailwind `text-[Npx]` the source used on each icon.
 */
export default function Icon({ name, size, fill = false, className = '', style, ...rest }) {
  return (
    <span
      className={`icon${fill ? ' icon--fill' : ''}${className ? ` ${className}` : ''}`}
      style={size ? { fontSize: `${size}px`, ...style } : style}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  );
}
