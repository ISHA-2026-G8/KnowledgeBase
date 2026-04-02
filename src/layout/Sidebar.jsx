import {
  BriefcaseIcon,
  IntegrationsIcon,
  JobsIcon,
  KeyStoreIcon,
  KnowledgeIcon,
  LibraryIcon,
  ModelsIcon,
  MonitorIcon,
  QueueIcon,
  TenantIcon,
  TriggerIcon,
  VaultIcon,
} from '../components/Icons';

const iconByItem = {
  Agents: BriefcaseIcon,
  'AI Models': ModelsIcon,
  Library: LibraryIcon,
  Published: BriefcaseIcon,
  Machines: MonitorIcon,
  Queues: QueueIcon,
  Triggers: TriggerIcon,
  Jobs: JobsIcon,
  Executions: JobsIcon,
  Vault: VaultIcon,
  'Knowledge Base': KnowledgeIcon,
  'Key Store': KeyStoreIcon,
  Tenant: TenantIcon,
  Integrations: IntegrationsIcon,
};

function Sidebar({ sections }) {
  return (
    <aside className="sidebar">
      {sections.map((section) => (
        <section key={section.title} className="sidebar-section">
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item) => {
              const isActive = item === 'Knowledge Base';
              const ItemIcon = iconByItem[item] || LibraryIcon;

              return (
                <li key={item}>
                  <button type="button" className={`sidebar-link ${isActive ? 'active' : ''}`}>
                    <span className="sidebar-icon">
                      <ItemIcon size={15} />
                    </span>
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </aside>
  );
}

export default Sidebar;
