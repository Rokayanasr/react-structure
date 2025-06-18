export interface LoginRequest {
  email: string;
  password: string;
}
export type user = {
  id: number;                      
  first_name: string;            
  last_name: string;            
  email: string;                 
  role: 'admin' | 'owner' | "worker"; 
  profile_completion: number;    
  nick_name: string;             
  display_name: string;           
  biographical_info: string;      
  status: 'active' | 'inactive' | string; 
};

export interface LoginResponse {
data:{
    token: string;
  user: user
  message?: string;
  success?: boolean;
  status:number
}
}

export type RestRequest={
   email: string;
  password: string;
  password_confirmation: string;
}