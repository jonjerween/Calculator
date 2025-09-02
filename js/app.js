buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value).toLocaleString(); // format result with commas
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;

      // Try formatting only if it's a number expression
      let cleanValue = display.value.replace(/,/g, ""); // remove old commas
      if (!isNaN(cleanValue)) {
        display.value = Number(cleanValue).toLocaleString();
      }
    }
  });
});
