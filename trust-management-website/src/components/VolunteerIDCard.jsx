import React from "react";

const VolunteerIDCard = ({ volunteer }) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg border-2 border-amber-700 overflow-hidden">
      
     {/* Header */}
<div className="bg-green-100 py-3 px-3 flex items-center gap-3">
  
  {/* Logo */}
  <div className="w-14 h-13 flex items-center justify-center">
    <img 
      src="/logo.png"
      alt="Sri Ekadanta Charitable Trust Logo"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Trust Name */}
  <div className="text-left">
    <h2 className="text-amber-800 text-base font-semibold leading-tight">
      Sri Ekadanta Charitable Trust
    </h2>
    <p className="text-green-700 text-sm px-3 ">
      Volunteer Identification Card
    </p>
  </div>

</div>


      {/* Body */}
      <div className="p-4 flex flex-col items-center">
        
        {/* Photo */}
        <img
          src={volunteer.photo_url || "https://via.placeholder.com/120"}
          alt=""
          className="w-28 h-28 rounded-full border-4 border-stone-600 object-cover mb-3"
        />

        {/* Name */}
        <h3 className="text-lg font-semibold text-stone-700">
          {volunteer.full_name}
        </h3>

        {/* Volunteer ID */}
        <p className="text-lg text-stone-600 font-bold">
        ID: {volunteerId.split("-").pop()}
</p>


        {/* Details */}
        <div className="text-sm text-gray-700 w-full space-y-1">
          <p><strong>Email:</strong> {volunteer.email}</p>
          <p><strong>Phone:</strong> {volunteer.phone}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 text-center py-2 text-xs text-gray-600">
        Authorized Volunteer • Trust Verified
      </div>
    </div>
  );
};

export default VolunteerIDCard;
