import { UserDetails } from './user-details.model';

export interface User {
  access_token: string;
  expires_at: string;
  token_type: string;
  user: UserDetails
}

export class CreateUserModel {
  first_name: string
  last_name: string
  middle_name: string
  birth_date: string
  contact_number: string
  full_address: string
  avatar_path: string
  email: string
  account_type: string
}

export class GetUserModel extends CreateUserModel{
  id: number
  status: number
  created_at: Date
  updated_at: Date
}

export class UpdateUserModel extends GetUserModel{

}


