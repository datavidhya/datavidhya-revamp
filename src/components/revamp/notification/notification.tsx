"use client";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Purchase {
  _id: string;
  studentName: string;
  courseName: string;
  date: string;
}

export const Notification = () => {
  const [purchaseQueue, setPurchaseQueue] = useState<Purchase[]>([]);
  const hasFetchedData = useRef(false);

  // Fetch data once when the component mounts
  useEffect(() => {
    const fetchAllPurchasedData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_baseUrl}api/all-Purchased`
        );
        setPurchaseQueue(res.data.data);
      } catch (error) {
        toast.error("Failed to fetch purchase data");
      }
    };

    if (!hasFetchedData.current) {
      fetchAllPurchasedData();
      hasFetchedData.current = true;
    }
  }, []);

  // Show notifications at intervals using the fetched data
  useEffect(() => {
    const showNextPurchase = () => {
      if (purchaseQueue.length > 0) {
        const nextPurchase = purchaseQueue[0];
        toast(
          (t) => (
            <div className="">
              <span className="-mt-2 text-lg font-semibold max-sm:text-[13px]">
                {nextPurchase.studentName}
              </span>{" "}
              Recently purchased{" "}
              <span className="text-lg font-semibold leading-3 text-neutral-400 max-sm:text-[12px]">
                {nextPurchase.courseName}
              </span>
              <div className="progress">
                <div className="progress-value"></div>
              </div>
            </div>
          ),
          {
            position: "bottom-right",
            duration: 3000, // Custom duration
            style: {
              borderRadius: "10px",
              background: "#1E1E1E",
              color: "#fff",
              padding: "16px",
            },
            className: "notification-toast",
          }
        );

        setPurchaseQueue((prevQueue) => prevQueue.slice(1));
      }
    };

    const interval = setInterval(showNextPurchase, 15000); // Show next purchase every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [purchaseQueue]);

  return (
    <div className="">
      <Toaster position="bottom-right" />
    </div>
  );
};
