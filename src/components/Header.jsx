import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../store/userContext';

const Header = () => {
  const { username } = useContext(UserContext);
  const [blur, setBlur] = useState(false)
  
  useEffect(() => {
     
    setBlur(username === '')

  }, [username]) 

  
  return (
    <div className={blur ? 'blur': ''}>
      <h1 style={stylesTitle}>CHAT REACT</h1>
      {username && <div>
          <p style={{
              backgroundColor: '#228800', width: '95vw',
              color: '#d9d9d9',
              padding: '10px',
              display: 'flex',
              justifyContent: 'end',
             
          }}>Username: <span style={{color: 'white'}}>{username}</span></p>
          </div>}
    </div>
  );
};

const stylesTitle = {
  fontFamily: '"Impact", "Charcoal", sans-serif',
  fontSize: '2rem',
  letterSpacing: '-1.2px',
  wordSpacing: '1.4px',
  color: '#008800',
  fontWeight: '700',
  fontStyle: 'normal',
  fontVariant: 'small-caps',
  textTransform: 'capitalize',
  textAlign: 'center',
  textShadow: '1px 1px 1px #0E3011',
};

export default Header;
