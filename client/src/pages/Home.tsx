import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              🚗 AI-Powered Roadside Assistance
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Vehicle Trouble?
              <br />
              <span className="text-blue-200">
                RoadResQ is Here.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Get roadside assistance, find nearby mechanics and use AI
              to understand your vehicle problem quickly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/request-assistance"
                className="rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
              >
                Get Assistance
              </Link>

              <Link
                to="/ai-diagnosis"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                AI Diagnosis
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-white p-8 text-gray-900">
              <div className="text-6xl">🚘</div>

              <h2 className="mt-5 text-2xl font-bold">
                Need help on the road?
              </h2>

              <p className="mt-3 text-gray-600">
                Tell us what happened and RoadResQ helps connect you
                with the right assistance.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl bg-blue-50 p-4">
                  📍 Find nearby mechanics
                </div>

                <div className="rounded-xl bg-green-50 p-4">
                  🤖 AI vehicle diagnosis
                </div>

                <div className="rounded-xl bg-orange-50 p-4">
                  🛠️ Request roadside assistance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="font-semibold text-blue-600">ROADRESQ FEATURES</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Everything you need during a vehicle emergency
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "🤖",
              title: "AI Diagnosis",
              description:
                "Describe your vehicle problem and get an AI-powered preliminary diagnosis.",
            },
            {
              icon: "📍",
              title: "Find Mechanics",
              description:
                "Discover available mechanics who can help with your vehicle problem.",
            },
            {
              icon: "🚨",
              title: "Roadside Assistance",
              description:
                "Send an assistance request with your vehicle and current location.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl">{feature.icon}</div>

              <h3 className="mt-5 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              How RoadResQ Works
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              ["01", "Describe Problem", "Tell us what happened."],
              ["02", "AI Diagnosis", "Understand possible causes."],
              ["03", "Find Mechanic", "Connect with nearby help."],
              ["04", "Get Assistance", "Resolve your vehicle issue."],
            ].map(([number, title, description]) => (
              <div key={number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {number}
                </div>

                <h3 className="mt-4 font-bold">{title}</h3>

                <p className="mt-2 text-sm text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Don't let a vehicle problem stop your journey.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Create your RoadResQ account and get help whenever you need it.
        </p>

        <Link
          to="/register"
          className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-bold text-blue-600 hover:bg-blue-50"
        >
          Create Account
        </Link>
      </section>
    </div>
  );
};

export default Home;