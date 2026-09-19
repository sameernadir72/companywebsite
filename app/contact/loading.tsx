export default function ContactLoading() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white animate-pulse">
      <div className="h-20 border-b border-white/5" />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 py-10 text-center flex flex-col items-center">
          <div className="h-6 w-36 rounded-full bg-white/10 mb-6" />
          <div className="h-16 w-3/4 max-w-xl rounded-2xl bg-white/10 mb-4" />
          <div className="h-6 w-1/2 max-w-md rounded-xl bg-white/5" />
        </div>

        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="h-64 rounded-[28px] bg-white/5 border border-white/5" />
            <div className="h-64 rounded-[28px] bg-white/5 border border-white/5" />
          </div>
          <div className="lg:col-span-7">
            <div className="h-[600px] rounded-[32px] bg-white/5 border border-white/5" />
          </div>
        </div>
      </main>
    </div>
  );
}
