
import './App.css';
import  apple  from "./apple.webp";
function Search(){
  <img src={apple} alt=""/>  
}

function App() {
  return (
    <div className="App">
      <div className='header'>
        <span>React Photo Search</span>
        </div>
        <button className='btn1'>Bookmarks</button>
      <div className='header2'>
      <input  type="text" className='input'   placeholder='Search free high resolution images'></input>
        <button onClick={Search} className='btn2'>Search</button>
      </div>
      
    </div>
  );
}

export default App;
