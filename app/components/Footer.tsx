export default function Footer() {
  return (
    <div className="footer w-full text-black">
      <div className="footer-container h-auto rounded-4xl p-6">
        <div className="max-w-7xl m-auto py-15">
          <h2 className="text-4xl sm:text-5xl font-bold leading-10sm:leading-15 text-center mb-10">
            Ready to bring your product to life? <br /> Let&apos;s dive in and
            make it happen together.
          </h2>
          <p className="flex flex-row gap-2 items-center text-2xl justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 self-start"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            <a href="mailto:isaiah.quindo@gmail.com">isaiah.quindo@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
