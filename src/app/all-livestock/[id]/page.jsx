import React from "react";

const livestockDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return <div>livestock Details Page</div>;
};

export default livestockDetailsPage;
