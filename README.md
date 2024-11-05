
# Project Name

## GadgetHaven E-commerce Platform

## Overview

GadgetHaven is a responsive e-commerce platform for purchasing gadgets, based on a detailed Figma design. This project allows users to browse various gadget categories, view individual product details, manage their shopping cart, add items to a wishlist, and sort products based on price.

## Live Website
https://gadget-heaven-web.surge.sh/

## Requirement Document

https://acrobat.adobe.com/id/urn:aaid:sc:ap:d136ee7a-2fdd-4d40-adc7-caaaf2137178


## React Fundamentals Used

* React Components: Divided the website into reusable components (e.g., Navbar, Footer, ProductCard, etc.).

* React Router: Used for navigation between pages like Home, Dashboard, and Product Details.

* useState and useEffect Hooks: For managing state and side effects, such as fetching and updating product data.

* Context API: For global state management of the cart and wishlist, ensuring data persists across components.

* Conditional Rendering: To dynamically update UI elements like the active cart count and the availability of the purchase button.

## Data Management
Context API and LocalStorage: Used Context API to manage the state for the cart and wishlist. LocalStorage is used for data persistence to retain cart and wishlist items even after page reloads.

## How to Use This Project
 1. Navbar: Contains links to essential sections, including Home, Dashboard, and Stats. It also shows an active route indicator.

 2. Home Page: Features a banner, sidebar for categories, and product cards. Clicking on any product takes you to its detailed page.
3. Details Page: Displays comprehensive information on each product with options to add it to the cart or wishlist.
4. Dashboard: Users can view and manage cart and wishlist items on the Dashboard page, including sorting cart items by price.

5. Purchase Flow: Upon clicking the purchase button, a modal displays a congratulatory message, and the cart resets without reloading the page.

## Key Features

 ** Product Categorization and Filtering: Users can explore gadgets by categories like computers, phones, smartwatches, chargers, and power banks, with a sidebar navigation for easy filtering.

 ** Shopping Cart and Wishlist System: Users can add products to their cart or wishlist, with the cart count dynamically updated in the navigation bar and no duplicates allowed in the wishlist.

 ** Interactive Purchase Flow: A modal confirms the purchase, resets the cart, and congratulates the user. The purchase button is disabled when the cart is empty, ensuring a seamless checkout experience.

 ** Price Sorting and Total Calculation: On the Dashboard’s Cart tab, users can sort items by price (descending) and view the total cart amount, helping them manage expenses at a glance.

** Persistent State Management: The cart and wishlist data are managed with Context API and stored in LocalStorage, allowing items to remain saved even after page reloads or browser restarts.