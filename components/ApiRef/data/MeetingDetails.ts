type IApiDataType = {
  title: string;
  type: string;
  required: boolean;
  description: string;
  default?: string;
};

export const MeetingDetailsAPI: IApiDataType[] = [
  {
    title: 'roomId',
    type: 'string',
    required: true,
    description:
      'The RoomId of the room, for which you need to get the details.',
  },
];

export const MeetingDetailsResponse: IApiDataType[] = [
  {
    title: 'roomId',
    description:
      'The RoomId of the room, for which you need to get the details.',
    required: true,
    type: 'string',
  },
  {
    title: 'roomLocked',
    description: 'The room locked status of the room.',
    required: false,
    type: 'boolean',
  },
];

export const MeetingDetailsUsingTitleAPI: IApiDataType[] = [
  {
    title: 'title',
    description: 'The title of the room.',
    required: true,
    type: 'string',
  },
  {
    title: 'qty',
    description: 'The quantity of the rooms to return',
    required: false,
    type: 'number',
    default: '1',
  },
  {
    title: 'orderBy',
    description: 'The order by which the rooms to return',
    required: false,
    type: 'string',
    default: 'desc',
  },
];

export const ParticipantListAPI: IApiDataType[] = [
  {
    title: 'meetingId',
    type: 'string',
    required: true,
    description:
      'The MeetingId of the room, for which you need to get the list.',
  },
];

export const ParticipantListResponse: IApiDataType[] = [
  {
    title: 'roomId',
    type: 'string',
    required: true,
    description: 'The RoomId of the room, for which you need to get the list.',
  },
  {
    title: 'hostAddresses',
    type: 'string[]',
    required: true,
    description: 'The host wallet address of the room.',
  },
  {
    title: 'participants',
    type: '{displayName: string, walletAddress: string | null}[]',
    required: true,
    description: 'The list of participants in the room.',
  },
  {
    title: 'duration',
    type: 'number | null',
    required: false,
    description: 'The duration of the meeting.',
  },
];

export const MeetingsListAPI: IApiDataType[] = [
  {
    title: 'roomId',
    type: 'string',
    required: true,
    description:
      'The RoomId of the room, for which you need to get the meeting lists.',
  },
];

export const MeetingsListResponse: IApiDataType[] = [
  {
    title: 'meetingId',
    type: 'string',
    required: true,
    description: 'The MeetingId of the meeting in the room.',
  },
  {
    title: 'startTime',
    type: 'string (ISO 8601)',
    required: true,
    description: 'The start time of the meeting.',
  },
  {
    title: 'endTime',
    type: 'string (ISO 8601)',
    required: true,
    description: 'The expiry time of the meeting.',
  },
];
