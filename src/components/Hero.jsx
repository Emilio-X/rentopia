// src/components/Hero.jsx
export default function Hero() {
    return (
      <section
        className="
          relative left-1/2 right-1/2
          w-screen -translate-x-1/2
          bg-gradient-to-r from-blue-500 to-purple-600 text-white
        "
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold">Welcome to Rentopia</h1>
          <p className="mt-2 text-lg">
            Rent anything you need, anywhere you are.
          </p>
        </div>
      </section>
    );
  }
  