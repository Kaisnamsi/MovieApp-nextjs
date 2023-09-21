import DefaultCard from "@/app/components/defaultCard";
import Link from "next/link";

const getLatestMovies = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const data = await fetch(
    `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=${formattedDate}`
  );
  const latestMovies = await data.json();
  return latestMovies.data;
};

export default async function HomeContent() {
  const latestMovies = await getLatestMovies();

  return (
    <>
      <div className="main-content">
        <div className="container">
          {/* Content Header */}
          <div className="row">
            <div className="col d-flex justify-content-between align-items-center">
              <div className="h3 text-white">New Releases</div>
              <div className="h5 view-more-style text-end">
                <Link href="/movies">View More</Link>
              </div>
            </div>
          </div>
          {/* Content */}
          {latestMovies && latestMovies.length !== 0 ? (
            <div className="row mt-4">
              <div className="col">
                <div className="row g-3 gy-3">
                  {latestMovies.map((movie, index) => {
                    if (index === 0) {
                      return (
                        <div className="col-xl-8 col-md-6">
                          <DefaultCard
                            genre={movie.Genre}
                            title={movie.Title}
                            duration={movie.Duration}
                            views={movie.Views}
                            bgImage={movie.Poster}
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div className="col-xl-4 col-md-6">
                          <DefaultCard
                            genre={movie.Genre}
                            title={movie.Title}
                            duration={movie.Duration}
                            views={movie.Views}
                            bgImage={movie.Poster}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
