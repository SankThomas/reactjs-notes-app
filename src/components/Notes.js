export default function Notes({ items }) {
  return (
    <>
      <div>
        <h2 className="text-gray-600 text-2xl font-bold">
          {items.length} notes
        </h2>

        <div>
          {items.map(({ id, title }) => (
            <article key={id}>
              <p className="text-gray-600 text-xl">{title}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
