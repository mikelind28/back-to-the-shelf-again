export default function MapEmbed({
  embedSrc,
}: {
  embedSrc: string | undefined;
}) {
  const decodedSrc = embedSrc?.replace(/&#39;/g, "'").replace(/&amp;/g, "&");

  return (
    <iframe
      src={decodedSrc}
      width="full"
      height="300"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="xs:h-85 my-3 max-w-3xl rounded-sm outline outline-stone-400 sm:my-4 lg:h-full lg:max-w-xl"
    ></iframe>
  );
}
