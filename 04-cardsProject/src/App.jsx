import React from "react";

import Card from "./Components/Card";
import { Car } from "lucide-react";

const App = () => {
  const jobs = [
    {
      company: "Amazon",
      logo: "https://imgs.search.brave.com/8KgsRJzLVNqFn5YGp7ZkB16L1Znegr72N45yDZpUzKg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc",
      posted: "5 days ago",
      title: "Senior UI/UX Designer",
      jobType: "Part-Time",
      level: "Senior-Level",
      salary: "$120/hr",
      location: "Mumbai, India",
    },

    {
      company: "Google",
      logo: "https://imgs.search.brave.com/7hQL9-LkzkUIAJx4ae6AfzGx_uQJN51nGFQCoABG-38/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0x/MTc1MzEyLnBuZz9m/PXdlYnAmdz0xMjg",
      posted: "2 days ago",
      title: "Frontend Developer",
      jobType: "Full-Time",
      level: "Mid-Level",
      salary: "$100/hr",
      location: "Bangalore, India",
    },

    {
      company: "Microsoft",
      logo: "https://imgs.search.brave.com/B_LAWqHmkwX485vwqNM0lnC9EbAcEsyU43SIok2wPDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDkvTWljcm9zb2Z0/LUVtYmxlbS03MDB4/Mzk0LmpwZw",
      posted: "1 day ago",
      title: "Software Engineer",
      jobType: "Full-Time",
      level: "Senior-Level",
      salary: "$130/hr",
      location: "Hyderabad, India",
    },

    {
      company: "Netflix",
      logo: "https://imgs.search.brave.com/nkE7sNRariZscy0JC2EZS0SaLnJr567dpKj5XKxhXbk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzY5OC9zbWFs/bC9uZXRmbGl4LWxv/Z28tbmV0ZmxpeC1p/Y29uLWZyZWUtZnJl/ZS12ZWN0b3IuanBn",
      posted: "3 days ago",
      title: "Product Designer",
      jobType: "Full-Time",
      level: "Senior-Level",
      salary: "$140/hr",
      location: "Mumbai, India",
    },

    {
      company: "Meta",
      logo: "https://imgs.search.brave.com/7Hp4xsjnW2YZPUS88Fb7mkme23Jq0WCouF5iD3FRDNM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/OTEwLzU4OC9zbWFs/bC9tZXRhLWxvZ28t/bWVkaWEtc2hhcmlu/Zy1wbGF0Zm9ybS1m/cmVlLXBuZy5wbmc",
      posted: "4 days ago",
      title: "React Developer",
      jobType: "Full-Time",
      level: "Mid-Level",
      salary: "$110/hr",
      location: "Bangalore, India",
    },

    {
      company: "Apple",
      logo: "https://imgs.search.brave.com/tFiV6AzclY4Hn9MT3NfR9BdvESgJ9CDy9-daDlPNrnU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FwcGxlLWxvZ28t/cG5nL2FwcGxlLWxv/Z28taWNvbi0xNi5w/bmc",
      posted: "6 days ago",
      title: "UI/UX Designer",
      jobType: "Part-Time",
      level: "Junior-Level",
      salary: "$90/hr",
      location: "Chennai, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((job, key) => (
        <Card
          key={key}
          company={job.company}
          logo={job.logo}
          posted={job.posted}
          title={job.title}
          jobType={job.jobType}
          level={job.level}
          salary={job.salary}
          location={job.location}
        />
      ))}
    </div>
  );
};

export default App;
