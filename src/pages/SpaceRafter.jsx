import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SpaceRafter() {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to the actual HTML game file
    window.location.href = '/space_rafter.html'
  }, [])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #0a0510, #1e0f0a)',
      color: '#fff',
      fontSize: '24px',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div>Loading Space Rafter...</div>
      <button 
        onClick={() => navigate('/')}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          background: 'linear-gradient(135deg, #ff6432, #d84315)',
          color: '#fff',
          border: '3px solid #ffab91',
          borderRadius: '12px',
          cursor: 'pointer',
          fontWeight: '900'
        }}
      >
        ← Back to Home
      </button>
    </div>
  )
}

export default SpaceRafter
