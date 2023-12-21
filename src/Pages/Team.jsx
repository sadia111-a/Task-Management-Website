const Team = () => {
  return (
    <div className="max-w-2xl mx-auto mt-20 p-6">
      <h2 className="text-4xl font-bold text-blue-500 mb-8">Meet Our Team</h2>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {/* Team Member 1 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/4R06Jzy/member1.png"
            alt="Team Member 1"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
          <p className="text-gray-600">Lead Developer</p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/WGWPRWw/member2.png"
            alt="Team Member 2"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Jane Smith
          </h3>
          <p className="text-gray-600">UI/UX Designer</p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/bmq3YNy/member3.png"
            alt="Team Member 3"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Alex Johnson
          </h3>
          <p className="text-gray-600">Marketing Specialist</p>
        </div>

        {/* Add more team members as needed */}
        {/* Team Member 4 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/MZdf7Rx/member4.png"
            alt="Team Member 4"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Emily Brown
          </h3>
          <p className="text-gray-600">Product Manager</p>
        </div>

        {/* Team Member 5 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/mczTjYq/user-2.png"
            alt="Team Member 5"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Michael Clark
          </h3>
          <p className="text-gray-600">Frontend Developer</p>
        </div>

        {/* Team Member 6 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/w0rVrBm/boy1.png"
            alt="Team Member 6"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Sophie Turner
          </h3>
          <p className="text-gray-600">Graphic Designer</p>
        </div>

        {/* Team Member 7 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/3F92r24/girl1.jpg"
            alt="Team Member 7"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Chris Evans
          </h3>
          <p className="text-gray-600">Backend Developer</p>
        </div>

        {/* Team Member 8 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/3BZH7PN/user-1.png"
            alt="Team Member 8"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Ava Johnson
          </h3>
          <p className="text-gray-600">Customer Support</p>
        </div>

        {/* Team Member 9 */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://i.ibb.co/nMdvHJq/user-3.png"
            alt="Team Member 9"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Daniel Lee
          </h3>
          <p className="text-gray-600">QA Tester</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
