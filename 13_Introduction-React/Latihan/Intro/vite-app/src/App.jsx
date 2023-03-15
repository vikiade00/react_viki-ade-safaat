import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <div className="container">
        <h1>Welcome to My Page | <span>Frontend Enginer</span></h1>
        </div>
      </div>

      <div>
        <div className="section bg-section">
            <div className="intro-section">
              <img src="../src/assets/img/man.png" alt="Icon Man" width={100} />
              <div className="intro">
                <p>Viki Ade Safaat</p>
                <hr />
                <p>Universitas : STMIK Mardira Indoenesia</p>
                <p>Semester : 6</p>
              </div>
            </div>
        </div>
      </div>

      <div>
      <h2>About</h2>
        <div className="section">
          <div className="about-section">
            <div className="about-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam deserunt veniam placeat iste sint, vitae commodi distinctio ipsam, quas eos a, eveniet quam omnis consequuntur ducimus sapiente nulla laborum officia repudiandae nostrum unde. Nesciunt aut assumenda distinctio eum aspernatur quos, ea labore repellat quaerat ipsam sunt impedit, debitis expedita!</p>
            </div>
            <img src="../src/assets/img/Watermelon_Isometric.svg" alt="" width={300}/>
          </div>
        </div>
      </div>

      <div>
        <h2>Life Quote</h2>
        <div className="quote-section">
          <img src="../src/assets/img/left-quotes-sign.png" alt="" width={20}/>
          <p>Hidup Seperti Lery</p>           
          </div>
      </div>

      <div>
        <h2>My Hoby</h2>
        <div className="hoby-section">
          <div className="hoby">
            <img src="../src/assets/img/Designer _Flatline.svg" alt="programmer" width={150}/>
            <div className="hoby-text">
              <h3>Coding</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, expedita mollitia minus dolor officiis cum saepe vitae officia veritatis odio!</p>
            </div>
          </div>
          <div className="hoby">
            <img src="../src/assets/img/Fitness_Monochromatic.svg" alt="programmer" width={150}/>
            <div className="hoby-text">
              <h3>Olahraga</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, expedita mollitia minus dolor officiis cum saepe vitae officia veritatis odio!</p>
            </div>
          </div>
          <div className="hoby">
            <img src="../src/assets/img/Music_Two Color.svg" alt="programmer" width={150}/>
            <div className="hoby-text">
              <h3>Music</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, expedita mollitia minus dolor officiis cum saepe vitae officia veritatis odio!</p>
            </div>
          </div>
          <div className="hoby">
            <img src="../src/assets/img/Watermelon_Isometric.svg" alt="programmer" width={150}/>
            <div className="hoby-text">
              <h3>Traveling</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, expedita mollitia minus dolor officiis cum saepe vitae officia veritatis odio!</p>
            </div>
          </div>
        </div>

      <div>
        <h2>My Education</h2>
        <div className="section">
          <table>
                    <tr>
                        <th>No.</th>
                        <th>Education</th>
                        <th>Degree</th>
                        <th>Year</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>STMIK Mardira Indonesia</td>
                        <td>Sekolah Tinggi</td>
                        <td>2020-Sekarang</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>SMK Marhas Margahayu</td>
                        <td>Sekolah Menengah Kejuruan</td>
                        <td>2015-2018</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>SMP Karya Pembangunan Margahayu</td>
                        <td>Sekolah Menengah Pertama</td>
                        <td>2012-2015</td>
                    </tr>
                </table>
        </div>
      </div>
        
      <div>
      <footer class="footer">
        <p>Build proudly by: Viki Ade Safaat @2023</p>
        <hr />
        <a href="https://www.linkedin.com/in/viki-ade-safaat-2a0720244/">Linked In</a>

        <a href="https://github.com/vikiade00">Github</a>
    </footer>
      </div>

      </div>

    </div>
  )
}

export default App
