// Simple placeholder component to test imports
interface SearchBoxProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBox({ onSearch, placeholder }: SearchBoxProps) {
  return <div>Search placeholder</div>;
}