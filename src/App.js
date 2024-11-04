
import AboutContainer from './components/AboutContainer/AboutContainer';
import Header from './components/Header/Header';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';
import TopContainer from './components/TopContainer/TopContainer';
import "./App.css";
import ContactContainer from './components/ContactContainer/ContactContainer';

function App() {
  return (
    <div className="App">
     <Header />
     <TopContainer />
     <AboutContainer/>
     <SkillsContainer/>
     <ProjectContainer/>
     <ContactContainer/>
    </div>
  );
}

export default App;
