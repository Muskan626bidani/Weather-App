import './App.css';
import Social from './Components/Social';
import Background from './Components/Background';
import LeftInfo from './Components/LeftInfo.js';
import Sidebar from './Components/Sidebar';

// Add photos to github
// fixed live clock, added dynamic backgrounds, added dynamic weather icons

function App() {
  return (
    <>
      <section className='container'>
        <Social />
        <Background />
        <LeftInfo />
        <Sidebar />
      </section>
    </>
  );
}

export default App;

// import './App.css';
// import TempApp from './Components/TempApp';

// function App() {
//   return (
//     <div className="App">
//       <TempApp/>
//     </div>
//   );
// }

// export default App;
// //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=5391e08d0a61d396b949ddf28a40f9a6