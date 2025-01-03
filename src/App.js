import './App.css';
import { Project } from './Components/Project';
import { ProjectContainer } from './Components/Containers';
import { Skills } from './Components/Skills';
import { TabContainer } from './Components/Tabs';
import { JobSection } from './Components/JobComponents/JobSection';
import { allProjectData } from './ProjectData';
import { Circle } from './Components/Shapes/Circle';
import { Square } from './Components/Shapes/Square';
import { Triangle } from './Components/Shapes/Triangle';
import { IntroPage } from './IntroPage';
import { CustomCard } from './Components/CustomCard';
import { AcademicInfo } from './Components/AcademicInfo';
import { Course } from './Components/CourseComponents/Course';

function App() {
  return (
    <div className="App">
      <IntroPage />
      <JobSection />
      <AcademicInfo />
      <TabContainer content={allProjectData} />
      <Circle />
      <Square />
      <Triangle />
    </div>
  );
}

export default App;
