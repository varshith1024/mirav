import React from "react";
import VolunteerIDCard from "../components/VolunteerIDCard";

const TestVolunteerID = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <VolunteerIDCard
        volunteer={{
          volunteer_id: "VOL-2025-0001",
          full_name: "K varshith kumar",
          email: "varshithkumar1010@gmail.com",
          phone: "8688043147",
          photo_url: ""
        }}
      />
    </div>
  );
};

export default TestVolunteerID;
