"use client"
import Image from 'next/image'
import Nav from './_components/Nav'
import Form from './_components/Form'
import Articles from './_components/Articles'
import TodoContext from '@/context/TodoContext'

export default function Home() {
  return (
    <>
    <div className="container grid gap-4">
      <TodoContext>
      <Nav />
      <div className="w-10/12 mx-auto">
      <Form />
      <Articles />
      </div>
      </TodoContext>
    </div>
    </>
  )
}
