import { useMemo, useState } from 'react';
import Topbar from './layout/Topbar';
import Sidebar from './layout/Sidebar';
import KnowledgeGrid from './components/KnowledgeGrid';
import CreateKnowledgeModal from './components/CreateKnowledgeModal';
import { PlusIcon, SearchIcon } from './components/Icons';
import { sidebarSections } from './data/navigation';
import { initialKnowledgeCards } from './data/knowledgeCards';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const cards = useMemo(() => initialKnowledgeCards, []);

  return (
    <div className="app-shell">
      <Topbar />
      <div className="app-content">
        <Sidebar sections={sidebarSections} />
        <main className="page-content">
          <section className="content-header-row">
            <h1 className="page-title">Knowledge Base</h1>
            <div className="actions-row">
              <div className="search-input">
                <SearchIcon size={16} />
                <input type="text" placeholder="Search..." readOnly />
              </div>
              <button type="button" className="create-button" onClick={() => setModalOpen(true)}>
                <PlusIcon size={14} />
                Create New
              </button>
            </div>
          </section>

          <KnowledgeGrid cards={cards} />

          <footer className="table-footer">
            <p>6 rows</p>
            <div className="pager">
              <span>Rows per page</span>
              <button type="button" className="pager-chip">10</button>
              <span>page 1 of 1</span>
              <div className="pager-buttons">
                <button type="button" aria-label="Previous page">&lt;</button>
                <button type="button" aria-label="Next page">&gt;</button>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <CreateKnowledgeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
