export default function ServicesLoading() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white animate-pulse">
      <div className="h-20 border-b border-white/5" />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 py-12 text-center flex flex-col items-center">
          <div className="h-6 w-40 rounded-full bg-white/10 mb-6" />
          <div className="h-16 w-3/4 max-w-xl rounded-2xl bg-white/10 mb-4" />
          <div className="h-6 w-1/2 max-w-md rounded-xl bg-white/5" />
        </div>

        <div className="w-full bg-[#07112C] py-20 border-y border-white/10">
          <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 flex flex-col gap-16">
            {[1, 2].map((i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="aspect-[16/11] rounded-[28px] bg-white/5 border border-white/5" />
                <div className="flex flex-col gap-4">
                  <div className="h-6 w-28 rounded-full bg-white/10" />
                  <div className="h-10 w-3/4 rounded-xl bg-white/10" />
                  <div className="h-20 w-full rounded-xl bg-white/5" />
                  <div className="h-32 w-full rounded-2xl bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
