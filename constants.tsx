
import React from 'react';
import { Opportunity, Applicant, Recruiter, AuditLog, UserRole } from './types';

export const MOCK_OPPORTUNITIES: Opportunity[] = [
  { id: '1', title: 'Senior Frontend Engineer', organization: 'TechCorp', status: 'Published', applicationsCount: 45, createdDate: '2023-10-01', recruiter: 'Jane Smith', seoStatus: 'Optimized', type: 'Job' },
  { id: '2', title: 'Product Design Intern', organization: 'TechCorp', status: 'Draft', applicationsCount: 0, createdDate: '2023-10-15', recruiter: 'John Doe', seoStatus: 'Pending', type: 'Internship' },
  { id: '3', title: 'Engineering Fellowship', organization: 'InnovateAI', status: 'Expired', applicationsCount: 120, createdDate: '2023-09-10', recruiter: 'Jane Smith', seoStatus: 'Optimized', type: 'Fellowship' },
  { id: '4', title: 'Backend Architect', organization: 'CloudScale', status: 'Published', applicationsCount: 22, createdDate: '2023-10-20', recruiter: 'Mike Ross', seoStatus: 'Warning', type: 'Job' },
  { id: '5', title: 'Sales Executive', organization: 'TechCorp', status: 'Published', applicationsCount: 89, createdDate: '2023-10-05', recruiter: 'Jane Smith', seoStatus: 'Optimized', type: 'Job' },
];

export const MOCK_APPLICANTS: Applicant[] = [
  { id: 'a1', name: 'Alice Walker', email: 'alice@example.com', opportunityId: '1', opportunityTitle: 'Senior Frontend Engineer', stage: 'Interview', appliedDate: '2023-10-02', resumeUrl: '#', notes: 'Strong React skills. Moving to round 2.' },
  { id: 'a2', name: 'Bob Stevens', email: 'bob@example.com', opportunityId: '1', opportunityTitle: 'Senior Frontend Engineer', stage: 'Applied', appliedDate: '2023-10-03', resumeUrl: '#', notes: '' },
  { id: 'a3', name: 'Charlie Brown', email: 'charlie@example.com', opportunityId: '4', opportunityTitle: 'Backend Architect', stage: 'Shortlisted', appliedDate: '2023-10-21', resumeUrl: '#', notes: 'Go expert.' },
  { id: 'a4', name: 'Diana Prince', email: 'diana@example.com', opportunityId: '1', opportunityTitle: 'Senior Frontend Engineer', stage: 'Selected', appliedDate: '2023-10-01', resumeUrl: '#', notes: 'Top candidate.' },
  { id: 'a5', name: 'Ethan Hunt', email: 'ethan@example.com', opportunityId: '5', opportunityTitle: 'Sales Executive', stage: 'Rejected', appliedDate: '2023-10-06', resumeUrl: '#', notes: 'Lacks required experience.' },
];

export const MOCK_RECRUITERS: Recruiter[] = [
  { id: 'r1', name: 'Jane Smith', email: 'jane@techcorp.com', activeJobs: 3, interviewsScheduled: 12, hiresClosed: 8 },
  { id: 'r2', name: 'John Doe', email: 'john@techcorp.com', activeJobs: 1, interviewsScheduled: 2, hiresClosed: 1 },
  { id: 'r3', name: 'Mike Ross', email: 'mike@cloudscale.com', activeJobs: 5, interviewsScheduled: 20, hiresClosed: 15 },
];

export const MOCK_AUDIT_LOGS: AuditLog[] = [
  { id: 'l1', user: 'Admin User', action: 'LOGIN_SUCCESS', resource: 'Auth', timestamp: '2023-10-25 09:30:12', ip: '192.168.1.1' },
  { id: 'l2', user: 'Jane Smith', action: 'OPPORTUNITY_UPDATE', resource: 'Senior Frontend Engineer', timestamp: '2023-10-25 10:15:00', ip: '192.168.1.45' },
  { id: 'l3', user: 'System', action: 'GDPR_CONSENT_LOG', resource: 'User Privacy', timestamp: '2023-10-25 11:00:22', ip: 'Internal' },
];

export const DASHBOARD_STATS = {
  [UserRole.ORG_OWNER]: {
    activeOpportunities: 12,
    totalApplications: 450,
    interviewsScheduled: 34,
    positionsClosed: 8
  },
  [UserRole.PRODUCT_OWNER]: {
    totalOpportunities: 2450,
    totalApplicationsTrend: 15400,
    activeEmployers: 182,
    avgConversion: '14.2%'
  }
};
