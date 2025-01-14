import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 h-[calc(100vh-30rem)]">
      <div className="container px-4 mx-auto text-center">
        <img
          className="mb-4 mx-auto md:max-w-md"
          src="metis-assets/illustrations/error2.png"
          alt=""
        />
        <span className="text-4xl text-primary font-bold font-heading">
          Error 404
        </span>
        <h2 className="mb-2 text-4xl font-bold font-heading">
          Something went wrong!
        </h2>
        <p className="mb-6 text-blueGray-400">
          Sorry, but we are unable to open this page.
        </p>
        <div>
          <Link
            className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-primary hover:bg-primary rounded"
            href="/"
          >
            Go back to Homepage
          </Link>
          <Link
            className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded"
            href="#"
          >
            Try Again
          </Link>
        </div>
      </div>
    </section>
  );
}
