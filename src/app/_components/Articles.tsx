"use client"

import Link from "next/link"

import CompleteBtn from "./CompleteBtn"

const Articles = () => {
  return (
    <main className="flex flex-col">
      <h2 className="font-black">My Todos</h2>
      <section className="flex flex-col flex-grow md:grid md:grid-cols-3 gap-4 p-10">
        <article className="flex w-full flex-col flex-grow gap-4 p-4 text-center shadow-md">
          <h3 className="md:text-start font-bold">Todotitle</h3>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="flex justify-center md:justify-end">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-4 p-4 text-center shadow-md">
          <h3 className="md:text-start font-bold">Todotitle</h3>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="flex justify-center md:justify-end">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-4 p-4 text-center shadow-md">
          <h3 className="md:text-start font-bold">Todotitle</h3>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="flex justify-center md:justify-end">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-4 p-4 text-center shadow-md">
          <h3 className="md:text-start font-bold">Todotitle</h3>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="flex justify-center md:justify-end">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-4 p-4 text-center shadow-md">
          <h3 className="md:text-start font-bold">Todotitle</h3>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="flex justify-center md:justify-end">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-4 p-4 text-center shadow-md">
          <h3 className="md:text-start font-bold">Todotitle</h3>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="flex justify-center md:justify-end">
            <CompleteBtn />
          </div>
        </article>
      </section>
    </main>
  )
}

export default Articles
