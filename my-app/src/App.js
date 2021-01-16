import './App.css';
import ChatBox from './components/ChatBox';
import MessageBox from  './components/MessageBox'
function App() {
  return (
    <div className="App">
      <div className='container'>
        <ChatBox/>
        <MessageBox/>
      </div>
    </div>
  );
}

export default App;
