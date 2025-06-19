const FavoriteSong = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/4JGKZS7h4Qa16gOU3oNETV?utm_source=generator&theme=0"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
  );
};

export default FavoriteSong;
