interface PostCardProps {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
}
export default function PostCard(props: PostCardProps) {
  return (
    <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-5">
      <span className="text-[#4A5568]">{props.date}</span>
      <h3 className="text-[#556AF3] text-2xl font-bold">{props.title}</h3>
      <p className="text-[#4A5568] line-clamp-2">{props.description}</p>
      <div>
        {props.tags.map((tag, index) => (
          <p key={tag + index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</p>
        ))}
      </div>
    </div>
  )
}