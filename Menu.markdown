---
layout: page
title:  "Menu"
---
<style>
  .nav-menu {
    display: flex;
    gap: 20px;
  }
  .dropdown{
    position: relative;
    display: inline-block;
  }
  .dropdown button {
    background-color: #0d6efd;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .dropdown button:hover {
    background-color: #0056b3;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 5px;
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #ddd;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
<header>
  <nav class="nav-menu">
    <div class="dropdown">
      <button>Menu</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </nav>
</header>