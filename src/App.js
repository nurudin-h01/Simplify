import './App.css';
import Navbar from './components/navbar';
import Tab from './components/tab';
import Filter from './components/filter';
import Kelas from './components/kelas';
import { useRecoilState, useRecoilValue } from 'recoil';
import classatom from './store/atoms/ClassAtom';
import classselector from './store/selectors/ClassSelector';

function App() {
  const [formstate, setformstate] = useRecoilState(classatom);
  const classvalue = useRecoilValue(classselector)
  return (
    <div className="">
      <Navbar></Navbar>
      <Tab>
          <div className='grid grid-cols-12'>
            <Filter></Filter>
            <div className='col-span-9'>
              { 
                classvalue.map((x) => {
                  return(
                    <Kelas namakelas={x.namakelas}></Kelas>
                  )
                })
              }
              {console.log(classvalue)}
            </div>
          </div>
          
      </Tab>
    </div>
  );
}

export default App;
