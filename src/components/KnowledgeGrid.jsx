import KnowledgeCard from './KnowledgeCard';

function KnowledgeGrid({ cards }) {
  return (
    <section className="knowledge-grid-frame">
      <div className="knowledge-grid">
        {cards.map((card) => (
          <KnowledgeCard key={card.id} title={card.title} description={card.description} createdOn={card.createdOn} />
        ))}
      </div>
    </section>
  );
}

export default KnowledgeGrid;