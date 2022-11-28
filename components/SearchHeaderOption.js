import React from "react";

export default function SearchHeaderOption({ title, Icon }) {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  );
}
