export default function Nav ()  {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flow-root mt-4 mb-4">
        <div className="float-left title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <a href="/">
            <img src="/signature.svg" className="signature-logo" alt="signature logo acevedo miguel" title="acevedo miguel" />
          </a>
        </div>

        <nav className="md:ml-4 md:py-1 md:pl-4 float-right items-center text-base">
          <a href="/" className="mr-5 hover:text-gray-900">Home</a>
          <a href="/resume" className="mr-5 hover:text-gray-900">Resume</a>
        </nav>
      </div>
    </header>
  )
}