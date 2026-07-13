export interface Course {
  id: number
  full_name: string
  description: string
  duration_hours: number
  version: string
  is_active: boolean
  created_at?: string
}

export interface Collaborator {
  id: number
  email: string
  full_name: string
}
