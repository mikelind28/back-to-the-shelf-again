export default function MapEmbed({ embedSrc }: { embedSrc: string }) {
  return (
    <iframe
      src={embedSrc}
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
