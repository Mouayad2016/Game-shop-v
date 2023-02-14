import React from "react";

const items = [
  {
    Name: "Pc",
    sub: [
      {
        Name: "ex1",
      },
      {
        Name: "ex2",
      },
      {
        Name: "ex3",
      },
    ],
  },
  {
    Name: "XBOX",
    sub: [
      {
        Name: "ex1",
      },
      {
        Name: "ex2",
      },
      {
        Name: "ex3",
      },
    ],
  },
  {
    Name: "Others",
    sub: [
      {
        Name: "ex1",
      },
      {
        Name: "ex2",
      },
      {
        Name: "ex3",
      },
    ],
  },
  {
    Name: "Others",
    sub: [
      {
        Name: "ex1",
      },
      {
        Name: "ex2",
      },
      {
        Name: "ex3",
      },
    ],
  },
];

const SideBar = () => {
  return (
    <div class="side_bar">
      <div class="side_bar_items">
        <form>
          <label>
            <input type="searsh" name="name" placeholder="Searsh" />
          </label>
        </form>
        {items.map((e) => (
          <ul class="side_bar_categories">
            {e.Name}
            {e.sub.map((ee) => (
              <li>{ee.Name}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
export default SideBar;
