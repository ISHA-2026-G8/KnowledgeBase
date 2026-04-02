function CreateKnowledgeModal({ isOpen, onClose }) {
  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
      <aside className="modal-panel" role="dialog" aria-modal="true" aria-label="Create New Knowledge Base">
        <header className="modal-head">
          <div>
            <h2>Create New Knowledge Base</h2>
            <p>Best for quick answers from documents, websites and text files.</p>
          </div>
          <button type="button" className="close-button" onClick={onClose} aria-label="Close popup">
            X
          </button>
        </header>

        <form className="modal-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Name (Cannot be edited later)<span>*</span>
            <input type="text" placeholder="Name" />
          </label>

          <label>
            Description
            <textarea placeholder="Description" rows={4} />
          </label>

          <label>
            Vector Store<span>*</span>
            <select defaultValue="Qdrant">
              <option value="Qdrant">Qdrant</option>
            </select>
          </label>

          <label>
            LLM Embedding Model<span>*</span>
            <select defaultValue="text-embedding-ada-002">
              <option value="text-embedding-ada-002">text-embedding-ada-002</option>
            </select>
          </label>
        </form>

        <footer className="modal-actions">
          <button type="button" className="primary-button" onClick={onClose}>Create</button>
        </footer>
      </aside>
    </div>
  );
}

export default CreateKnowledgeModal;