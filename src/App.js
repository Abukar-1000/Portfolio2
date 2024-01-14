import './App.css';
import { Project } from './Components/Project';
import { ProjectContainer } from './Components/Containers';
import { Skills } from './Components/Skills';
import { TabContainer } from './Components/Tabs';
import { allProjectData } from './ProjectData';
import { Circle } from './Components/Shapes/Circle';
import { Square } from './Components/Shapes/Square';
import { Triangle } from './Components/Shapes/Triangle';
import { IntroPage } from './IntroPage';
import { CustomCard } from './Components/CustomCard';
import { AcademicInfo } from './Components/AcademicInfo';

function App() {
  return (
    <div className="App">
      <IntroPage />
      <AcademicInfo />
      <TabContainer content={allProjectData} />
      <Circle />
      <Square />
      <Triangle />
    </div>
  );
}

export default App;
