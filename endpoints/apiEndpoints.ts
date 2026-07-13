export const useApiEndpoints = () => {
  const config = useRuntimeConfig()
  const base = config.public.apiBase as string

  return {
    login: () => `${base}/user/login/`,
    verifyToken: () => `${base}/user/verify-token/`,
    me: () => `${base}/user/me/`,
    courses: () => `${base}/course/`,
    courseAssign: (id: number | string) => `${base}/course/${id}/assign/`,
    courseCollaborators: (id: number | string) =>
      `${base}/course/${id}/collaborators/`,
    courseEnrollments: () => `${base}/course/enrollments/`,
    collaborators: () => `${base}/collaborator/`,
    myCourses: () => `${base}/course-collaborator/my-courses/`,
  }
}
