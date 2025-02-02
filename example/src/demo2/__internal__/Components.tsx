import { ChatManagerScreen, ChatManagerRoute } from '../ChatManager';
import { SendMessageScreen } from '../ChatManager/SendMessage';
import { ChatManagerLeafScreen } from '../ChatManager/ChatManagerItem';
import { ClientScreen, ClientRoute } from '../Client';
import { ClientOthersScreen } from '../Client/ClientOthers';
import { CreateAccountScreen } from '../Client/CreateAccount';
import { GetStateScreen } from '../Client/GetState';
import { KickScreen } from '../Client/Kick';
import { LoginAndLogoutScreen as LoginLogoutScreen } from '../Client/LoginAndLogout';
import { GroupManagerRoute, GroupManagerScreen } from '../GroupManager';
import { GroupManagerLeafScreen } from '../GroupManager/GroupManagerItem';
// import { LeafScreenClient, LeafScreenTest } from '../__test__/Test1';
import type { ScreenComponent } from './Utils';
import {
  QuickTestManagerRoute,
  QuickTestManagerScreen,
} from '../QuickTestManager';
import { QuickTestScreenChat } from '../Test/QuickTestChat';
import { QuickTestScreenContact } from '../Test/QuickTestContact';
import { QuickTestScreenGroup } from '../Test/QuickTestGroup';
import { QuickTestScreenRoom } from '../Test/QuickTestRoom';
import { QuickTestScreenUser } from '../Test/QuickTestUser';

export const screenComponents: ScreenComponent[] = [
  { route: GroupManagerRoute, screen: GroupManagerScreen, isNavigation: true },
  { route: ChatManagerRoute, screen: ChatManagerScreen, isNavigation: true },
  { route: ClientRoute, screen: ClientScreen, isNavigation: true },
  {
    route: QuickTestManagerRoute,
    screen: QuickTestManagerScreen,
    isNavigation: true,
  },
  {
    route: SendMessageScreen.route,
    screen: SendMessageScreen,
    isNavigation: false,
    parentScreen: ChatManagerRoute,
  },
  {
    route: ClientOthersScreen.route,
    screen: ClientOthersScreen,
    isNavigation: false,
    parentScreen: ClientRoute,
  },
  {
    route: CreateAccountScreen.route,
    screen: CreateAccountScreen,
    isNavigation: false,
    parentScreen: ClientRoute,
  },
  {
    route: GetStateScreen.route,
    screen: GetStateScreen,
    isNavigation: false,
    parentScreen: ClientRoute,
  },
  {
    route: KickScreen.route,
    screen: KickScreen,
    isNavigation: false,
    parentScreen: ClientRoute,
  },
  {
    route: LoginLogoutScreen.route,
    screen: LoginLogoutScreen,
    isNavigation: false,
    parentScreen: ClientRoute,
  },
  {
    route: ChatManagerLeafScreen.route,
    screen: ChatManagerLeafScreen,
    isNavigation: false,
    parentScreen: ChatManagerRoute,
  },
  {
    route: QuickTestScreenChat.route,
    screen: QuickTestScreenChat,
    isNavigation: false,
    parentScreen: QuickTestManagerRoute,
  },
  {
    route: QuickTestScreenContact.route,
    screen: QuickTestScreenContact,
    isNavigation: false,
    parentScreen: QuickTestManagerRoute,
  },
  {
    route: QuickTestScreenGroup.route,
    screen: QuickTestScreenGroup,
    isNavigation: false,
    parentScreen: QuickTestManagerRoute,
  },
  {
    route: QuickTestScreenRoom.route,
    screen: QuickTestScreenRoom,
    isNavigation: false,
    parentScreen: QuickTestManagerRoute,
  },
  {
    route: GroupManagerLeafScreen.route,
    screen: GroupManagerLeafScreen,
    isNavigation: false,
    parentScreen: GroupManagerRoute,
  },
  {
    route: QuickTestScreenUser.route,
    screen: QuickTestScreenUser,
    isNavigation: false,
    parentScreen: QuickTestManagerRoute,
  },
];
