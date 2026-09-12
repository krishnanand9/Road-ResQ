const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              🚗 RoadResQ
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              AI-powered roadside assistance platform that
              connects vehicle owners with nearby mechanics.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400">
              <a href="/">Home</a>
              <a href="/find-mechanic">Find Mechanic</a>
              <a href="/ai-diagnosis">AI Diagnosis</a>
              <a href="/request-assistance">Get Assistance</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>

            <p className="mt-3 text-sm text-gray-400">
              Email: support@roadresq.com
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Emergency assistance available 24/7.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RoadResQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;