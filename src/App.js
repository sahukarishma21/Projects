import logo from './logo.svg';
import './App.css';
import Sidebar from './component/mainpage/Sidebar/Sidebar';
import Content from './component/mainpage/Middlebar/Content/Content';
import Price from './component/mainpage/Middlebar/Plan/Plan';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Content/>
      <Price/>
    </div>
  );
}

export default App;