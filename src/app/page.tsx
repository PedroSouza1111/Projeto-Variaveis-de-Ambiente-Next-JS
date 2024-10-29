import {Loader} from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
  version: "weekly",
})

export default function Home() {
  return (
    <main>
      <h1>Env vars</h1>
    </main>
  )
}
