import { MoreVerticalIcon } from './Icons';

function KnowledgeCard({ title, description, createdOn }) {
  return (
    <article className="knowledge-card">
      <header>
        <h3>{title}</h3>
        <button type="button" className="menu-dot" aria-label="Open card menu">
          <MoreVerticalIcon size={15} />
        </button>
      </header>
      <p>{description}</p>
      <footer>Created On: {createdOn}</footer>
    </article>
  );
}

export default KnowledgeCard;
