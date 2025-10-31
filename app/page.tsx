import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Snippet } from "next/font/google";

// export const dynamic = "force-dynamic";

export default async function Home() {
    const snippets = await prisma.snippet.findMany();
  return (
    <>
    <div>
      <h1 className="text-4xl font-bold">Home</h1>

      <div className="mt-4 flex justify-between">
        <h3 className="font-semibold text-xl">Snippets</h3>
        <Link href={"/snippets/new"}><Button >New</Button></Link>
      </div>
       
       <div className="mt-4">
        {
          snippets.map((snippet)=>(
            <div className="flex justify-between mt-4 bg-gray-200 p-1 rounded-sm">
              <h1>{snippet.title}</h1>
              <Link href={`/snippets/${snippet.id}`}><Button variant="link">view</Button></Link>
            </div>
          ))
        }
       </div>
    </div>
    </>
  );
}
