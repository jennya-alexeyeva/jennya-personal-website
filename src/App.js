import MainPanel from "./components/MainPanel";
import interests from './rawData/interests.json';
import InterestsPage from "./components/InterestsPage";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import AboutMePage from "./components/AboutMePage";
import workExperience from "./rawData/workExperience.json";
import education from "./rawData/education.json";
import skills from "./rawData/skills.json";
import projects from "./rawData/projects.json";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
      <div>
        <MainPanel />
        <AboutMePage />
        <ExperienceTimeline title="Education" items={education} />
        <SkillsPage skills={skills} />
        <ProjectsPage projects={projects} />
        <ExperienceTimeline title="Experience" items={workExperience} />
        <InterestsPage interests={interests} />
      </div>
  );
}

export default App;
