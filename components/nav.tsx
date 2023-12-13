export default function Nav ()  {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mt-4 mb-4 text-center">
        <div className="title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <a href="/">
            <img src="/signature.svg" className="signature-logo mx-auto" alt="signature logo acevedo miguel" title="acevedo miguel" />
          </a>
        </div>

        <nav className="md:py-1 md:px-4 items-center text-base">
          <a href="/" className="mx-4 md:mx-8 hover:text-gray-700 text-sm">home</a>
          <a href="/resume" className="mx-4 md:mx-8 hover:text-black text-sm">resume</a>
          <a href="/contact" className="mx-4 md:mx-8 hover:text-black text-sm">contact</a>
        </nav>
      </div>
    </header>
  )
}