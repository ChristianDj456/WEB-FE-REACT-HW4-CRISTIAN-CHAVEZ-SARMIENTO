import Header from './components/header';
import Introduction from './components/introduction';
import Diagnostic from './components/diagnostic';
import OrgIdentity from './components/identity';
import StrategicGoals from './components/goals';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto">
        <Introduction />
        <Diagnostic />
        <OrgIdentity />
        <StrategicGoals />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
