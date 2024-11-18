import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface ActorProps {
  initialAnswer: string[];
  onAnswerChange: (answer: string[]) => void;
}

const Actor = ({ initialAnswer, onAnswerChange }: ActorProps) => {
  const [room, setRoom] = React.useState<string[]>([]);

  React.useEffect(() => {
    setRoom(initialAnswer);
  }, [initialAnswer]);
  const handleRoomChange = (value: string) => {
    setRoom(
      room.includes(value)
        ? room.filter((item) => item !== value)
        : [...room, value]
    );
    onAnswerChange(
      room.includes(value)
        ? room.filter((item) => item !== value)
        : [...room, value]
    );
  };
  return (
    <div>
      <div className="mb-3">
        <Label className="text-2xl text-violet-500 font-semibold">
          Vui lòng chọn phòng thực hiện
        </Label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item) => (
          <div className="flex flex-col items-center justify-center" key={item}>
            <div className="flex gap-3 w-full px-3 mb-1 items-center ">
              <Checkbox
                id={item.toString()}
                checked={room.includes(item.toString())}
                onCheckedChange={() => handleRoomChange(item.toString())}
              />
              <label
                htmlFor={item.toString()}
                className="text-xl cursor-pointer"
              >
                Phòng {item}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actor;
