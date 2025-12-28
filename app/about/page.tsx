export const metadata = {
  title: 'About',
  description: 'Learn more about me and my background.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Welcome to my personal website! I'm passionate about technology, learning, and sharing
            knowledge through writing and building projects.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            This website serves as a hub for my blog posts, portfolio projects, book collection, and
            other interests. Feel free to explore and reach out if you'd like to connect!
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Web Development</li>
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Interests</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Software Engineering</li>
                <li>Reading & Writing</li>
                <li>Open Source</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'd love to hear from you! Whether you have questions, collaboration ideas, or just want
            to say hello, feel free to reach out.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            You can find me on various platforms or reach out through the contact form below.
          </p>
        </section>
      </div>
    </div>
  );
}

