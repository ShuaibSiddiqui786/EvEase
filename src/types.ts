export interface Event {
  id: string;
  title: string;
  description: string;
  club: Club;
  date: Date;
  venue: Venue;
  capacity: number;
  registrations: number;
  status: 'draft' | 'pending' | 'approved' | 'rejected';
  image: string;
}

export interface Club {
  id: string;
  name: string;
  type: 'cultural' | 'technical' | 'sports' | 'other';
  logo: string;
}

export interface Venue {
  id: string;
  name: string;
  type: 'seminar_hall' | 'auditorium' | 'classroom' | 'ground';
  capacity: number;
  image: string;
}

export type UserRole = 'student' | 'club_coordinator' | 'faculty_advisor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  clubId?: string; // For club coordinators
  department?: string; // For faculty advisors
}

export interface Permission {
  canCreateEvent: boolean;
  canApproveEvents: boolean;
  canManageVenues: boolean;
  canManageClubs: boolean;
  canViewAnalytics: boolean;
  canManageUsers: boolean;
}

export const rolePermissions: Record<UserRole, Permission> = {
  student: {
    canCreateEvent: false,
    canApproveEvents: false,
    canManageVenues: false,
    canManageClubs: false,
    canViewAnalytics: false,
    canManageUsers: false
  },
  club_coordinator: {
    canCreateEvent: true,
    canApproveEvents: false,
    canManageVenues: false,
    canManageClubs: false,
    canViewAnalytics: true,
    canManageUsers: false
  },
  faculty_advisor: {
    canCreateEvent: false,
    canApproveEvents: true,
    canManageVenues: false,
    canManageClubs: true,
    canViewAnalytics: true,
    canManageUsers: false
  },
  admin: {
    canCreateEvent: true,
    canApproveEvents: true,
    canManageVenues: true,
    canManageClubs: true,
    canViewAnalytics: true,
    canManageUsers: true
  }
}