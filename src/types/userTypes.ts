export interface UserData {
  name: string;
  email: string;
  phone: string;
  middlename: string;
  age: number;
  cnic: number;
  specialization: string[];
  role: string;
  location: {
    lng: number;
    lat: number;
    name: string;
  };
  city: string;
  gender: string;
  address: string;
  refreshToken: string;
  honorifics: 'Mr' | 'MRs' | 'Miss' | 'Dr' | 'Prof';
  profile: string;
  profileImage: {
    public_id: string;
    url: string;
    _id: string;
  };
  createdAt: string;
  updatedAt: string;
  password: string;
  isVerified: boolean;
  isDegreeVerified: boolean;
}

export interface DoctorDataType {
  name: string;
  email: string;
  phone: string;
  middlename: string;
  age: number;
  cnic: number;
  specialization: string[];
  role: string;
  location: {
    lng: number;
    lat: number;
    name: string;
  }[];
  city: string;
  gender: string;
  address: string;
  refreshToken: string;
  honorifics: 'Mr' | 'MRs' | 'Miss' | 'Dr' | 'Prof';
  profile: string;
  profileImage: {
    public_id: string;
    url: string;
    _id: string;
  };
  createdAt: string;
  updatedAt: string;
  password: string;
  isVerified: boolean;
  isDegreeVerified: boolean;
  isDoctorVerified: 'true' | 'false' | 'pending';
  services: string[];
  certifications: string[];
  education: string[];
}
