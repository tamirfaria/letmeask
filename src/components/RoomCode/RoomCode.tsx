import React from 'react'
import copyImg from '../../assets/images/copy.svg'

import '../../styles/room-code.scss'

type RoomCodeProps = {
  code: string
  onClick: () => void
}

const RoomCode: React.FC<RoomCodeProps> = ({ code, onClick }: RoomCodeProps) => {

  return (
    <button className="room-code" onClick={onClick}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>Sala {code}</span>
    </button>
  )
}

export default RoomCode