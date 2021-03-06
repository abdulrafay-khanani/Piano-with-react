import './App.css';
import Piano from './piano'
import AudioContextProvider from './utility/AudioContext';

function App() {
  return (
    <div className="App">
      <AudioContextProvider>
        <Piano/>
      </AudioContextProvider>
    </div>
  );
}

export default App;
