"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

function InputField() {
  const placeholders = [
    "Enter your product's name",
    "Describe your promotion (e.g., 50% Off)",
    "Specify the theme (e.g., modern, vintage)",
    "Enter a call to action (e.g., Shop Now)",
    "Enter about text color (e.g., white, black)",
    "List key features of your product...",
    "What season or occasion is this for?",
    "What pricing information should be included?"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-full w-[48%] flex justify-center items-end">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default InputField;