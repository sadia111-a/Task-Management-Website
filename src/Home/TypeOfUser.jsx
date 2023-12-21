const TypeOfUser = () => {
  const userTypes = [
    {
      title: "Developers",
      description:
        "Streamline project collaboration and task management for efficient development workflows.",
    },
    {
      title: "Corporate Professionals",
      description:
        "Enhance organizational productivity with a centralized platform for managing tasks and projects.",
    },
    {
      title: "Bankers",
      description:
        "Facilitate secure task coordination and document sharing for financial transactions and projects.",
    },
    {
      title: "Freelancers",
      description:
        "Organize tasks, projects, and deadlines independently while maintaining clear communication with clients.",
    },
    {
      title: "Students",
      description:
        "Manage coursework, assignments, and group projects collaboratively for academic success.",
    },
    {
      title: "Small Business Owners",
      description:
        "Improve team coordination and task delegation for streamlined business operations.",
    },
    {
      title: "Event Planners",
      description:
        "Coordinate and manage tasks related to event planning, ensuring seamless execution.",
    },
    {
      title: "Creative Teams",
      description:
        "Facilitate collaboration among designers, writers, and artists for creative project success.",
    },
  ];

  return (
    <section className="bg-gray-100 p-10">
      <h2 className="text-3xl font-bold mb-6">Who Benefits from TaskFlow?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {userTypes.map((userType, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-3">{userType.title}</h3>
            <p className="text-gray-700">{userType.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypeOfUser;
