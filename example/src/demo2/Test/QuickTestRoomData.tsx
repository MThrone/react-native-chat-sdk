import type { ApiParams } from '../__internal__/DataTypes';

const joinChatRoom = 'joinChatRoom';
const leaveChatRoom = 'leaveChatRoom';
const fetchPublicChatRoomsFromServer = 'fetchPublicChatRoomsFromServer';
const fetchChatRoomInfoFromServer = 'fetchChatRoomInfoFromServer';
const getChatRoomWithId = 'getChatRoomWithId';
const getAllChatRooms = 'getAllChatRooms';
const createChatRoom = 'createChatRoom';
const destroyChatRoom = 'destroyChatRoom';
const changeChatRoomSubject = 'changeChatRoomSubject';
const changeChatRoomDescription = 'changeChatRoomDescription';
const fetchChatRoomMembers = 'fetchChatRoomMembers';
const muteChatRoomMembers = 'muteChatRoomMembers';
const unMuteChatRoomMembers = 'unMuteChatRoomMembers';
const changeOwner = 'changeOwner';
const addChatRoomAdmin = 'addChatRoomAdmin';
const removeChatRoomAdmin = 'removeChatRoomAdmin';
const fetchChatRoomMuteList = 'fetchChatRoomMuteList';
const removeChatRoomMembers = 'removeChatRoomMembers';
const blockChatRoomMembers = 'blockChatRoomMembers';
const unBlockChatRoomMembers = 'unBlockChatRoomMembers';
const fetchChatRoomBlockList = 'fetchChatRoomBlockList';
const updateChatRoomAnnouncement = 'updateChatRoomAnnouncement';
const fetchChatRoomAnnouncement = 'fetchChatRoomAnnouncement';
const fetchChatRoomWhiteListFromServer = 'fetchChatRoomWhiteListFromServer';
const isMemberInChatRoomWhiteList = 'isMemberInChatRoomWhiteList';
const addMembersToChatRoomWhiteList = 'addMembersToChatRoomWhiteList';
const removeMembersFromChatRoomWhiteList = 'removeMembersFromChatRoomWhiteList';
const muteAllChatRoomMembers = 'muteAllChatRoomMembers';
const unMuteAllChatRoomMembers = 'unMuteAllChatRoomMembers';


/**
 * 本地使用不导出
 */
export const MN = {
    joinChatRoom,
    leaveChatRoom,
    fetchPublicChatRoomsFromServer,
    fetchChatRoomInfoFromServer,
    getChatRoomWithId,
    getAllChatRooms,
    createChatRoom,
    destroyChatRoom,
    changeChatRoomSubject,
    changeChatRoomDescription,
    fetchChatRoomMembers,
    muteChatRoomMembers,
    unMuteChatRoomMembers,
    changeOwner,
    addChatRoomAdmin,
    removeChatRoomAdmin,
    fetchChatRoomMuteList,
    removeChatRoomMembers,
    blockChatRoomMembers,
    unBlockChatRoomMembers,
    fetchChatRoomBlockList,
    updateChatRoomAnnouncement,
    fetchChatRoomAnnouncement,
    fetchChatRoomWhiteListFromServer,
    isMemberInChatRoomWhiteList,
    addMembersToChatRoomWhiteList,
    removeMembersFromChatRoomWhiteList,
    muteAllChatRoomMembers,
    unMuteAllChatRoomMembers,
};

