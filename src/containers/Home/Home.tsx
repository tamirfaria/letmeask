import { useHistory } from 'react-router-dom'
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleImg from '../../assets/images/google-icon.svg'
import enterImg from '../../assets/images/enter.svg'
import Button from '../../components/Button';
import '../../styles/auth.scss'
import { useAuth } from '../../hooks/useAuth'

export const Home: React.FC = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const handleCreateNewRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    
    history.push('/room/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logomarca do site" />
          <Button onClick={handleCreateNewRoom} className="create-room">
            <img src={googleImg} alt="Logomarca do google" />
            Crie sua sala com o Google
          </Button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              <img src={enterImg} alt="Icone indicando entrada na sala" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
