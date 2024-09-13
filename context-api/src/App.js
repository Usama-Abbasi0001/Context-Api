import { createContext } from 'react';
import './App.css';
import ChalidA from './components/ChalidA';


//create, provider, consumer
// it is context api is also problematic - usecontext hook is alternet 
const data = createContext();
const data1=createContext();
const data2 = createContext();

function App() {
  const name = "Context-Api"
const depart ="Computer Science"
const Depart1="Information Technology"
  return (
    <>
      {/* <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <data.Provider value={name}>
          <ChalidA />
        </data.Provider>
      </div> */}

      <div className="App">
        <h1 className="text-3xl font-bold underline mt-4">Hello world!</h1>
        <div className='mt-5 font-bold'>
          <data1.Provider value={depart}>
            <data2.Provider value={Depart1}>
              <ChalidA />
            </data2.Provider>
          </data1.Provider>
        </div>
      </div>
    </>
  );
}
export default App;
export {data, data1,data2};
