const features = [
  {
    title: "Smart Meal Logging",
    description:
      "Log meals using natural language and let AI estimate nutrition instantly."
  },

  {
    title: "Goal Tracking",
    description:
      "Track calories and macros against daily goals automatically."
  },

  {
    title: "AI Analysis",
    description:
      "Automatic nutrition insights powered by machine learning."
  }
];

function Features() {
  return (
    <section className="features">

      {features.map((feature, index) => (
        <div className="feature-card" key={index}>

          <h3>{feature.title}</h3>

          <p>{feature.description}</p>

        </div>
      ))}

    </section>
  );
}

export default Features;