
interface ChatRoom {
  id: string, 
  name: string
}

export default function useChatRooms(): ChatRoom[] {
  const chatRooms = [
    { id: '1', name: "Foo" },
    { id: '2', name: "Bar" },
  ];

  return chatRooms;
}
