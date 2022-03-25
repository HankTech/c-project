import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Message {
  readonly id: string;
  readonly content: string;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class ChatRoom {
  readonly id: string;
  readonly newMessage?: number | null;
  readonly LastMessage?: Message | null;
  readonly Messages?: (Message | null)[] | null;
  readonly ChatRoomUsers?: (UserChatRoom | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly status?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly Chatrooms?: (UserChatRoom | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class UserChatRoom {
  readonly id: string;
  readonly chatRoom: ChatRoom;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserChatRoom, UserChatRoomMetaData>);
  static copyOf(source: UserChatRoom, mutator: (draft: MutableModel<UserChatRoom, UserChatRoomMetaData>) => MutableModel<UserChatRoom, UserChatRoomMetaData> | void): UserChatRoom;
}