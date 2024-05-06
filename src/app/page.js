"use client";
import Counter from "@/modules/counter";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);

  return (
    <main>
      <ul>
        {list?.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
      <Counter setList={setList} />
    </main>
  );
}
