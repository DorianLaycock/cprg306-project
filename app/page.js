import Link from "next/link";

export default function Home() {
  return (
    <main class="flex justify-center items-center w-screen">
      <div class="text-center">
        <h1 class="text-4xl">FilmJS</h1>
        <p>Welcome to FilmJS, a website dedicated to creating lists and cataloging your favorite films.</p>
        <div class="pt-5">
          <Link class="block" href = "/films">Films</Link>
          <Link class="block" href = "/about">About</Link>
          <Link class="block" href = "/placeholder">Placeholder</Link>
        </div>
      </div>
    </main>
  )
}
