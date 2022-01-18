import './App.css'
import { DirectRoutes } from "./components/routes/Routes";
import { Home } from './components/Home/Home'
import UpperDescription from './components/UpperDescription/UpperDescription';

function App() {
  return (
    <div >
      <Home />
      <DirectRoutes />
      <UpperDescription />
    </div>
  );
}

export default App;
