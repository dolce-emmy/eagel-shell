"use client";
import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
// Import images using relative paths from the public directory
import user1 from "/public/users/user1.png";
import user2 from "/public/users/user2.jpg";
import user3 from "/public/users/user3.jpeg";
import user4 from "/public/users/user4.jpg";
import user5 from "/public/users/user5.jpg";
import { StarFilledIcon } from "@radix-ui/react-icons";
const users = [
  { id: 1, name: "User1", image: user1 },
  { id: 2, name: "User2", image: user2 },
  { id: 3, name: "User3", image: user3 },
  { id: 4, name: "User4", image: user4 },
  { id: 5, name: "User5", image: user5 },
];

const UsersImage = () => {
  return (
    <>
      
        {users.map((user) => (
          <motion.div
            
            key={user.id}
            whileHover={{ y: -3 }} // Motion animation on hover
            whileTap={{ scale: 0.5 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0 }}
          >
            <Image
              key={user.id}
              src={user.image}
              alt={user.name}
              priority
              className="inline-block h-20 w-20 rounded-full 
          ring-2 ring-snow object-cover "
            />
          </motion.div>
        ))}
      
      
    </>
  );
};

export default UsersImage;
