window.addEventListener("load", () => {
  const decInput = document.querySelector("#dec-input");
  const binInput = document.querySelector("#bin-input");
  const octInput = document.querySelector("#oct-input");
  const hexInput = document.querySelector("#hex-input");

  const fromTo = (srcBase, dstBase) => (value) =>
    parseInt(value, srcBase).toString(dstBase).toUpperCase();

  const fromDecToBin = fromTo(10, 2);
  const fromDecToOct = fromTo(10, 8);
  const fromDecToHex = fromTo(10, 16);

  const fromBinToOct = fromTo(2, 8);
  const fromBinToDec = fromTo(2, 10);
  const fromBinToHex = fromTo(2, 16);

  const fromOctToBin = fromTo(8, 2);
  const fromOctToDec = fromTo(8, 10);
  const fromOctToHex = fromTo(8, 16);

  const fromHexToBin = fromTo(16, 2);
  const fromHexToOct = fromTo(16, 8);
  const fromHexToDec = fromTo(16, 10);

  const inputHandler = (event) => {
    console.log(event.target.value);
    const value = event.target.value || 0;

    if (event.target === decInput) {
      binInput.value = fromDecToBin(value);
      octInput.value = fromDecToOct(value);
      hexInput.value = fromDecToHex(value);
    }

    if (event.target === binInput) {
      octInput.value = fromBinToOct(value);
      decInput.value = fromBinToDec(value);
      hexInput.value = fromBinToHex(value);
    }

    if (event.target === octInput) {
      binInput.value = fromOctToBin(value);
      decInput.value = fromOctToDec(value);
      hexInput.value = fromOctToHex(value);
    }

    if (event.target === hexInput) {
      binInput.value = fromHexToBin(value);
      decInput.value = fromHexToDec(value);
      octInput.value = fromHexToOct(value);
    }
  };

  decInput.addEventListener("keyup", inputHandler);
  binInput.addEventListener("keyup", inputHandler);
  octInput.addEventListener("keyup", inputHandler);
  hexInput.addEventListener("keyup", inputHandler);
});
