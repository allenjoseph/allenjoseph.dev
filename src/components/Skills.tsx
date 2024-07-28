import { useData } from '../utils/useData';

export default function Skills() {
  const data = useData();

  if (!data) return null;

  return (
    <section class="container grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.sections.skills.items.map((i) => (
        <article
          class="text-center p-4 rounded-md shadow-md"
          style={`color: ${i.textColor}; background: ${i.background}`}
        >
          <h3 class="text-2xl font-semibold">{i.name}</h3>
        </article>
      ))}
    </section>
  );
}
