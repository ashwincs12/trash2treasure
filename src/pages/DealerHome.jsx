import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function DealerHome() {
  const [dealerDetails, setDealerDetails] = useState(null);
  const [pickupRequests, setPickupRequests] = useState([]);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user;
        fetchDealerDetails(uid);
      } else {
        setDealerDetails(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const fetchDealerDetails = (uid) => {
    const db = getDatabase();
    const dealerRef = ref(db, `dealers/${uid}`);

    onValue(dealerRef, (snapshot) => {
      const dealerData = snapshot.val();
      setDealerDetails(dealerData);

      // Fetch pickup requests after getting dealer details
      fetchPickupRequests(dealerData.businessName);
    });
  };

  const fetchPickupRequests = (businessName) => {
    const db = getDatabase();
    const pickupRequestsRef = ref(db, "pickup requests");

    onValue(pickupRequestsRef, (snapshot) => {
      const pickupRequestsData = snapshot.val();
      const pickupRequestsArray = pickupRequestsData
        ? Object.values(pickupRequestsData)
        : [];

      // Filter pickup requests by dealer business name
      const filteredPickupRequests = pickupRequestsArray.filter(
        (request) => request.cdealer === businessName
      );

      setPickupRequests(filteredPickupRequests);
    });
  };

  const handlePickupComplete = (pickupId) => {
    const db = getDatabase();
    const pickupRequestRef = ref(db, `pickup requests/${pickupId}`);

    remove(pickupRequestRef)
      .then(() => {
        console.log("Pickup completed");
        // Refresh the pickup requests after deletion
        fetchPickupRequests(dealerDetails.businessName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hhomepage">
      <Navbar />
      <div>
        {dealerDetails ? (
          <div>
            <center>
              <h3 className="text-5xl text-teal-400 p-10">
                Welcome {dealerDetails.businessName}
              </h3>
            </center>

            <div className="text-xl p-3">
              <h3>
                Proprietor: <b>{dealerDetails.contactPerson}</b>
              </h3>
              <h3>
                Location: <b>{dealerDetails.city}</b>
              </h3>
            </div>

            <center>
              <p className="text-2xl p-3">
                <u>Your pickup requests</u>
              </p>
            </center>

            {pickupRequests.length > 0 ? (
              <ul>
                {pickupRequests.map((request) => (
                  <div className="p-3" key={request.pickupId}>
                    <li className="bg-cyan-100 p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <p>
                          Customer Name: <b>{request.cname}</b>
                        </p>
                        <p>
                          Phone Number: <b>{request.cphone}</b>
                        </p>
                        <p>
                          Address: <b>{request.caddress}</b>
                        </p>
                        <p>Estimated Weight: {request.cweight} KG</p>
                      </div>
                      <div>
                        Time Slot: <b>{request.ctime}</b>
                      </div>
                      <button
                        onClick={() => handlePickupComplete(request.pickupId)}
                        className="bg-green-500 text-white px-4 py-2 mt-3 rounded"
                      >
                        Pick-up
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
            ) : (
              <div>
                <center>
                  <img src="nopickup.jpg" width={100} alt="" /> <br />
                  <p className="text-red-600 font-bold">
                    Sorry, no pending requests :-(
                  </p>
                </center>
              </div>
            )}
          </div>
        ) : (
          <p>Loading dealer details...</p>
        )}
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
}
