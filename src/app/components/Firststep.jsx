import React from "react";
import { Input } from "./Input";
import Image from "next/legacy/image";

const Logo = () => {
  return (
    <div>
      <Image src="/img/logo.png" width={60} height={60} alt="pinecone-logo" />
    </div>
  );
};

const Firststep = () => {
  return (
    <div className="bg-white justify-center flex-col [w-480px] [h-650px] border-2">
      <Logo />
      Join Us! <p>Please provide all current information accurately</p>
      <p>First name</p>
      <Input label="First Name" type="text" placeholder="write first name" />
      <p>Last Name</p>
      <Input label="Last Name" type="text" placeholder="write last name" />
      <p>Username</p>
      <Input label="Username" type="text" placeholder="write username " />
      <button>Continue 1/3</button>
    </div>
  );
};

export default Firststep;
