"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";

function PlaceholderDocument() {
    const router = useRouter()
    const handleClick = () => {
        // Check if the user is free tier or if they are over the file limit, push to the upgrade page
        router.push("/dashboard/upload")
    }
  return (
    <Button onClick={handleClick} className="w-64 h-80 flex flex-col items-center justify-center rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
      <PlusCircleIcon className="h-16 w-16" />
      <p>Add a Document</p>
    </Button>
  );
}

export default PlaceholderDocument;
