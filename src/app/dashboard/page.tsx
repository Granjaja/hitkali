import { verifySession } from '@/app/lib/dal'
import AdminDashboard from '@/components/AdminDashboard'
import UserDashboard from '@/components/UserDashboard'
import { redirect } from 'next/navigation'
 
export default async function Dashboard() {
  const session = await verifySession()
  const userRole = session?.user?.role // Assuming 'role' is part of the session object
 
  if (userRole === 'admin') {
    return <AdminDashboard />
  } else if (userRole === 'user') {
    return <UserDashboard />
  } else {
    redirect('/login')
  }
}