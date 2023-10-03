import {client} from '@/utils/sanity/client'
import { Post } from '@/lib/sanity.queries'

// `app/page.tsx` is the UI for the `/` URL
export default async function Page() {

  const posts = await client.fetch<Post[]>(`*[_type == "post"]`)

  console.log(posts)

  return <h1>Hello, another page!</h1>
} 