export default function Icon({ link, label, icon }) {
  return (
    <a
      href={ link }
      aria-label={ label }
      target="_blank"
      rel="noopener noreferrer"
    >
      { icon }
    </a>
  );
}