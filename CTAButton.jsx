function CTAButton() {
  function handleClick() {
    alert("Welcome to Smart Meal Tracker!");
  }

  return (
    <div className="button-container">

      <button
        className="cta-button"
        onClick={handleClick}
      >
        Visit the App
      </button>

    </div>
  );
}

export default CTAButton;