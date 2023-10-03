import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${montserrat.className} flex min-h-screen flex-col items-center pt-24 pb-12`}
    >
      <Header />
      {children}
      <div className="flex items-center mt-12">
        &copy; {new Date().getFullYear()} Open Martial Path Institute, LLC
      </div>
    </main>
  );
}

const Header = () => {
  return (
    <div className="px-24 mb-12">
      <div className="absolute flex top-5 right-5 sm:right-10 gap-4 text-lg justify-center align-center">
        <Link
          className="flex items-center hover:text-yellow-500 dark:hover:text-yellow-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="flex items-center hover:text-yellow-500 dark:hover:text-yellow-300"
          href="/about"
        >
          About
        </Link>
        <a
          className="flex items-center hover:text-yellow-500 dark:hover:text-yellow-300"
          href="https://www.facebook.com/OpenMartialPathInstituteLLC"
        >
          Facebook
        </a>
        <a href="mailto:info@ompinstitute.com">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1 px-2 rounded-lg">
            Contact Us
          </button>
        </a>
      </div>
      <div className="flex items-center justify-center gap-4 mb-8 sm:flex lg:hidden">
        <Image
          className="w-1/2 sm:w-1/4"
          src="/yuen-sou-fa-logo.png"
          alt="Yuen Sou Fa Logo"
          width={200}
          height={200}
          priority
        />
        <Image
          className="w-1/2 sm:w-1/4"
          src="/sun-do-kwan-logo.png"
          alt="Sun Do Kwan Logo"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="flex items-center justify-center mb-8 gap-4 flex-col lg:flex-row">
        <Image
          className="hidden lg:block"
          src="/yuen-sou-fa-logo.png"
          alt="Yuen Sou Fa Logo"
          width={150}
          height={150}
          priority
        />

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mb-4">
            Open Martial Path Institute
          </h1>
          <h2 className="text-2xl font-bold text-center font-normal">
            A Modern Approach to an Ancient Philosophy
          </h2>
        </div>

        <Image
          className="hidden lg:block"
          src="/sun-do-kwan-logo.png"
          alt="Sun Do Kwan Logo"
          width={150}
          height={150}
          priority
        />
      </div>

      <div className="flex items-center justify-center gap-4 mb-8">
        <a href="mailto:info@ompinstitute.com">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-semibold py-2 px-4 rounded-lg">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};
