import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import '../../styles/auth.scss'
import Button from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import Banner from '../Banner';


export const NewRoom: React.FC = () => {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <Banner />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logomarca do site" />
          <h2>Olá, {user?.name}! Bora criar uma nova sala?</h2>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala já existente?
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
