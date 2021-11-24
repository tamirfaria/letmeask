import { useHistory } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import googleImg from '../../assets/images/google-icon.svg'
import enterImg from '../../assets/images/enter.svg'
import Button from '../../components/Button';
import '../../styles/auth.scss'
import { useAuth } from '../../hooks/useAuth'
import Banner from '../Banner'
import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';
import toast, { Toaster } from 'react-hot-toast';

export const Home: React.FC = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const handleCreateNewRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  const handleJoinNewRoom = async (event: FormEvent) => {
    event.preventDefault();

    if(roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()) {
      toast.error('A sala procurada não existe.');
      setRoomCode('');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <Banner />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logomarca do site" />
          <Button onClick={handleCreateNewRoom} className="create-room">
            <img src={googleImg} alt="Logomarca do google" />
            Crie sua sala com o Google
          </Button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinNewRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              <img src={enterImg} alt="Icone indicando entrada na sala" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}
