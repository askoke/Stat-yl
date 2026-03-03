import { useState } from "react";

export const Questionaire = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Selected option:", selectedOption);
    };

  return (
    <div>
      <h2>1. Milline Linn On Pealinn?</h2>
      <form onSubmit={submitHandler}>
        <label>
          <input
            type="radio"
            name="Option"
            value="Tartu"
            checked={selectedOption === "Tartu"}
            onChange={() => setSelectedOption("Tartu")}
          />
          Tartu
        </label>

        <label>
          <input
            type="radio"
            name="Option"
            value="Tallinn"
            checked={selectedOption === "Tallinn"}
            onChange={() => setSelectedOption("Tallinn")}
          />
          Tallinn
        </label>

        <label>
          <input
            type="radio"
            name="Option"
            value="Narva"
            checked={selectedOption === "Narva"}
            onChange={() => setSelectedOption("Narva")}
          />
          Narva
        </label>

        <button type="submit">Järgmine</button>
      </form>
    </div>
  )
}
