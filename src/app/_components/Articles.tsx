"use client"

import Link from "next/link"

import CompleteBtn from "./CompleteBtn"

const Articles = () => {
  return (
    <main className="flex flex-col">
      <h2>My Todos</h2>
      <section className="flex flex-col flex-grow md:grid md:grid-cols-3 gap-4">
        <article className="flex w-full flex-col flex-grow gap-1 p-4 text-center shadow-md ">
          <h3>Todotitle</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="btn-container">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-1 p-4 text-center shadow-md">
          <h3>Todotitle</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="btn-container">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-1  p-4 text-center shadow-md">
          <h3>Todotitle</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="btn-container">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-1 p-4 text-center shadow-md">
          <h3>Todotitle</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="btn-container">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-1 p-4 text-center shadow-md">
          <h3>Todotitle</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="btn-container">
            <CompleteBtn />
          </div>
        </article>
        <article className="flex w-full flex-col flex-grow gap-1 p-4 text-center shadow-md">
          <h3>Todotitle</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum quas qui! Ipsa, nihil vero.
          </p>
          <div className="btn-container">
            <CompleteBtn />
          </div>
        </article>
      </section>
    </main>
  )
}

export default Articles
