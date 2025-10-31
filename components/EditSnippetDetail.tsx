"use client";
import Editor from "@monaco-editor/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { saveSnippets } from "@/actions";

const EditSnippetDetail = ({ snippet }: { snippet: any }) => {
  const [code, setCode] = useState(snippet.code);

   const saveAction = saveSnippets.bind(null, snippet.id, code)

  const changeEventHandler = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">{snippet.title}</h1>
      <div className="mt-4">
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={code}
          onChange={changeEventHandler}
        />
        <form action={saveAction}>
          <Button className="mt-2 w-full" type="submit">Save</Button>
        </form>
        <Link href={`/snippets/${snippet.id}`}>
          <Button variant="outline" className="mt-2 w-full">Cancel</Button>
        </Link>
      </div>
    </div>
  );
};

export default EditSnippetDetail;
