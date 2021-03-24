import React from "react";
import { useEffect } from "react";

const GoogleMaps = () => {
    function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }
  useEffect(() => {
    const addGoogleMapsScript = async () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"`;
      script.async = true;
      document.body.appendChild(script);
    };
    addGoogleMapsScript()
  });

  const loadMapHandler = () => {
      console.log("hello")

  }

  return <div>
      <div>Location</div>
      <div id="map"></div>
      <button onClick={() => loadMapHandler()}>Next Step</button>
  </div>;
};

export default GoogleMaps;

/*

 const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    addPayPalScript();
    if (!order || successPay || successDeliver) {
      dispatch({type:ORDER_PAY_RESET})
      dispatch({type:ORDER_DELIVER_RESET})
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }

    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, successPay,successDeliver, history, userInfo]);

*/