export const metaDataList = new Map<string, ApiParams>([
    [
        MN.joinChatRoom,
        {
            methodName: MN.joinChatRoom,
            params: [
              {
                paramName: 'roomId',
                paramType: 'string',
                paramDefaultValue: '180153356451841',
              }
            ],
          },
    ],
    [
        MN.leaveChatRoom,
        {
            methodName: MN.leaveChatRoom,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                }
            ],
          },
    ],
    [
        MN.fetchPublicChatRoomsFromServer,
        {
            methodName: MN.fetchPublicChatRoomsFromServer,
            params: [
              {
                paramName: 'aPageNum',
                paramType: 'number',
                paramDefaultValue: 1,
              },
              {
                paramName: 'aPageSize',
                paramType: 'number',
                paramDefaultValue: 200,
              },
            ],
          },
    ],
    [
        MN.fetchChatRoomInfoFromServer,
        {
            methodName: MN.fetchChatRoomInfoFromServer,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                }
            ],
          },
    ],
    [
        MN.getChatRoomWithId,
        {
            methodName: MN.joinChatRoom,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                }
            ],
          },
    ],
    [
        MN.getAllChatRooms,
        {
            methodName: MN.getAllChatRooms,
            params: [
              
            ],
          },
    ],
    [
        MN.createChatRoom,
        {
            methodName: MN.createChatRoom,
            params: [
              {
                paramName: 'subject',
                paramType: 'string',
                paramDefaultValue: 'haha',
              },
              {
                paramName: 'desc',
                paramType: 'string',
                paramDefaultValue: 'hahaha',
              },
              {
                paramName: 'welcomeMsg',
                paramType: 'string',
                paramDefaultValue: 'hahahaha',
              },
              {
                paramName: 'members',
                paramType: 'object',
                paramDefaultValue: ['bye','nat'],
              },
              {
                paramName: 'maxCount',
                paramType: 'number',
                paramDefaultValue: 300,
              },
            ],
          },
    ],
    [
        MN.destroyChatRoom,
        {
            methodName: MN.destroyChatRoom,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180169240281089',
                }
            ],
          },
    ],
    [
        MN.changeChatRoomSubject,
        {
            methodName: MN.changeChatRoomSubject,
            params: [
              {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
              },
              {
                    paramName: 'subject',
                    paramType: 'string',
                    paramDefaultValue: 'choose you',
              },
            ],
          },
    ],
    [
        MN.changeChatRoomDescription,
        {
            methodName: MN.changeChatRoomDescription,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'description',
                    paramType: 'string',
                    paramDefaultValue: 'o,o',
                },
            ],
          },
    ],
    [
        MN.fetchChatRoomMembers,
        {
            methodName: MN.fetchChatRoomMembers,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'cursor',
                    paramType: 'string',
                    paramDefaultValue: '',
                },
                {
                    paramName: 'pageSize',
                    paramType: 'number',
                    paramDefaultValue: 200,
                },
            ],
          },
    ],
    [
        MN.muteChatRoomMembers,
        {
            methodName: MN.muteChatRoomMembers,
            params: [
              {
                paramName: 'roomId',
                paramType: 'string',
                paramDefaultValue: '180153356451841',
              },
              {
                paramName: 'muteMembers',
                paramType: 'object',
                paramDefaultValue: ['bye','nat'],
              },
              {
                paramName: 'duration',
                paramType: 'number',
                paramDefaultValue: -1,
              },
            ],
          },
    ],
    [
        MN.unMuteChatRoomMembers,
        {
            methodName: MN.unMuteChatRoomMembers,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'unMuteMembers',
                    paramType: 'object',
                    paramDefaultValue: ['bye','nat'],
                },
            ],
          },
    ],
    [
        MN.changeOwner,
        {
            methodName: MN.changeOwner,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'newOwner',
                    paramType: 'string',
                    paramDefaultValue: 'bye',
                },
            ],
          },
    ],
    [
        MN.addChatRoomAdmin,
        {
            methodName: MN.addChatRoomAdmin,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'admin',
                    paramType: 'string',
                    paramDefaultValue: 'nat',
                },
            ],
          },
    ],
    [
        MN.removeChatRoomAdmin,
        {
            methodName: MN.removeChatRoomAdmin,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'admin',
                    paramType: 'string',
                    paramDefaultValue: 'nat',
                },
            ],
          },
    ],
    [
        MN.fetchChatRoomMuteList,
        {
            methodName: MN.fetchChatRoomMuteList,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'pageNum',
                    paramType: 'number',
                    paramDefaultValue: 1,
                },
                {
                    paramName: 'pageSize',
                    paramType: 'number',
                    paramDefaultValue: 200,
                },
            ],
          },
    ],
    [
        MN.removeChatRoomMembers,
        {
            methodName: MN.removeChatRoomMembers,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'members',
                    paramType: 'object',
                    paramDefaultValue: ['nat'],
                },
            ],
          },
    ],
    [
        MN.blockChatRoomMembers,
        {
            methodName: MN.blockChatRoomMembers,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'members',
                    paramType: 'object',
                    paramDefaultValue: ['nat'],
                },
            ],
          },
    ],
    [
        MN.unBlockChatRoomMembers,
        {
            methodName: MN.unBlockChatRoomMembers,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'members',
                    paramType: 'object',
                    paramDefaultValue: ['nat'],
                },
            ],
          },
    ],
    [
        MN.fetchChatRoomBlockList,
        {
            methodName: MN.fetchChatRoomBlockList,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'pageNum',
                    paramType: 'number',
                    paramDefaultValue: 1,
                },
                {
                    paramName: 'pageSize',
                    paramType: 'number',
                    paramDefaultValue: 200,
                },
            ],
          },
    ],
    [
        MN.updateChatRoomAnnouncement,
        {
            methodName: MN.updateChatRoomAnnouncement,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'anouncement',
                    paramType: 'string',
                    paramDefaultValue: 'hahaAnnouncement',
                },
            ],
          },
    ],
    [
        MN.fetchChatRoomAnnouncement,
        {
            methodName: MN.fetchChatRoomAnnouncement,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
            ],
          },
    ],
    [
        MN.fetchChatRoomWhiteListFromServer,
        {
            methodName: MN.fetchChatRoomWhiteListFromServer,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
            ],
          },
    ],
    [
        MN.isMemberInChatRoomWhiteList,
        {
            methodName: MN.isMemberInChatRoomWhiteList,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
            ],
          },
    ],
    [
        MN.addMembersToChatRoomWhiteList,
        {
            methodName: MN.addMembersToChatRoomWhiteList,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'anouncement',
                    paramType: 'object',
                    paramDefaultValue: ['nat'],
                },
            ],
          },
    ],
    [
        MN.removeMembersFromChatRoomWhiteList,
        {
            methodName: MN.removeMembersFromChatRoomWhiteList,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
                {
                    paramName: 'anouncement',
                    paramType: 'object',
                    paramDefaultValue: ['nat'],
                },
            ],
          },
    ],
    [
        MN.muteAllChatRoomMembers,
        {
            methodName: MN.muteAllChatRoomMembers,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
            ],
          },
    ],
    [
        MN.unMuteAllChatRoomMembers,
        {
            methodName: MN.unMuteAllChatRoomMembers,
            params: [
                {
                    paramName: 'roomId',
                    paramType: 'string',
                    paramDefaultValue: '180153356451841',
                },
            ],
          },
    ],
]);
