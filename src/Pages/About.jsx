const About = () => {
  return (
    <div className="max-w-2xl mx-auto mt-20 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">
        Welcome to Our Task Management Website
      </h2>
      <p className="text-gray-700 text-lg">
        We are dedicated to providing a seamless and efficient task management
        experience for our users. Our mission is to simplify your workflow and
        boost productivity.
      </p>
      <div className="mt-8">
        <img
          src="https://i.ibb.co/L9PMcHR/pexels-rodrigo-santos-3888151.jpg"
          alt="Team at work"
          className="w-full rounded-lg shadow-md"
        />
        <p className="mt-4 text-gray-700">
          Our task management platform empowers teams to collaborate, organize
          tasks effectively, and stay on top of their projects. With intuitive
          features and real-time updates, we strive to make task management
          simple and enjoyable.
        </p>
        <p className="mt-4 text-gray-700">
          Stay in control of your tasks, enhance team communication, and achieve
          your project goals efficiently. Whether you're a small team or a large
          enterprise, our platform adapts to your needs, making task management
          simple and enjoyable.
        </p>
        <div className="max-w-2xl mx-auto mt-12 p-6">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">
            Key Features
          </h2>

          {/* Feature 1: Efficient Task Organization */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              1. Efficient Task Organization
            </h3>
            <p className="text-gray-700">
              Our intuitive interface allows you to organize tasks effortlessly.
              Categorize tasks, set priorities, and track progress with ease.
            </p>
          </div>

          {/* Feature 2: Collaborative Workspaces */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              2. Collaborative Workspaces
            </h3>
            <p className="text-gray-700">
              Foster teamwork by creating collaborative workspaces. Invite team
              members, assign tasks, and ensure everyone stays on the same page.
            </p>
          </div>

          {/* Feature 3: Priority-based Task Management */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              3. Priority-based Task Management
            </h3>
            <p className="text-gray-700">
              Prioritize tasks based on urgency and importance. Stay focused on
              what matters most and meet deadlines with confidence.
            </p>
          </div>

          {/* Feature 4: Real-time Updates and Notifications */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              4. Real-time Updates and Notifications
            </h3>
            <p className="text-gray-700">
              Receive real-time updates on task status, comments, and project
              milestones. Stay informed and connected, whether you're in the
              office or on the go.
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-12 p-6">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">
            Why Choose Our Task Management Platform?
          </h2>

          {/* Point 1: User-friendly Interface */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              User-friendly Interface
            </h3>
            <p className="text-gray-700">
              Our platform is designed with simplicity in mind. Enjoy a
              user-friendly experience that requires minimal training, allowing
              you to get started quickly.
            </p>
          </div>

          {/* Point 2: Adaptable to Your Needs */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Adaptable to Your Needs
            </h3>
            <p className="text-gray-700">
              Whether you're managing personal tasks, collaborating with a small
              team, or overseeing enterprise-level projects, our platform adapts
              to your unique needs.
            </p>
          </div>

          {/* Point 3: Enhanced Communication */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Enhanced Communication
            </h3>
            <p className="text-gray-700">
              Improve team communication with built-in messaging and commenting
              features. Discuss tasks, share updates, and ensure clear
              communication within your team.
            </p>
          </div>

          {/* Point 4: Achieve Project Goals Efficiently */}
          <div>
            <h3 className="text-xl  font-semibold text-gray-800">
              Achieve Project Goals Efficiently
            </h3>
            <p className="text-gray-700">
              Stay in control of your tasks and projects. Our platform empowers
              you to achieve your goals efficiently, providing the tools you
              need for successful project management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
