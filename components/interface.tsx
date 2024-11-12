export enum UserRole {
  buyer = 'buyer',
  freelancer = 'freelancer',
  administrator = 'administrator',
  itAdmin = 'itAdmin',
  engineeringAdmin = 'engineeringAdmin',
  managementAdmin = 'managementAdmin'
}

export interface UserInterface {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  image?: string | null;
  role: UserRole;
  isVerified?: boolean;
}

export interface employmentHistoryObj {
  jobTitle: string,
  company: string,
  startDate: Date,
  endDate: Date
}

export interface ProposalInterface {
  _id: string;
  freelancer: FreelancersInterface;
  service: ServiceInterface;
  coverLetter: string;
  price: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}
export interface FreelancersInterface {
  _id: string;
  user : UserInterface;
  skills? : string[],
  address? : string,
  phone?: string,
  profileTitle?: string,
  overview?: string
  employmentHistory?: employmentHistoryObj[],
  proposals : ProposalInterface[] | string[],
}

export interface FreelancUserInterface {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: File | string | unknown;
  profileTitle?: string,
  overview?: string,
  skills? : string[],
  address? : string,
  role: "freelancer",
  isVerified?: boolean,
  phone?: string,
  hireCount?: number,
  employmentHistory: employmentHistoryObj[],
}

export interface BuyerUserInterface {
  userId: string;
  buyerId: string;
  firstName: string;
  lastName: string;
  email: string;
  image: File | string | unknown;
  address? : string,
  role: "buyer",
  isVerified?: boolean,
  phone?: string,
  companyName?: string,
  companyDescription?: string
}


export interface ServiceInterface {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  skills: string[];
  proposals: ProposalInterface[];
  proposalsCount: number;
  hiredCount: number;         
  isHiringClosed: boolean;
  isCompleted: boolean;
  hiredFreelancers: FreelancersInterface[];
  appliedFreelancers: FreelancersInterface[];
  requiredFreelancers: number;
  createdAt: Date;
}

export interface EmploymentHistoryProps {
  userInfo : FreelancUserInterface,
  setUserInfo: React.Dispatch<React.SetStateAction<FreelancUserInterface>>;
  isEditMode : boolean,
  protectedRoute : any;
}
import { useRouter } from "next/navigation";

type NextNavigationRouter = ReturnType<typeof useRouter>;
export interface CustomRouter extends NextNavigationRouter {
}

export interface UserInfoInterface {
  user : UserInterface,
  freelancer : FreelancersInterface,
  proposal : ProposalInterface,
  service : ServiceInterface
}

export interface secretCodeInterface {
  _id : string,
  code : string
}

export interface NotificationInterface {
  _id : string,
  user : UserInterface,
  isRead: boolean,
  message : string, 
  type : string,
  typeId : string,
  createdAt : string
}

export interface ProposalDetailsInterface {
  _id : string,
  freelancerId: string,
  service: ServiceInterface, 
  status: "pending" | "accepted" | "rejected",
  coverLetter: string,
  price: number,
  createdAt: Date
}