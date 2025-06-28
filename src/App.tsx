import './App.scss';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage';


const App: React.FC = () => {
  return (
    <div className="background-container">
      <div className="content-container">
        <Header />
        <LandingPage />
        {/* <h1>Fixed Background, Scrollable Content</h1>
        <p>Scroll down for more content...</p> */}
        <div style={{ height: '1500px' }} /> {/* Simulate scroll */}
      </div>
    </div>
  );
}

export default App;

// import './App.scss'; // Local styles for App only
// import Header from './components/Header/Header';

// const App: React.FC = () => {
//   return (
//     <div className="app">
//       <Header />
//       <h1>Hello, I'm Evelyn!</h1>
//     </div>
//   );
// };

// export default App;


// import Message from './components/message';


// // export default App
// function App() {
//   return <div><Message /></div>;
// }

// export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
