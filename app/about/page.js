import Link from "next/link";

export default function About() {
  return (
    <main class="flex justify-center items-center w-screen">
      <div class="text-center">
        <h1 class="text-4xl">FilmJS</h1>
        <p>FilmJS is a film database built using an Imdb API, intended for cataloging your favorite films in one place.</p>
        <p>The project is still in development, and as such, the API hasn't been integrated yet.</p>
        <p>Created by Dorian Laycock.</p>
        <p>Version 0.1</p>
        <div class="pt-5">
          <Link class="block" href = "/films">Films</Link>
          <Link class="block" href = "/placeholder">Placeholder</Link>
        </div>
      </div>
    </main>
  )
}