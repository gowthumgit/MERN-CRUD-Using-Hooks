import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/common/Footer';
import NavBar from './components/common/Navbar';
import CrudAdd from './components/cruds/CrudAdd';
import CrudListView from './components/cruds/CrudListView';
import CrudGridView from './components/cruds/CrudGridView';
import CrudDetails from './components/cruds/CrudDetails';
import CrudEdit from './components/cruds/CrudEdit';
import CrudList from './components/cruds/CrudList';
import CrudTable from './components/cruds/CrudTable';
import CrudDelete from './components/cruds/CrudDelete';
function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
         <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/api/' element={<Home />} />
            <Route exact path='/cruds' element={<CrudList />} />
            <Route exact path='/cruds/new' element={<CrudAdd/>} />
            <Route exact path='/cruds/list-view' element={<CrudListView />} />
            <Route exact path='/cruds/grid-view' element={<CrudGridView />} />
            <Route exact path='/cruds/:_id' element={<CrudDetails />} />
            <Route exact path='/cruds/:_id/edit' element={<CrudEdit />} />
            <Route exact path='/cruds/table-view' element={<CrudTable />} />
            <Route exact path='/cruds/:_id/delete' element={<CrudDelete />} />
         </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
