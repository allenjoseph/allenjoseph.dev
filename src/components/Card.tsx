import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type Props = {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: object;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};

export default function Card(props: Props) {
  const { link, thumbnail, title, pubDate, description } = props;

  const imgSrc = thumbnail || getImageFromDescription(description);

  function getImageFromDescription(description: string) {
    const regex = /<img.*?src="(.*?)"/;
    const match = regex.exec(description);
    return match ? match[1] : '';
  }

  return (
    <div class="m-4 h-[320px] max-h-[320px] max-w-[260px] bg-white shadow-md hover:border-[#8539ff] rounded-md border border-gray-200">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        class="block h-[inherit] relative"
      >
        <img
          class="min-w-[258px] min-h-[180px] object-cover rounded-t-md"
          src={imgSrc}
          alt={title}
        />
        <p class="my-4 px-4 text-lg line-clamp-3">{title}</p>
        <small class="pl-4 mb-2 text-muted absolute bottom-0">
          {dayjs(pubDate).fromNow()}
        </small>
      </a>
    </div>
  );
}
