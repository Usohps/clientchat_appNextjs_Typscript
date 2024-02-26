import { db } from "../library/db"
import Button from "../components/ui/Button"
export default async function Home() {
    await db.set("hello","Bye")
  return (
    <>
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className='text-red-500'>Hello World</div> */}
      <Button variant="ghost" size="lg"> Click me </Button>
    </main>
    </>
  )
}
