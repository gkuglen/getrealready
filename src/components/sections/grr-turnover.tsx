import { LIVE_CITIES, listCities } from '@/lib/live-cities';

// Why pricing at turnover matters: in rent-controlled cities the move-in rent
// becomes the base every capped annual increase builds on. Replaced the
// template's generic "The Challenge" section on the homepage.
const GrrTurnover = () => {
  return (
    <section id="grr-turnover" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
        <h2 className="text-foreground mx-auto max-w-3xl text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-6xl">
          The rent you set at turnover is the rent you live with
        </h2>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base text-pretty sm:text-lg">
          In {listCities(LIVE_CITIES)}, many rentals are under rent control.
          When a unit turns over, you can generally reset the rent to market.
          Once a new tenant moves in, increases are capped each year. Price a
          unit a few hundred dollars low at turnover, and that gap can follow
          you for years.
        </p>
        <p className="text-foreground mx-auto mt-6 max-w-2xl text-base font-medium sm:text-lg">
          Get Rent Ready helps you get that number right before you list.
        </p>
      </div>
    </section>
  );
};

export default GrrTurnover;
