export default function MapEmbed({
  embedSrc,
}: {
  embedSrc: string | undefined;
}) {
  const decodedSrc = embedSrc?.replace(/&#39;/g, "'").replace(/&amp;/g, "&");

  return (
    <iframe
      src={decodedSrc}
      width="fit"
      height="400"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="my-3"
    ></iframe>
  );
}
