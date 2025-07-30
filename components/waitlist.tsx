"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleJoin = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (!res.ok) {
        throw new Error("Failed to join waitlist");
      }
      const data = await res.json();
      if (!data.message || data.message !== "Email stored successfully") {
        throw new Error("Failed to join waitlist");
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Successfully joined waitlist");
      toast(
        "Thank you for joining the waitlist <3 We will notify you when we launch.",
      );
    } catch (error) {
      console.error(error);
      toast.error(
        "An error occurred while joining the waitlist. Maybe you already added your email?",
      );
    } finally {
      setEmail("");
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 flex w-full max-w-md items-center justify-between rounded-full border-1 bg-white/10 px-2 py-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleJoin();
        }}
        placeholder="Enter your email"
        className="ml-4 w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
      />
      <Button
        onClick={handleJoin}
        disabled={isLoading}
        variant={"default"}
        className="ml-4 rounded-full"
      >
        {isLoading ? "Joining..." : "Join waitlist"}
      </Button>
    </div>
  );
};

export default Waitlist;
