import Link from "next/link";

export default function Placeholder() {
  return (
    <main class="flex justify-center items-center w-screen">
      <div class="text-center">
        <h1 class="text-4xl">FilmJS</h1>
        <p>Not sure what I'm doing with this page yet, but I feel like I need it somehow.</p>
        <div class="pt-5">
          <Link class="block" href = "/films">Films</Link>
          <Link class="block" href = "/about">About</Link>
        </div>
      </div>
    </main>
  )
}