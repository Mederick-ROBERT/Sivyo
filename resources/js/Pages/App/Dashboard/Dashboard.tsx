import { Head } from '@inertiajs/react'
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
  return (
    <>
      <Head title="Dashboard" />
      <h1>Dashboard</h1>
      <p>Welcome </p>
    </>
  )
}
