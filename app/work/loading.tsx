export default function WorkLoading() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white animate-pulse">
      <div className="h-20 border-b border-white/5" />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 py-12 text-center flex flex-col items-center">
          <div className="h-6 w-32 rounded-full bg-white/10 mb-6" />
          <div className="h-16 w-3/4 max-w-xl rounded-2xl bg-white/10 mb-4" />
          <div className="h-6 w-1/2 max-w-md rounded-xl bg-white/5" />

          {/* Filter Pills Skeleton */}
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-9 w-24 rounded-full bg-white/5" />
            ))}
          </div>
        </div>

        {/* Grid Skeleton */}
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-3xl bg-white/5 border border-white/5"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
