export interface IEverRealProfile {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  profilePhoto?: string;
  profileData: {
    language?: string;
    salutation?: string;
    phoneNumber?: string;
    cellPhoneNumber?: string;
  };
}
