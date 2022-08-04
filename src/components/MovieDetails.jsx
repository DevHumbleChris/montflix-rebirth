export default function MovieDetails() {
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/3TzDP1Jt90tRkVWC3DXGKgNflkh.jpg")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h3 className="banner_title">fdfd</h3>
          <div className="buttons">
            <button className="banner_button">Play trailer</button>
          </div>
        </div>
      </div>
    </>
  );
}
