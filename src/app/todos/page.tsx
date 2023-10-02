"use client"
import TodoContext from '@/context/TodoContext'
import React from 'react'

const page = () => {
  return (
    <>
    <h1>Todos page</h1>
    <TodoContext>
        <h2>Yes</h2>
    </TodoContext>
    </>
  )
}

export default page