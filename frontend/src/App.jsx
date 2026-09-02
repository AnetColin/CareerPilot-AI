import { useState } from "react";
import ReactMarkdown from "react-markdown";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    degree: "",
    semester: "",
    skills: "",
    interests: "",
    projects: "",
    target_career: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeAgent, setActiveAgent] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");
  setResult(null);
  setActiveAgent(0);

  const startTime = Date.now();

  const agentTimer = setInterval(() => {
    setActiveAgent((current) => {
      if (current < 3) {
        return current + 1;
      }

      return 3;
    });
  }, 1200);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to generate career analysis");
    }

    const data = await response.json();

    const elapsedTime = Date.now() - startTime;
    const minimumLoadingTime = 5000;

    if (elapsedTime < minimumLoadingTime) {
      await new Promise((resolve) =>
        setTimeout(resolve, minimumLoadingTime - elapsedTime)
      );
    }

    clearInterval(agentTimer);

    setActiveAgent(3);
    setResult(data);

    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);

  } catch (err) {
    setError(
      "Unable to connect to CareerPilot AI backend. Make sure FastAPI is running."
    );
  } finally {
    clearInterval(agentTimer);
    setLoading(false);
  }
};
const downloadPDF = async () => {
  const report = document.getElementById("results");

  if (!report) return;

  const canvas = await html2canvas(report, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#f5f7fb",
  });

  const imageData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imageWidth = pdfWidth;
  const imageHeight = (canvas.height * imageWidth) / canvas.width;

  let heightLeft = imageHeight;
  let position = 0;

  pdf.addImage(
    imageData,
    "PNG",
    0,
    position,
    imageWidth,
    imageHeight
  );

  heightLeft -= pdfHeight;

  while (heightLeft > 0) {
    position = heightLeft - imageHeight;

    pdf.addPage();

    pdf.addImage(
      imageData,
      "PNG",
      0,
      position,
      imageWidth,
      imageHeight
    );

    heightLeft -= pdfHeight;
  }

  pdf.save("CareerPilot-AI-Career-Report.pdf");
};
const startNewAnalysis = () => {
  setResult(null);
  setError("");
  setActiveAgent(0);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">
          CareerPilot <span>AI</span>
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          IBM Granite Connected
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            🤖 AI-Powered Career Intelligence
          </div>

          <h1>
            Discover Your <span>Future Career Path</span>
          </h1>

          <p>
            CareerPilot AI analyzes your skills, interests and projects using
            intelligent AI agents to generate personalized career guidance and
            a learning roadmap.
          </p>

          <div className="hero-features">
            <div>🤖 4 AI Agents</div>
            <div>🎯 Personalized Guidance</div>
            <div>🗺️ Learning Roadmap</div>
          </div>
        </div>
      </header>

      {/* AI WORKFLOW */}
      <section className="workflow-section">
        <div className="section-heading">
          <p className="section-tag">HOW IT WORKS</p>
          <h2>Your AI Career Intelligence Team</h2>
          <p>
            Four specialized AI agents work together to understand your profile
            and build your personalized career journey.
          </p>
        </div>

        <div className="workflow-grid">
          <div className="workflow-card">
            <div className="agent-number">01</div>
            <div className="agent-icon">👤</div>
            <h3>Profile Agent</h3>
            <p>Analyzes your education, skills, interests and projects.</p>
          </div>

          <div className="workflow-card">
            <div className="agent-number">02</div>
            <div className="agent-icon">🎯</div>
            <h3>Career Agent</h3>
            <p>Identifies career paths that best match your profile.</p>
          </div>

          <div className="workflow-card">
            <div className="agent-number">03</div>
            <div className="agent-icon">📈</div>
            <h3>Skill Gap Agent</h3>
            <p>Finds important skills you need for your target career.</p>
          </div>

          <div className="workflow-card">
            <div className="agent-number">04</div>
            <div className="agent-icon">🗺️</div>
            <h3>Roadmap Agent</h3>
            <p>Creates a practical step-by-step learning roadmap.</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <main className="container">
        <section className="form-card">
          <div className="form-header">
            <div className="form-icon">🚀</div>

            <div>
              <p className="section-tag">START YOUR JOURNEY</p>
              <h2>Build Your Career Profile</h2>
              <p className="subtitle">
                Share your background and let our AI agents create your
                personalized career report.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid">
              <div className="field">
                <label>🎓 Degree</label>
                <input
                  type="text"
                  name="degree"
                  placeholder="B.Tech Computer Science"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label>📚 Semester</label>
                <input
                  type="text"
                  name="semester"
                  placeholder="5"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>💻 Technical Skills</label>
              <textarea
                name="skills"
                placeholder="Python, Machine Learning, React, Power BI..."
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label>✨ Interests</label>
              <textarea
                name="interests"
                placeholder="Artificial Intelligence, Data Science..."
                value={formData.interests}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label>🛠️ Projects</label>
              <textarea
                name="projects"
                placeholder="Describe your important academic or personal projects..."
                value={formData.projects}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label>🎯 Target Career</label>
              <input
                type="text"
                name="target_career"
                placeholder="Machine Learning Engineer"
                value={formData.target_career}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="loading-spinner"></span>
                  AI Agents Are Analyzing Your Profile...
                </>
              ) : (
                <>Generate My Career Roadmap 🚀</>
              )}
            </button>

            {loading && (
  <div className="agent-processing">
    <p className="processing-title">
      🤖 CareerPilot AI Agents are working on your profile
    </p>

    <div className="agent-list">
      <div className={activeAgent > 0 ? "agent-step completed" : activeAgent === 0 ? "agent-step active" : "agent-step"}>
        <span className="agent-status">
          {activeAgent > 0 ? "✓" : activeAgent === 0 ? "⏳" : "○"}
        </span>
        <div>
          <strong>Profile Agent</strong>
          <p>Analyzing your education, skills and projects</p>
        </div>
      </div>

      <div className={activeAgent > 1 ? "agent-step completed" : activeAgent === 1 ? "agent-step active" : "agent-step"}>
        <span className="agent-status">
          {activeAgent > 1 ? "✓" : activeAgent === 1 ? "⏳" : "○"}
        </span>
        <div>
          <strong>Career Agent</strong>
          <p>Finding the best career opportunities for you</p>
        </div>
      </div>

      <div className={activeAgent > 2 ? "agent-step completed" : activeAgent === 2 ? "agent-step active" : "agent-step"}>
        <span className="agent-status">
          {activeAgent > 2 ? "✓" : activeAgent === 2 ? "⏳" : "○"}
        </span>
        <div>
          <strong>Skill Gap Agent</strong>
          <p>Identifying important skills you should develop</p>
        </div>
      </div>

      <div className={activeAgent === 3 ? "agent-step active" : "agent-step"}>
        <span className="agent-status">
          {activeAgent === 3 ? "⏳" : "○"}
        </span>
        <div>
          <strong>Roadmap Agent</strong>
          <p>Creating your personalized learning roadmap</p>
        </div>
      </div>
    </div>
  </div>
)}
          </form>

          {error && <p className="error">{error}</p>}
        </section>

        {/* RESULTS */}
        {result && (
          <section className="results" id="results">

            {result?.career_readiness_score !== undefined && (
  <div className="readiness-card">
    <div className="readiness-content">
      <div>
        <p className="readiness-label">CAREER READINESS SCORE</p>

        <h2>{result.career_readiness_score}%</h2>

        <p className="readiness-message">
          {result.career_readiness_score >= 80
            ? "Excellent foundation! You are well prepared to progress toward your career goals."
            : result.career_readiness_score >= 60
            ? "Good foundation! Focus on developing a few more skills and projects."
            : "You have a starting foundation. Follow your personalized roadmap to improve your readiness."}
        </p>
      </div>

      <div className="score-circle">
        <span>{result.career_readiness_score}%</span>
      </div>
    </div>

    <div className="score-bar">
      <div
        className="score-progress"
        style={{ width: `${result.career_readiness_score}%` }}
      ></div>
    </div>
  </div>
)}
            <div className="report-actions">
  <button
    type="button"
    className="download-btn"
    onClick={downloadPDF}
  >
    📄 Download Career Report as PDF
  </button>
  <button
  type="button"
  className="new-analysis-btn"
  onClick={startNewAnalysis}
>
  🔄 Start New Analysis
</button>
</div>

            <div className="section-heading">
              <p className="section-tag">YOUR AI REPORT</p>
              <h2>Your Personalized Career Intelligence</h2>
              <p>
                Generated by the CareerPilot AI multi-agent system.
              </p>
            </div>

            <div className="result-card">
              <div className="result-header">
                <span className="result-icon">📊</span>
                <h3>Profile Analysis</h3>
              </div>

              <div className="markdown-content">
                <ReactMarkdown>{result.profile_analysis}</ReactMarkdown>
              </div>
            </div>

            <div className="result-card">
              <div className="result-header">
                <span className="result-icon">🎯</span>
                <h3>Career Recommendations</h3>
              </div>

              <div className="markdown-content">
                <ReactMarkdown>
                  {result.career_recommendations}
                </ReactMarkdown>
              </div>
            </div>

            <div className="result-card">
              <div className="result-header">
                <span className="result-icon">📈</span>
                <h3>Skill Gap Analysis</h3>
              </div>

              <div className="markdown-content">
                <ReactMarkdown>
                  {result.skill_gap_analysis}
                </ReactMarkdown>
              </div>
            </div>

            <div className="result-card">
              <div className="result-header">
                <span className="result-icon">🗺️</span>
                <h3>Learning Roadmap</h3>
              </div>

              <div className="markdown-content">
                <ReactMarkdown>
                  {result.learning_roadmap}
                </ReactMarkdown>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <h3>CareerPilot AI</h3>
        <p>AI-Powered Agentic Career Counseling Companion</p>
        <span>Powered by IBM Granite & watsonx.ai</span>
      </footer>
    </div>
  );
}

export default App;