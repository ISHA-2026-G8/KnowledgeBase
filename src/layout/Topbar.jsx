import { BellIcon, ChevronDownIcon, LogoIcon, SearchIcon } from '../components/Icons';

function Topbar() {
  return (
    <header className="topbar">
      <div className="brand-area">
        <div className="brand-mark">
          <LogoIcon size={20} />
        </div>
        <span className="brand-name">Workspace</span>
        <button type="button" className="workspace-pill">
          Workspace 1 <ChevronDownIcon size={12} />
        </button>
      </div>

      <div className="top-search">
        <SearchIcon size={14} />
        <input type="text" placeholder="Search..." readOnly />
        <kbd>⌘K</kbd>
      </div>

      <div className="top-actions">
        <button type="button" aria-label="Notifications" className="icon-only">
          <BellIcon size={16} />
        </button>
        <div className="avatar">GK</div>
      </div>
    </header>
  );
}

export default Topbar;
