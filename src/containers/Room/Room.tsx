import React from 'react'
import {useParams} from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import Button from '../../components/Button'
import RoomCode from '../../components/RoomCode'
import '../../styles/room.scss'
import toast, { Toaster } from 'react-hot-toast';


type RoomParamsProps = {
  id: string
}

const Room: React.FC = () => {
  const params = useParams<RoomParamsProps>();
  const roomId = params.id;

  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(roomId);
    toast.success("Código copiado!")
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Logomarca do site" />
          <RoomCode code={roomId} onClick={copyRoomCodeToClipboard}/>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 Perguntas</span>
        </div>

        <form>
          <textarea
            placeholder="O que você quer perguntar?"
          />

          <div className="form-footer">
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default Room;