const tipSlider = document.getElementById("tip-slider");
const tipLabel = document.getElementById("tip-label");

tipSlider.addEventListener("input", function () {
  const tipValue = parseInt(tipSlider.value);

  if (tipValue >= 0 && tipValue <= 15) {
    setTipLabel("Bad", "bad");
  } else if (tipValue >= 16 && tipValue <= 29) {
    setTipLabel("Poor", "poor");
  } else if (tipValue >= 30 && tipValue <= 50) {
    setTipLabel("Good", "good");
  } else if (tipValue >= 51 && tipValue <= 80) {
    setTipLabel("Very Good", "very-good");
  } else {
    setTipLabel("Excellent", "excellent");
  }
});

function setTipLabel(label, className) {
  tipLabel.textContent = label;
  tipLabel.className = `tip-label ${className}`;
}
