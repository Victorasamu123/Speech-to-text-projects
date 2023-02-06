import logo from "./logo.svg";
import "./App.css";
import mic from './Icons/auto_detect_voice_FILL0_wght400_GRAD0_opsz48.svg'
import before from './Icons/navigate_before_FILL0_wght400_GRAD0_opsz48.svg'
import next from './Icons/navigate_next_FILL0_wght400_GRAD0_opsz48.svg'
function App() {
  return (
    <>
      <div className="body">
        <section>
          <span><img src={before} alt="" /></span>
          <span className='middle-navigate'></span>
          <span><img src={next} alt="" /></span>
        </section>
        <section>
          <main className="options">
            <p>Language:</p>
            <select name="language" id="laguage">
              
            </select>
          </main>
          <div></div>
          <div></div>
        </section>
        <section>
          <div>
            <button>
              <img src={mic} alt="Translate" />
            </button>
            <button>hindi</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
