import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../components/button';
import './index.css';
import { AppContext } from '../../context/AppContext';
import { Logo } from './logo';

const HomePage = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user])

  return (
    <>
      <header className='page-header'>
        <div className='container page-header-navbar'>
          <div style={{ marginTop: 20 }}>
            <Logo />
          </div>
          <Button variant='secondary' size='medium' onClick={() => setUser(undefined)}>
            Sair
          </Button>
        </div>
        <div className='page-header-content'>
          <div className="container page-header-container">
            <h1 className='title1'>
              Olá, {user?.nome}
            </h1>
            <span className='headline'>
              {user?.funcao}
            </span>
          </div>
        </div>
      </header>
      <main className='page-main'>
        <div className='container page-main-content'>
          <h2 className='title1'>
            Que pena! Estamos em desenvolvimento :(
          </h2>
          <p className='paragraph'>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades!!
          </p>
        </div>
      </main>
    </>
  )
};

export default HomePage;