import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import '../../styles/auth.scss'
import Button from '../../components/Button';
import Banner from '../Banner';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';



export const NewRoom: React.FC = () => {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();

  const handleNewRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === '') return;

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    toast.success('Sala criada com sucesso!');

    setTimeout(() => {
      history.push(`/rooms/${firebaseRoom.key}`);
    }, 1500)
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
              placeholder="Crie um título para a sala"
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
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}
