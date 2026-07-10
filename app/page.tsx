"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="text-4xl font-bold">TodoVex</h1>
      <div className="w-full max-w-md mt-6">
        <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
        {tasks === undefined ? (
          <p className="text-muted-foreground">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="text-muted-foreground">No tasks found. Add some!</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="flex items-center gap-2 p-3 border rounded-lg bg-card text-card-foreground shadow-sm"
              >
                <span className={task.isCompleted ? "line-through text-muted-foreground" : ""}>
                  {task.text}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}