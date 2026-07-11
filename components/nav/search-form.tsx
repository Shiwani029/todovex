import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";

export default function SearchForm() {
    return (
        <form className="w-full max-w-sm">
            <div className="relative flex items-center">
                <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search tasks..."
                    className="w-full appearance-none bg-background pl-8 shadow-none h-9"
                />
            </div>
        </form>
    );
}
