interface ChatRoom {
  id: string;
  name: string;
}

export default function useChatRoom(id: string): ChatRoom {
  const name = id === "1" ? "Foo" : "Bar";
  return { id, name };
}
