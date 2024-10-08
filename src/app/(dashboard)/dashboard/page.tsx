'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'

const Dashboard = () => {
  
    const { data: session, status } = useSession()
    
    const usersName = session?.user?.name



  
    return (
      <section>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }} 
          className='flex flex-col gap-2'>
            <h1>Welcome, {usersName}</h1>
          </motion.div>
      </section>
    )
}

export default Dashboard