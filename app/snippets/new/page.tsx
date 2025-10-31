import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma"; 
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const CreateSnippets = () => {
  async function createSnippets(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

  
    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    revalidatePath("/")
    redirect("/");
  }
  return (
    <>
      <form action={createSnippets}>
        <div>
          <Label htmlFor="title" className="font-semibold text-lg">
            Title
          </Label>
          <Input type="text" id="title" name="title" />
        </div>

        <div className="mt-4">
          <Label htmlFor="code" className="font-semibold text-lg">
            Code
          </Label>
          <Textarea id="code" name="code" className="min-h-[200px]" />
        </div>
        <Button type="submit" className="w-full mt-6">
          New
        </Button>
      </form>
    </>
  );
};

export default CreateSnippets;

// https://www.youtube.com/watch?v=LVnc0fzNG6U&pp=ygUcbmV4dCBqcyAxNSBjb2RlIHN0ZXAgYnkgc3RlcA%3D%3D