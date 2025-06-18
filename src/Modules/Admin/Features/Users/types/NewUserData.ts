// export interface NewUserData {
//     username: string;
//     email: string;
//     firstName?: string;
//     lastName?: string;

// }
export interface NewUserData {
  username: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  displayName?: string;

  email: string;
  website?: string;

  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  pinterest?: string;
  snapchat?: string;
  tumblr?: string;
  whatsapp?: string;
  telegram?: string;
  youtube?: string;

  bio?: string;
  profileImage?: FileList;
    language?: string;
    password: string;
    role?: string;
}
