interface ITagsProps {
  tags: string[];
  className?: string;
}

export default function Tags({ tags, className }: ITagsProps) {
  return (
    <span>
      {tags?.map((tag, index) => (
        <p key={tag + index} className={`inline-block bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-600 mr-2 mb-2 ${className}`}>{tag}</p>
      ))}
    </span>
  )
}