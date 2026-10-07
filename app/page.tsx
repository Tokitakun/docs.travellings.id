import { buttonVariants } from '@/components/ui/button'
import { PageRoutes } from '@/lib/pageroutes'
import { Link } from '@/lib/transition'

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Travellings.id</h1>
      <p className="mb-8 max-w-150 text-foreground sm:text-base">
        Temukan berbagai website independen dari Indonesia dalam satu perjalanan digital. Satu klik,
        satu situs baru, satu perjalanan baru.
      </p>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: 'px-6', size: 'lg' })}
        >
          Mulai
        </Link>
      </div>
    </section>
  )
}
