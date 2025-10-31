import EditSnippetDetail from "@/components/EditSnippetDetail";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

const EditSnippets = async ({params,}: {params: Promise<{ id: string }>;}) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) return notFound();
  return (
    <>
      <EditSnippetDetail snippet={snippet} />
    </>
  );
};

export default EditSnippets;
