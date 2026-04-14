
export enum UserRole {
  ORG_OWNER = 'ORG_OWNER',
  PRODUCT_OWNER = 'PRODUCT_OWNER'
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  organization?: string;
  lastLogin?: string;
}

export type OpportunityStatus = 'Draft' | 'Published' | 'Expired';

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  status: OpportunityStatus;
  applicationsCount: number;
  createdDate: string;
  recruiter: string;
  seoStatus: 'Optimized' | 'Warning' | 'Pending';
  type: 'Job' | 'Internship' | 'Fellowship';
}

export interface Applicant {
  id: string;
  name: string;
  email: string;
  opportunityId: string;
  opportunityTitle: string;
  stage: 'Applied' | 'Shortlisted' | 'Interview' | 'Selected' | 'Rejected';
  appliedDate: string;
  resumeUrl: string;
  notes: string;
}

export interface Recruiter {
  id: string;
  name: string;
  email: string;
  activeJobs: number;
  interviewsScheduled: number;
  hiresClosed: number;
}

export interface AuditLog {
  id: string;
  user: string;
  action: string;
  resource: string;
  timestamp: string;
  ip: string;
}
