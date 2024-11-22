import { IApiDataType } from '../TokenGated';

export const CreateRoomAPI: IApiDataType[] = [
  {
    title: 'roomLocked',
    type: 'boolean',
    required: false,
    default: 'true',
    description:
      'The start time of the room. This will be displayed in the room list.',
  },
  {
    title: 'metadata',
    type: 'object',
    required: false,
    description:
      'This can be custom data that you want to store with the room. This data will be returned when you fetch the room details.',
  },
];

export const CreateRoomResponse = [
  {
    title: 'message',
    type: 'string',
    required: true,
    description: 'The message returned from the server.',
    default: 'Room created successfully',
  },
  {
    title: 'roomId',
    type: 'string',
    required: true,
    description: 'The id of the room created.',
  },
];
