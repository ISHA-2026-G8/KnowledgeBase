function IconBase({ children, size = 16, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function LogoIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 14.5c0-2.2 1.8-4 4-4h2.5" />
      <circle cx="7.5" cy="14.5" r="2.2" />
      <path d="M10.5 4 17 20h3L13.5 4z" />
    </svg>
  );
}

export function SearchIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16 20 20" />
    </IconBase>
  );
}

export function BellIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <path d="M9 18h6" />
      <path d="M6.8 15.8h10.4a1 1 0 0 0 .8-1.6l-1.5-2.1V9.8a4.5 4.5 0 0 0-9 0v2.3L6 14.2a1 1 0 0 0 .8 1.6z" />
    </IconBase>
  );
}

export function ChevronDownIcon({ size = 14, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export function PlusIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <path d="M12 5v14M5 12h14" />
    </IconBase>
  );
}

export function MoreVerticalIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <circle cx="12" cy="6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="18" r="1.1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function BriefcaseIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <rect x="3.5" y="7.5" width="17" height="11" rx="2" />
      <path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" />
      <path d="M3.5 12h17" />
    </IconBase>
  );
}

export function ModelsIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
      <path d="M13 7.5h2.5a2.5 2.5 0 0 1 2.5 2.5V13" />
      <path d="M11 16.5H8.5A2.5 2.5 0 0 1 6 14v-2" />
    </IconBase>
  );
}

export function LibraryIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M9 4.5v15M15 4.5v15" />
    </IconBase>
  );
}

export function MonitorIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <rect x="3.5" y="5" width="17" height="12" rx="2" />
      <path d="M10 20h4M12 17v3" />
    </IconBase>
  );
}

export function QueueIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
      <circle cx="6" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="6" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="6" cy="17" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function TriggerIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <path d="M13 3 6 13h5l-1 8 7-10h-5z" />
    </IconBase>
  );
}

export function JobsIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M9 10.2v3.6l3.2-1.8z" />
    </IconBase>
  );
}

export function VaultIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <path d="M12 4 18.5 6.5V12c0 4.1-2.6 6.9-6.5 8-3.9-1.1-6.5-3.9-6.5-8V6.5z" />
    </IconBase>
  );
}

export function KnowledgeIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <path d="M4 6.5h7a3 3 0 0 1 3 3v8H7a3 3 0 0 0-3 3z" />
      <path d="M20 6.5h-7a3 3 0 0 0-3 3v8h7a3 3 0 0 1 3 3z" />
    </IconBase>
  );
}

export function KeyStoreIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <path d="M5.5 19V5.5M10.5 19V8M15.5 19V4.5M20 19V9.5" />
    </IconBase>
  );
}

export function TenantIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <circle cx="9" cy="12" r="1.6" />
      <path d="M13 10h4M13 14h4" />
    </IconBase>
  );
}

export function IntegrationsIcon({ size = 16, className = '' }) {
  return (
    <IconBase size={size} className={className}>
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
      <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" />
    </IconBase>
  );
}
