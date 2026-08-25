export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path
        d="M6.6 3.5h2.4l1.4 4.2-2 1.6a11.6 11.6 0 0 0 6.3 6.3l1.6-2 4.2 1.4v2.4c0 1-.8 1.8-1.8 1.7a17 17 0 0 1-14.4-14.4c-.1-1 .7-1.8 1.7-1.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" strokeLinejoin="round" />
      <path d="m4.5 6.5 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path
        d="M7 20.5 4.2 21.3 5 18.5A8 8 0 1 1 12 20a8 8 0 0 1-5-1.6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 8.7c.2-.5.4-.6.7-.6h.5c.2 0 .4 0 .6.4l.6 1.4c.1.2.1.4 0 .6l-.4.5c-.1.2-.1.3 0 .5.4.7 1.3 1.6 2 2 .2.1.3.1.5 0l.5-.4c.2-.1.4-.1.6 0l1.4.6c.3.2.3.4.3.6v.5c0 .3-.1.5-.6.7-.7.3-1.6.3-2.7-.2-1.5-.6-2.9-2-3.5-3.5-.5-1.1-.5-2-.2-2.7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
