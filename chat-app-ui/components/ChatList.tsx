import React from 'react';
import Link from 'next/link'

import useChatRooms from '../hooks/useChatRooms';

interface Props {

}

export default function ChatList({ }: Props): JSX.Element {

  const chatRooms = useChatRooms()

  return (
    <div>
      ChatList
      <ul>
        {
          chatRooms.map(({ id, name }) => (
            <li key={id}>
              <article id={id}>
                <Link
                  href={{
                    pathname: '/chat-room/[id]',
                    query: { id },
                  }}
                  passHref
                >
                  <a rel="bookmark">
                    {name}
                  </a>
                </Link>
              </article>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
