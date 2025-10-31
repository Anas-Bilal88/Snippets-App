"use server"
import { prisma } from "@/lib/prisma";
import { Snippet } from "next/font/google";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function saveSnippets(id:number,code:string){
     await prisma.snippet.update({
      where: {
         id
         },
      data: { 
        code
     },
    });
   revalidatePath(`/snippets/${id}`);
   redirect(`/snippets/${id}`)
}


export async function deleteSnippets(id: number) {
  await prisma.snippet.delete({
    where: { id },
  });
  revalidatePath("/");
  redirect("/")
}
