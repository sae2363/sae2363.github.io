---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

---
<style>
  body {
      background-color: Azure;
  }
  .container{
    display: flex;
    justify-content: space-between;
    gap: 40px; 
    padding: 20px;
  }
  .custom-box {
        border: 2px solid #0d6efd;
        background-color: #fff;
        padding: 20px;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        width: 25%;
    }

    .custom-box:hover {
        background-color: #0d6efd;
        color: white;
        cursor: pointer;
        transform: scale(1.075);
        transition: all 0.4s ease;
    }
</style>

Hello My name is Kyle Huang

I program in python plus Java and focus on machine learning

<div class="container">
    <div class="custom-box">
        <a href="/Projects/" style="text-decoration: none; color: inherit;">Projects</a>
    </div>
    <div class="custom-box">
        <a href="/experience/" style="text-decoration: none; color: inherit;">Experience</a>
    </div>
    <div class="custom-box">
        <a href="/interest/" style="text-decoration: none; color: inherit;">Interest</a>
    </div>
</div>
