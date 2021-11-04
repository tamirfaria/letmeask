import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import '../../styles/auth.scss'
import Button from '../../components/Button';
import Banner from '../Banner';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';


export const NewRoom: React.FC = () => {
  const { user } = useAuth();

  const [newRoom, setNewRoom] = useState('');

  const handleNewRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === '') return;

    const roomRef = database.ref('room');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

  }

  return (
    <div id="page-auth">
      <Banner />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logomarca do site" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleNewRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
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
