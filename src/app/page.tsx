import Image from "next/image";
import Card from "./Component/Card";

export default function Home() {
  return (
<>
<div className="bg-red-500 flex flex-col items-center p-6">
  <h1 className="text-5xl font-bold mb-6 italic underline">Id card</h1>
  <Card name='laiba' rollno={4578} day='monday'></Card>
  <Card name='sabeen' rollno={3897} day='friday'></Card>
  <Card name='nain' rollno={7892} day='monday'></Card>
</div>
</>
  );
}
