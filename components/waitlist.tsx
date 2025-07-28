"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const Waitlist = () => {
    const apiServerBaseUrl = process.env.NEXT_PUBLIC_API_SERVER_BASE_URL || "http://95.111.232.142:8000";
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleJoin = async () => {
        if (!email) return;

        setIsLoading(true);
        try {
            const res = await fetch(`${apiServerBaseUrl}/api/waitlist/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                },
                body: JSON.stringify({ 'email': email }),
            });

            if (!res.ok) {
                throw new Error("Failed to join waitlist");
            }
            const data = await res.json();
            if (!data.message || data.message !== "Email stored successfully") {
                throw new Error("Failed to join waitlist");
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Successfully joined waitlist");
            alert("Thank you for joining the waitlist, we will notify you when the service is available!");
        } catch (error) {
            console.error(error);
            alert("An error occurred while joining the waitlist. Please try again later.");
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
                onKeyDown={(e) => { if (e.key === "Enter") handleJoin(); }}
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
