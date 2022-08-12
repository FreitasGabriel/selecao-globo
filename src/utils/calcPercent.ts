export const calcPercent = (value: number) => {
    const per = 100 / value;
    const teste = document.querySelector("span.bar") as HTMLSpanElement;
    teste.style.transform = `rotate(${135 + 180 / per}deg)`;
  };
