export default function CaseStudyLoading() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#040C20] text-white animate-pulse">
      <div className="h-20 border-b border-white/5" />

      <main className="flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-32">
        {/* Breadcrumb Skeleton */}
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pt-4 pb-8">
          <div className="h-9 w-44 rounded-full bg-white/5" />
        </div>

        {/* Hero Section Skeleton */}
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 pb-16">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3">
              <div className="h-6 w-24 rounded-full bg-white/10" />
              <div className="h-6 w-32 rounded-full bg-white/5" />
            </div>

            <div className="h-16 sm:h-20 w-3/4 max-w-2xl rounded-2xl bg-white/10" />
            <div className="h-6 w-1/2 max-w-lg rounded-xl bg-white/5" />

            {/* Metrics Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-28 rounded-2xl bg-white/5 border border-white/5" />
              ))}
            </div>

            {/* Hero Image Skeleton */}
            <div className="mt-8 aspect-[16/9] w-full rounded-3xl bg-white/5 border border-white/5" />
          </div>
        </div>
      </main>
    </div>
  );
}
