
import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

export function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <Input 
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
