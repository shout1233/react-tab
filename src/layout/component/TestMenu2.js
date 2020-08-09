import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Ref() {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20);

  console.log("age : " + age);

  useEffect(() => {
    prevAgeRef.current = age;
    console.log("useEffect prevAgeRef.current : " + prevAgeRef.current);
  }, [age]);

  console.log("prevAgeRef.current : " + prevAgeRef.current);
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? "same" : age > prevAge ? "older" : "younger";

  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이 변경
      </button>
    </div>
  );
}
