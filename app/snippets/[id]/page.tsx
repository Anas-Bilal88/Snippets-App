import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteSnippets } from "@/actions";
import { notFound } from "next/navigation";

const SnippetDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
         id,
        },
  });

  if (!snippet) return notFound();

  const deleteAction = deleteSnippets.bind(null, id)

  return (
    <>
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold">{snippet.title}</h1>
      <div className="flex justify-center gap-3">
        <Link href={`/snippets/${id}/edit`}><Button>Edit</Button></Link>
       <form action={deleteAction}>
         <Button variant={"destructive"}>Delete</Button>
       </form>
      </div>
    </div>
    <div className="mt-4">
        <pre className="mt-2 bg-gray-100 p-4 rounded">{snippet.code}</pre>
    </div>
    </>
  );
};
 export default SnippetDetails;

export async function generateStaticParams() {
  const posts = await prisma.snippet.findMany();
  console.log(posts);
  
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

