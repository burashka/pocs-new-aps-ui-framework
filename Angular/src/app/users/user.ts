import { UserType } from './user-type';

export interface User {
  id: number;
  givenName:  string;
  familyName: string;
  type: UserType;
  login: string;
  notificationEmail: string;
  hasNotificationEmail: boolean;
  sendInvitation: boolean;
}
