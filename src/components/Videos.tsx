import { useData } from '../utils/useData';

export default function Videos() {
  const data = useData();

  return (
    <section class="container grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {!data
        ? Array.from({ length: 3 }, (_, i) => (
            <div class="bg-white shadow-md rounded-md border border-gray-200">
              <div class="h-[290px] bg-slate-100" />
              <div class="h-11 p-4">
                <div class="h-3 bg-slate-200 rounded animate-pulse" />
              </div>
            </div>
          ))
        : data.sections.articles.items.map((i) => (
            <div class="cursor-pointer bg-white shadow-md hover:border-[#8539ff] rounded-md border border-gray-200">
              <a href={i.url} target="_blank" rel="noopener noreferrer">
                <img class="bg-center rounded-t-md" src={i.img} alt={i.title} />
                <h4 class="p-2 text-center text-xl">{i.title}</h4>
              </a>
            </div>
          ))}
    </section>
  );
}
