import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    // Generate stars
    const starsContainer = document.getElementById('stars')
    const starCount = 200

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      
      const size = Math.random() * 3
      star.style.width = size + 'px'
      star.style.height = size + 'px'
      star.style.left = Math.random() * 100 + '%'
      star.style.top = Math.random() * 100 + '%'
      star.style.animationDelay = Math.random() * 3 + 's'
      star.style.animationDuration = (2 + Math.random() * 3) + 's'
      
      starsContainer.appendChild(star)
    }

    // Parallax effect
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01
      
      document.querySelectorAll('.game-card').forEach((card, index) => {
        const multiplier = (index + 1) * 0.5
        card.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`
      })
    }

    const handleMouseLeave = () => {
      document.querySelectorAll('.game-card').forEach(card => {
        card.style.transform = 'translate(0, 0)'
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="home">
      <div id="stars"></div>
      
      <div className="shooting-star" style={{top: '10%', left: '80%', animationDelay: '0s'}}></div>
      <div className="shooting-star" style={{top: '30%', left: '60%', animationDelay: '2s'}}></div>
      <div className="shooting-star" style={{top: '50%', left: '90%', animationDelay: '4s'}}></div>
      <div className="shooting-star" style={{top: '70%', left: '40%', animationDelay: '6s'}}></div>

      <div className="container">
        <header>
          <h1>🚀 MARS GAMES HUB</h1>
          <p>Choose your adventure: Build a thriving colony on Mars or defend the galaxy in an epic space battle!</p>
        </header>

        <div className="games-grid">
          
          <div className="game-card" onClick={() => navigate('/mars-town')}>
            <span className="game-icon">🏗️</span>
            <h2>Mars Town Builder</h2>
            <div className="subtitle">City Building Simulator</div>
            <p>Build and manage a thriving colony on the Red Planet. Place habitats, farms, power plants, and spaceports while managing resources to keep your colonists alive!</p>
            
            <ul className="features">
              <li>Colorful 3D buildings with shadows</li>
              <li>Simple and intuitive controls</li>
              <li>Beautiful Mars atmosphere</li>
              <li>7+ building types to construct</li>
              <li>Resource management (energy, food, water)</li>
              <li>Easy camera controls (WASD + zoom)</li>
            </ul>
            
            <button className="play-button">🎮 Play Now</button>
          </div>

          <div className="game-card" onClick={() => navigate('/space-rafter')}>
            <span className="game-icon">🚀</span>
            <h2>Space Rafter</h2>
            <div className="subtitle">3D Space Shooter</div>
            <p>Pilot the XR-Δ ship through dangerous space! Use your time-bending abilities to slow down enemies and rewind mistakes in this fast-paced 3D shooter.</p>
            
            <ul className="features">
              <li>Time-dilation warp ability</li>
              <li>Rewind mechanic to undo damage</li>
              <li>3 challenging levels with boss fight</li>
              <li>NASA starfield backgrounds</li>
              <li>Power-ups and shield pickups</li>
              <li>Gamepad support included</li>
            </ul>
            
            <button className="play-button">🎮 Play Now</button>
          </div>

        </div>

        <footer>
          <p>Built with ❤️ using React & Three.js | No installation required - just click and play!</p>
          <p>Textures: NASA/JPL-Caltech | Sound Effects: Mixkit/Freesound</p>
        </footer>
      </div>
    </div>
  )
}

export default Home
