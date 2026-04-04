import { prisma } from "@/lib/prisma";
import ReservationForm from "@/app/components/ReservationForm";

export default async function VehiclesPage() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-ink text-off">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Veículos Disponíveis</h1>
        <p className="mt-4 text-off/80">
          Explore nossa coleção de Mercedes clássicas.
        </p>

        {cars.length === 0 ? (
          <p className="mt-8 text-off/60">Nenhum veículo disponível no momento.</p>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <div
                key={car.id}
                className="rounded-lg border border-off/10 bg-off/5 p-6 hover:bg-off/10 transition-colors"
              >
                <h2 className="text-xl font-semibold text-gold">{car.title}</h2>
                <p className="mt-2 text-sm text-off/70">Ano: {car.year}</p>
                <p className="mt-1 text-sm text-off/70">
                  Preço: R$ {(car.priceCents / 100).toLocaleString("pt-BR")}
                </p>
                {car.mileageKm && (
                  <p className="mt-1 text-sm text-off/70">
                    Quilometragem: {car.mileageKm.toLocaleString("pt-BR")} km
                  </p>
                )}
                {car.engine && (
                  <p className="mt-1 text-sm text-off/70">Motor: {car.engine}</p>
                )}
                {car.transmission && (
                  <p className="mt-1 text-sm text-off/70">
                    Transmissão: {car.transmission}
                  </p>
                )}
                {car.description && (
                  <p className="mt-3 text-sm text-off/80">{car.description}</p>
                )}
                <p className="mt-4 text-xs text-off/60 capitalize">
                  Status: {car.status.toLowerCase()}
                </p>
                {car.status === "AVAILABLE" && (
                  <ReservationForm carId={car.id} carTitle={car.title} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}