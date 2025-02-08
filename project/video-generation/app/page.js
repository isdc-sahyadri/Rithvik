import Image from "next/image";
import {Button} from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
export default function Home() {

  return (
    <div>
      <h2>helooooooo</h2>
      <Button>Suscribe</Button>
      <UserButton/>
    </div>
  );
}
