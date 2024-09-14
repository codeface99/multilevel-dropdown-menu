import "./styles.css";

const menuItems = [
  {
    id: "1",
    label: "👤  Profile",
    children: [
      {
        id: "1-1",
        label: "📝  Personal Info",
      },
      {
        id: "1-2",
        label: "🔑  Change Password",
      },
    ],
  },
  {
    id: "2",
    label: "🔒  Privacy & Security",
    children: [
      {
        id: "2-1",
        label: "👀  Login Activity",
      },
      {
        id: "2-2",
        label: "🔐  Two-Factor Authentication",
      },
    ],
  },
  {
    id: "3",
    label: "🔔  Notifications",
    children: [
      {
        id: "3-1",
        label: "✉️  Email Notifications",
        children: [
          {
            id: "3-1-1",
            label: "🏷️  Promotional Emails",
          },
          {
            id: "3-1-2",
            label: "⚠️  Account Alerts",
          },
        ],
      },
      {
        id: "3-2",
        label: "📲  Push Notifications",
        children: [
          {
            id: "3-2-1",
            label: "📱  Device Alerts",
          },
          {
            id: "3-2-2",
            label: "🛍️  Marketing Notifications",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    label: "📞  24x7 Customer Support",
  },
];

// Function to create the menu recursively
function createMenu(items) {
  const containerElement = document.createElement("div");
  containerElement.classList.add("menu");

  items.forEach((item) => {
    const menuItemElement = document.createElement("div");
    menuItemElement.classList.add("menu-item");
    menuItemElement.textContent = item.label;

    // If the item has children, create a submenu
    if (item.children?.length) {
      const menuItemWithSubMenuElement = document.createElement("div");
      menuItemWithSubMenuElement.classList.add("menu-item-with-sub-menu");

      const subMenuElement = createMenu(item.children);
      subMenuElement.classList.add("sub-menu");
      subMenuElement.style.display = "none";

      // onmouseover
      menuItemWithSubMenuElement.onmouseenter = () =>
        (subMenuElement.style.display = "flex");

      // onmouseout
      menuItemWithSubMenuElement.onmouseleave = () =>
        (subMenuElement.style.display = "none");

      menuItemWithSubMenuElement.appendChild(menuItemElement);
      menuItemWithSubMenuElement.appendChild(subMenuElement);

      containerElement.appendChild(menuItemWithSubMenuElement);
      return;
    }

    containerElement.appendChild(menuItemElement);
  });

  return containerElement;
}

// Render the menu in the DOM
const menuContainer = document.getElementById("menu-container");
const openMenuButtonElement = document.querySelector("button");

const menuElement = createMenu(menuItems);
menuElement.style.display = "none";

openMenuButtonElement.addEventListener("click", (event) => {
  event.stopPropagation();

  if (menuElement.style.display === "none") {
    menuElement.style.display = "flex";
  } else {
    menuElement.style.display = "none";
  }
});

window.addEventListener("click", () => {
  menuElement.style.display = "none";
});

menuElement.addEventListener("click", (event) => event.stopPropagation());

menuContainer.appendChild(menuElement);
