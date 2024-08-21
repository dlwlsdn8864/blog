import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js'
import MoneyChange from './pages/MoneyChange.js'
import Header from './components/MenuBarHeader.js'

function App() {
  return (
    <Router>
      <Header/>
      <div style={{ marginTop: '37px' }}></div> {/* Header 높이만큼의 마진 추가 */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/moneyChange' element={<MoneyChange/>}/>
      </Routes>
    </Router>
  );
}

export default App;
