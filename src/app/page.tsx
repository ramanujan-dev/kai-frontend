import PublicHeader from "@/components/header/PublicHeader";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <PublicHeader></PublicHeader>
      <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gray-50 text-gray-800">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 tracking-tight leading-tight">
            Your Financial Future, Simplified
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Welcome to a new era of banking. We offer secure, intuitive, and
            innovative financial solutions designed for the modern world. Manage
            your money, grow your wealth, and plan for your future with
            confidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Card 1: Online Banking */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">24/7 Online Access</h2>
            <p className="text-gray-600">
              Access your accounts anytime, anywhere. Our secure platform lets
              you view balances, transfer funds, and pay bills with ease from
              any device.
            </p>
          </div>

          {/* Card 2: Secure Transactions */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-5.618 4.016M2.944 12A11.955 11.955 0 014.016 5.618M12 2.944a11.955 11.955 0 017.056 9.056M12 21.056a11.955 11.955 0 01-7.056-9.056M21.056 12A11.955 11.955 0 0112 21.056M12 21.056a11.955 11.955 0 01-7.056-9.056"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Advanced Security</h2>
            <p className="text-gray-600">
              Your security is our top priority. We use cutting-edge encryption
              and multi-factor authentication to protect your personal
              information and transactions.
            </p>
          </div>

          {/* Card 3: Financial Tools */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-4">
              <svg
                className="h-8 w-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Smart Financial Tools</h2>
            <p className="text-gray-600">
              Gain insights into your spending with our intuitive analytics
              tools. Set budgets, track goals, and make informed decisions to
              reach your financial milestones.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
