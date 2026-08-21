type ProjectAnalysisData = {
  name: string;
  score: number;
  summary: string;
  technologies: string[];
  strengths: string[];
  highlights: string[];
  analyzedAt?: string;
};

export default function ProjectAnalysis({
  data,
}: {
  data: ProjectAnalysisData;
}) {
  return (
    <section className="analysis-card" aria-label={`${data.name} project analysis`}>
      <div className="analysis-top">
        <div>
          <span className="analysis-eyebrow">AI PROJECT ANALYSIS</span>
          <h3>{data.name}</h3>
        </div>

        <div className="score">
          <strong>{data.score}</strong>
          <span>/ 100</span>
          <small>PROJECT SCORE</small>
        </div>
      </div>

      <p className="analysis-summary">{data.summary}</p>

      <div className="analysis-section">
        <span className="section-label">TECHNOLOGIES</span>
        <div className="tech-list">
          {data.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="analysis-grid">
        <div className="analysis-section">
          <span className="section-label">STRENGTHS</span>
          <ul>
            {data.strengths.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>

        <div className="analysis-section">
          <span className="section-label">HIGHLIGHTS</span>
          <ul>
            {data.highlights.map((item) => (
              <li key={item}>◆ {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="analysis-footer">
        <span>Structured tool result</span>
        <span>Server-side execution</span>
      </div>
    </section>
  );
}
