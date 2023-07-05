export const BASE_URL = "http://localhost:4000";
export const AddressInput = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    errorMessage: "Please fill the name!",
    required: true,

  },
  {
    id: 2,
    name: "address",
    type: "text",
    placeholder: "Enter house no., street, colony",
    label: "Address",
    errorMessage: "Please fill the address!",
    required: true,
  },
  {
    id: 3,
    name: "city",
    type: "text",
    placeholder: "Enter city",
    label: "City",
    errorMessage: "Please fill the city!",
    required: true,
  },
  {
    id: 4,
    name: "state",
    type: "text",
    placeholder: "Enter state",
    label: "State",
    errorMessage: "Please fill the state!",
    required: true,
  },
  {
    id: 5,
    name: "pinCode",
    type: "text",
    placeholder: "Enter zip code",
    label: "PinCode",
    errorMessage: "Please enter zipcode!",
    required: true,
  },
  {
    id: 6,
    name: "mobileNo",
    type: "text",
    placeholder: "Enter mobile Number",
    label: "MobileNo",
    errorMessage: "Please enter valid mobileNo!",
    required: true,
    pattern: "^[0-9]{10}$"
  },
]

export const DummyAddress = {
  name: "Krishna Gite",
  address: "B. No. 10, Prerananagar, Adarsh Colony, Maldad Road East , Sangamner",
  city: "Mumbai",
  state: "Maharashtra",
  pinCode: "173468",
  mobileNo: "8752388912"

}
export const getInitials = (name="") => {
    const words = name?.split(' ');
    let initials = '';
    words.forEach((word) => {
      if (word.length > 0) {
        initials += word.charAt(0).toUpperCase();
      }
    });
    return initials.substring(0, 2);
  }
  

  // distance betwwn two coordinates
 export const distanceInMeters = ([lat1, lon1]=[], [lat2, lon2]=[]) => {
    const R = 6371e3; // radius of the earth in meters
    const φ1 = lat1 * Math.PI / 180; // convert to radians
    const φ2 = lat2 * Math.PI / 180; // convert to radians
    const Δφ = (lat2 - lat1) * Math.PI / 180; // difference in latitudes
    const Δλ = (lon2 - lon1) * Math.PI / 180; // difference in longitudes
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    
  if (d < 1000) {
    return `${Math.floor(d)} M`;
  } else {
    return `${(d / 1000).toFixed(2)} KM`;
  }
  };
  
export const BadgeText = rating=> rating>=4 ?"Excellent" : rating>= 3 ? "Avarage " : "Poor";

export const formatCommentTime = (timestamp) => {
  const now = new Date();
  const commentTime = new Date(timestamp);
  const diffInMs = now.getTime() - commentTime.getTime();
  const diffInSec = Math.round(diffInMs / 1000);
  const diffInMin = Math.round(diffInSec / 60);
  const diffInHr = Math.round(diffInMin / 60);
  const diffInDay = Math.round(diffInHr / 24);
  const diffInWeek = Math.round(diffInDay / 7);
  const diffInMonth = Math.round(diffInDay / 30);
  const diffInYear = Math.round(diffInDay / 365);

  if (diffInSec < 60) {
    return "just now";
  } else if (diffInMin < 60) {
    return `${diffInMin} minute${diffInMin !== 1 ? 's' : ''} ago`;
  } else if (diffInHr < 24) {
    return `${diffInHr} hour${diffInHr !== 1 ? 's' : ''} ago`;
  } else if (diffInDay < 7) {
    return `${diffInDay} day${diffInDay !== 1 ? 's' : ''} ago`;
  } else if (diffInWeek < 4) {
    return `${diffInWeek} week${diffInWeek !== 1 ? 's' : ''} ago`;
  } else if (diffInMonth < 12) {
    return `${diffInMonth} month${diffInMonth !== 1 ? 's' : ''} ago`;
  } else {
    return `${diffInYear} year${diffInYear !== 1 ? 's' : ''} ago`;
  }
}


export const calculateTotalPrice=(selectedServices, servicePrices)=>{
  const selectedServicePrices = selectedServices.map(
    (service) =>
      servicePrices.find((s) => s.serviceType === service)?.price || 0
  );
  const totalPrice = selectedServicePrices.reduce(
    (total, price) => total + price,
    0
  );
  return totalPrice;
}

export const calculateItemPrice = (services) => {
  return services.reduce((acc, service) => {
    return acc + service.price;
  }, 0);
};

export const TotalPrice = (arr) => {
  return arr?.reduce((acc, { services, quantity }) => {
    return acc + calculateItemPrice(services) * quantity;
  }, 0);
};

export const formatDateTime  = (timeString) => {
  const date = new Date(timeString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours > 12 ? hours - 12 : hours;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

  return `${formattedDate} / ${formattedTime}`;
};




  export const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload =()=> resolve(true);
      script.onerror=()=>reject(false);
      document.head.appendChild(script);
    });
  };

  export const normalizeName = (name) => {
    const specialChars = /[-_.,]/g; // Regular expression to match special characters
  
    // Convert to lowercase and remove special characters
    const normalizedName = name.toLowerCase().replace(specialChars, '');
  
    return normalizedName;
  };

// export  const fetchLocation = async (latitude, longitude) => {
//     const apiKey = 'YOUR_API_KEY';
//     const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&pretty=1`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       const city = data.results[0].components.city;
//       const country = data.results[0].components.country;
//       console.log(city, country);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   fetchLocation(51.5074, -0.1278); 