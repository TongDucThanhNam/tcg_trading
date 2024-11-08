import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

let name = "Thunderbolt Dragon";
let type = "Electric";
let image = "/placeholder.svg?height=300&width=220";
let description =
  "A powerful dragon that harnesses the power of lightning. Its thunderous roar can be heard for miles.";
let stats = { attack: 80, defense: 70, speed: 90 };
let rarity = "Rare";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card className="w-[220px] h-[360px] bg-gradient-to-br from-yellow-100 to-yellow-300 border-4 border-yellow-600 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-bold text-white">{name}</h2>
            <div className="bg-blue-500 text-white text-xs">{type}</div>
          </div>
        </CardHeader>
        <CardBody className="p-2">
          <div className="mb-2 bg-white rounded-lg overflow-hidden">
            <Image
              src={
                "https://utfs.io/f/tgebfwNX6CNVwrPdICBy8KbGCkhHPwSZWXsnzu4eNDli2gcA"
              }
              alt="Picture of the author"
              fill
            />
          </div>
          <p className="text-xs text-gray-700 mb-2 h-[60px] overflow-y-auto">
            {description}
          </p>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="font-semibold">Attack</span>
              <span>{stats.attack}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Defense</span>
              <span>{stats.defense}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Speed</span>
              <span>{stats.speed}</span>
            </div>
          </div>
        </CardBody>
        <CardFooter className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 absolute bottom-0 w-full">
          <div className="bg-white text-yellow-800 border-yellow-800 text-xs">
            {rarity}
          </div>
        </CardFooter>
      </Card>

      {/* asda */}
    </section>
  );
}
