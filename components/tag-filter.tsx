interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

const TagFilter = ({ tags, selectedTag, onTagSelect }: TagFilterProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium text-gray-700">Filter by tag:</span>
        
        <button
          onClick={() => onTagSelect(null)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            selectedTag === null
              ? 'bg-sky-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          type="button"
        >
          All Posts
        </button>

        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedTag === tag
                ? 'bg-sky-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;