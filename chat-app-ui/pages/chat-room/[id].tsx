import React from 'react';
import { useRouter } from 'next/router'

import useChatRoom from '../../hooks/useChatRoom';

interface Props {

}

export default function ChatRoomPage({

}: Props): JSX.Element {

  const { query: { id } } = useRouter()
  const chatRoom = useChatRoom(id as string)

  return (
    <div>
      <h1>{chatRoom.id}</h1>
      <h1>{chatRoom.name}</h1>
    </div>
  );
}
