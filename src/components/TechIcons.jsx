/** Brand-style SVG icons for the tech stack */

export function TechIcon({ name, size = 22 }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "react":
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "nextjs":
      return (
        <svg {...props} fill="currentColor">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.5 14.8h-1.6L9.2 10.2v6.6H7.7V7.2h1.7l4.6 6.4V7.2h1.5v9.6z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg {...props} fill="currentColor">
          <path d="M12 1.5 3.5 6.4v11.2L12 22.5l8.5-4.9V6.4L12 1.5zm0 2.2 6.5 3.7v7.2L12 18.3l-6.5-3.7V7.4L12 3.7zm-.8 3.3v7.2l.8.5.8-.5V7h-1.6zm0 0" />
        </svg>
      );
    case "typescript":
      return (
        <svg {...props} fill="currentColor">
          <path d="M1.5 1.5h21v21h-21v-21zm11.2 9.4v1.6H9.3v7.5H7.4v-7.5H4.1V10.9h8.6zm7.2 2.2c-.2-.9-.9-1.5-2.2-1.5-1.5 0-2.5.8-2.5 2.1 0 1.4 1.1 1.9 2.2 2.3l.9.3c.7.2 1.1.5 1.1 1 0 .6-.6 1-1.5 1-.9 0-1.6-.4-1.8-1.2l-1.6.4c.3 1.5 1.6 2.3 3.4 2.3 2 0 3.3-1 3.3-2.5 0-1.3-.8-2-2.3-2.5l-.9-.3c-.6-.2-1-.4-1-1s.5-.9 1.3-.9c.8 0 1.3.3 1.5 1l1.5-.5z" />
        </svg>
      );
    case "capacitor":
      return (
        <svg {...props} fill="currentColor">
          <path d="M4.3 15.7 8.6 20l1.4-1.4-4.3-4.3L4.3 15.7zm15.4-7.4L15.4 4l-1.4 1.4 4.3 4.3 1.4-1.4zM8.6 4 4.3 8.3l1.4 1.4 4.3-4.3L8.6 4zm11.1 11.7-4.3 4.3 1.4 1.4 4.3-4.3-1.4-1.4zM9.5 14.5l5-5-1.4-1.4-5 5 1.4 1.4z" />
        </svg>
      );
    case "nestjs":
      return (
        <svg {...props} fill="currentColor">
          <path d="M12.1 2.2c-.4 0-.8.1-1.1.3L5.2 5.8c-.7.4-1.1 1.1-1.1 1.9v8.6c0 .8.4 1.5 1.1 1.9l5.8 3.3c.7.4 1.5.4 2.1 0l5.8-3.3c.7-.4 1.1-1.1 1.1-1.9V7.7c0-.8-.4-1.5-1.1-1.9l-5.8-3.3c-.3-.2-.7-.3-1.1-.3zm0 2.1 5.2 3v3.2l-2.4 1.4v2.7l2.4-1.4v2.9l-5.2 3-5.2-3v-2.9l2.4 1.4v-2.7L6.9 9.3V6.3l5.2-3z" />
        </svg>
      );
    case "postgresql":
      return (
        <svg {...props} fill="currentColor">
          <path d="M12.3 2C8 2 6.2 4.1 6 6.8c0 0-.1 1.5.4 2.7.1.3.4.4.7.3 1.2-.4 2.1-1.1 2.1-1.1s.2 1.5 1.4 2.4c.3.2.5.6.4 1-.2 1.2-.7 3.2-1.1 4.3-.1.4.1.8.5.9 1.3.3 3.1.5 4.5-.2.3-.1.5-.5.4-.8-.3-1.2-.8-3.4-.8-4.5 0-.4.2-.8.6-1 1.3-.7 1.8-2.1 1.8-2.1s.9.8 2.1 1.2c.3.1.6 0 .7-.3.5-1.2.4-2.7.4-2.7C19.5 4.1 17.5 2 12.3 2z" />
        </svg>
      );
    case "prisma":
      return (
        <svg {...props} fill="currentColor">
          <path d="M19.8 15.4 13.4 2.7c-.3-.6-.9-.9-1.5-.8-.6.1-1.1.6-1.2 1.2L7.1 18.8c-.2.8.4 1.5 1.2 1.5h9.2c.9 0 1.5-.9 1.2-1.7l-1.1-2.8-1.8.7 2.8 7.1 5.2-10.4c.4-.7.1-1.5-.6-1.8-.7-.3-1.5 0-1.8.7l-1.6 3.3z" />
        </svg>
      );
    case "docker":
      return (
        <svg {...props} fill="currentColor">
          <path d="M4.5 11.2h2.1v2.1H4.5v-2.1zm2.6 0h2.1v2.1H7.1v-2.1zm2.6 0h2.1v2.1H9.7v-2.1zm2.6 0h2.1v2.1h-2.1v-2.1zM7.1 8.6h2.1v2.1H7.1V8.6zm2.6 0h2.1v2.1H9.7V8.6zm2.6 0h2.1v2.1h-2.1V8.6zm0-2.6h2.1v2.1h-2.1V6zm5.3 7.5c-.2-.1-.5-.1-.5-.1s.1-1.3-.6-2.1c-.7-.8-1.8-.7-1.8-.7s-.4-1.4-1.9-1.4c-1.6 0-2 .9-2.2 1.3-.6.1-2.1.4-2.7 1.9-.1.2-.1.4-.1.6H22c0-.2-.1-1.5-1.1-2.3-.8-.7-1.8-.6-1.9-.5zM2.4 13.8h2.1v2.1H2.4v-2.1z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg {...props} fill="currentColor">
          <path d="M12 6c-2.7 0-4.4 1.3-5 4 1-.7 2.1-.9 3.3-.7.7.1 1.2.5 1.7 1 1.1 1.1 2.3 2.2 4.9 2.2 2.7 0 4.4-1.3 5-4-1 .7-2.1.9-3.3.7-.7-.1-1.2-.5-1.7-1C15.8 7.1 14.6 6 12 6zm-5 6c-2.7 0-4.4 1.3-5 4 1-.7 2.1-.9 3.3-.7.7.1 1.2.5 1.7 1 1.1 1.1 2.3 2.2 4.9 2.2 2.7 0 4.4-1.3 5-4-1 .7-2.1.9-3.3.7-.7-.1-1.2-.5-1.7-1-1.1-1.1-2.3-2.2-4.9-2.2z" />
        </svg>
      );
    case "firebase":
      return (
        <svg {...props} fill="currentColor">
          <path d="M5.2 17.6 9.4 2.8c.2-.6 1-.6 1.2 0l1.9 5.6-2.5 4.8c-.2.4.1.8.5.8h6.2l-2.3 6.6H5.8c-.6 0-1-.6-.6-1zm13.1-1.4-2.7-9.2c-.2-.6-1-.5-1.1.1l-1.3 4.7 5.1 4.4z" />
        </svg>
      );
    default:
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}
