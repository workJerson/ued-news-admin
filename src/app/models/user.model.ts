import { UserDetails } from './user-details.model';

export interface User {
  access_token: string;
  expires_at: string;
  token_type: string;
  user: GetUserModel
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
  login_attempts: number
  email_verified_at?: string
  created_at: Date
  updated_at: Date
}

export class UpdateUserModel extends GetUserModel{

}


