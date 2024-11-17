"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Party from "@/data/animations/party.json";
const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(100); // Start countdown from 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.reload(); // Reload page when countdown ends
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Clear interval if component unmounts
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <div className="text-center flex flex-col justify-center items-center ">
        <div className="mb-6">
          <h2 className="text-4xl font-normal">
            <span className="text-violet-500 font-semibold"> Phương Châu </span>
            xin cảm ơn Quý khách đã tin tưởng và để lại những chia sẻ về{" "}
            <span className="text-green-500 font-semibold underline">
              chất lượng trải nghiệm{" "}
            </span>
            dành cho chúng tôi
          </h2>
        </div>
        <div>
          <p className="mt-2 text-4xl leading-[3rem]">
            Kính chúc <br /> Quý khách nhiều sức khỏe!
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Lottie
          animationData={Party}
          loop={true}
          style={{ width: 100, height: 100 }}
        />
        <Lottie
          animationData={Party}
          loop={true}
          style={{ width: 100, height: 100 }}
        />
        <Lottie
          animationData={Party}
          loop={true}
          style={{ width: 100, height: 100 }}
        />
      </div>
      <div>
        <p className="text-xl">
          Trang sẽ tự động làm mới trong{" "}
          <span className="text-5xl font-extrabold text-blue-600">
            {countdown}
          </span>{" "}
          giây.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
